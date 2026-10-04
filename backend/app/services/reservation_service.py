"""Reservation Service - Business logic for reservation operations."""

from datetime import datetime, timedelta, timezone
from typing import Any

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import (
    ReservationRepository,
    InventoryRepository,
    ProductRepository,
)
from app.db.models import ReservationStatus
from app.core.exceptions import (
    ReservationNotFoundError,
    ReservationFailedError,
    InsufficientInventoryError,
)
from app.core.logging import get_logger
from app.core.security import generate_idempotency_key, generate_reservation_code

logger = get_logger(__name__)


class ReservationService:
    """Service for reservation-related operations."""

    RESERVATION_TTL_MINUTES = 30

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = ReservationRepository(session)
        self.inventory_repo = InventoryRepository(session)
        self.product_repo = ProductRepository(session)

    async def prepare_reservation(
        self,
        session_id: str,
        store_id: str,
        items: list[dict[str, Any]],
        idempotency_key: str | None = None,
    ) -> dict[str, Any]:
        """Prepare a reservation preview (requires confirmation)."""
        # Check idempotency
        if idempotency_key:
            existing = await self.repo.check_idempotency(idempotency_key)
            if existing:
                logger.info("reservation_idempotent_return", idempotency_key=idempotency_key)
                return await self._format_reservation(existing)

        # Validate inventory for each item
        validated_items = []
        total_amount = 0

        for item in items:
            product_id = item["product_id"]
            quantity = item["quantity"]

            # Get product for price
            product = await self.product_repo.get_by_id(product_id)
            if not product:
                raise ReservationFailedError(f"Product {product_id} not found")

            # Check inventory
            available, available_qty = await self.inventory_repo.check_availability(
                store_id, product_id, quantity
            )
            if not available:
                raise InsufficientInventoryError(product_id, quantity, available_qty)

            # Reserve inventory (temporary hold)
            reserved = await self.inventory_repo.reserve_quantity(store_id, product_id, quantity)
            if not reserved:
                raise ReservationFailedError(f"Failed to reserve inventory for {product_id}")

            unit_price = product.price
            subtotal = unit_price * quantity
            total_amount += subtotal

            validated_items.append({
                "product_id": product_id,
                "quantity": quantity,
                "unit_price": unit_price,
                "subtotal": subtotal,
            })

        # Create reservation with expiration
        expires_at = datetime.now(timezone.utc) + timedelta(minutes=self.RESERVATION_TTL_MINUTES)
        
        # Generate idempotency key if not provided
        if not idempotency_key:
            idempotency_key = generate_idempotency_key()

        reservation = await self.repo.create(
            session_id=session_id,
            store_id=store_id,
            items=validated_items,
            expires_at=expires_at,
            idempotency_key=idempotency_key,
        )

        # Get store name
        from app.db.repositories import StoreRepository
        store_repo = StoreRepository(self.session)
        store = await store_repo.get_by_id(store_id)
        store_name = store.name if store else "Unknown Store"

        logger.info(
            "reservation_prepared",
            reservation_id=reservation.id,
            session_id=session_id,
            total_amount=total_amount,
        )

        return await self._format_reservation(reservation, store_name)

    async def confirm_reservation(
        self, reservation_id: str, idempotency_key: str | None = None
    ) -> dict[str, Any]:
        """Confirm a pending reservation."""
        # Check idempotency
        if idempotency_key:
            existing = await self.repo.check_idempotency(idempotency_key)
            if existing and existing.id != reservation_id:
                # Different reservation with same idempotency key - return existing
                return await self._format_reservation(existing)

        reservation = await self.repo.confirm(reservation_id)
        if not reservation:
            raise ReservationNotFoundError(reservation_id)

        # Verify reservation was created correctly
        verified = await self.repo.get_by_id(reservation_id)
        if not verified or verified.status != ReservationStatus.CONFIRMED:
            raise ReservationFailedError("Reservation verification failed after confirmation")

        logger.info("reservation_confirmed", reservation_id=reservation_id)
        return await self._format_reservation(verified)

    async def update_reservation(
        self, reservation_id: str, product_id: str, new_quantity: int
    ) -> dict[str, Any]:
        """Update reservation quantity."""
        reservation = await self.repo.get_by_id(reservation_id)
        if not reservation:
            raise ReservationNotFoundError(reservation_id)

        if reservation.status not in [ReservationStatus.PENDING_CONFIRMATION, ReservationStatus.CONFIRMED]:
            raise ReservationFailedError(f"Cannot update reservation in status {reservation.status}")

        # Find the item being updated
        old_quantity = 0
        for item in reservation.items:
            if item.product_id == product_id:
                old_quantity = item.quantity
                break

        # If increasing quantity, check inventory
        if new_quantity > old_quantity:
            additional = new_quantity - old_quantity
            available, available_qty = await self.inventory_repo.check_availability(
                reservation.store_id, product_id, additional
            )
            if not available:
                raise InsufficientInventoryError(product_id, additional, available_qty)

            # Reserve additional
            reserved = await self.inventory_repo.reserve_quantity(
                reservation.store_id, product_id, additional
            )
            if not reserved:
                raise ReservationFailedError(f"Failed to reserve additional inventory")

        # If decreasing quantity, release
        elif new_quantity < old_quantity:
            released = await self.inventory_repo.release_quantity(
                reservation.store_id, product_id, old_quantity - new_quantity
            )
            if not released:
                logger.warning("inventory_release_failed_on_update", product_id=product_id)

        # Update reservation
        updated = await self.repo.update_quantity(reservation_id, product_id, new_quantity)
        if not updated:
            raise ReservationFailedError("Failed to update reservation")

        # Re-fetch with items
        verified = await self.repo.get_by_id(reservation_id)
        
        logger.info("reservation_updated", reservation_id=reservation_id, product_id=product_id, new_quantity=new_quantity)
        return await self._format_reservation(verified)

    async def cancel_reservation(self, reservation_id: str) -> dict[str, Any]:
        """Cancel a reservation and release inventory."""
        reservation = await self.repo.get_by_id(reservation_id)
        if not reservation:
            raise ReservationNotFoundError(reservation_id)

        if reservation.status not in [ReservationStatus.PENDING_CONFIRMATION, ReservationStatus.CONFIRMED]:
            raise ReservationFailedError(f"Cannot cancel reservation in status {reservation.status}")

        # Release all reserved inventory
        for item in reservation.items:
            await self.inventory_repo.release_quantity(
                reservation.store_id, item.product_id, item.quantity
            )

        cancelled = await self.repo.cancel(reservation_id)
        if not cancelled:
            raise ReservationFailedError("Failed to cancel reservation")

        logger.info("reservation_cancelled", reservation_id=reservation_id)
        return await self._format_reservation(cancelled)

    async def get_reservation(self, reservation_id: str) -> dict[str, Any] | None:
        """Get reservation by ID."""
        reservation = await self.repo.get_by_id(reservation_id)
        if not reservation:
            return None
        return await self._format_reservation(reservation)

    async def get_active_reservation(self, session_id: str) -> dict[str, Any] | None:
        """Get active reservation for session."""
        reservation = await self.repo.get_active_by_session(session_id)
        if not reservation:
            return None
        return await self._format_reservation(reservation)

    async def _format_reservation(
        self, reservation: Any, store_name: str | None = None
    ) -> dict[str, Any]:
        """Format reservation for API response."""
        if store_name is None:
            from app.db.repositories import StoreRepository
            store_repo = StoreRepository(self.session)
            store = await store_repo.get_by_id(reservation.store_id)
            store_name = store.name if store else "Unknown Store"

        items = []
        for item in reservation.items:
            product = item.product
            items.append({
                "product_id": item.product_id,
                "product_name": product.name if product else "Unknown",
                "product_emoji": product.image_emoji if product else "",
                "quantity": item.quantity,
                "unit_price": item.unit_price,
                "subtotal": item.subtotal,
            })

        return {
            "id": reservation.id,
            "reservation_code": reservation.reservation_code,
            "session_id": reservation.session_id,
            "store_id": reservation.store_id,
            "store_name": store_name,
            "status": reservation.status.value,
            "total_amount": reservation.total_amount,
            "items": items,
            "created_at": reservation.created_at,
            "expires_at": reservation.expires_at,
            "confirmed_at": reservation.confirmed_at,
        }

    async def expire_reservations(self) -> int:
        """Expire old reservations and release inventory. Returns count."""
        expired = await self.repo.get_expired_reservations()
        count = 0
        
        for reservation in expired:
            # Release inventory
            for item in reservation.items:
                await self.inventory_repo.release_quantity(
                    reservation.store_id, item.product_id, item.quantity
                )
            
            # Mark expired
            await self.repo.mark_expired(reservation.id)
            count += 1
            
            logger.info("reservation_expired", reservation_id=reservation.id)

        return count
