"""Reservation Repository."""

from datetime import datetime, timezone
from typing import Optional

import sqlalchemy as sa
from sqlalchemy import select, and_, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.db.models import (
    Reservation,
    ReservationItem,
    ReservationStatus,
)


class ReservationRepository:
    """Repository for reservation operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_by_id(self, reservation_id: str) -> Optional[Reservation]:
        """Get reservation by ID with items."""
        result = await self.session.execute(
            select(Reservation)
            .options(selectinload(Reservation.items).selectinload(ReservationItem.product))
            .where(Reservation.id == reservation_id)
        )
        return result.scalar_one_or_none()

    async def get_by_code(self, reservation_code: str) -> Optional[Reservation]:
        """Get reservation by code."""
        result = await self.session.execute(
            select(Reservation)
            .options(selectinload(Reservation.items).selectinload(ReservationItem.product))
            .where(Reservation.reservation_code == reservation_code)
        )
        return result.scalar_one_or_none()

    async def get_by_session(
        self, session_id: str, status: ReservationStatus | None = None
    ) -> list[Reservation]:
        """Get reservations for a session."""
        conditions = [Reservation.session_id == session_id]
        if status:
            conditions.append(Reservation.status == status)

        result = await self.session.execute(
            select(Reservation)
            .options(selectinload(Reservation.items).selectinload(ReservationItem.product))
            .where(and_(*conditions))
            .order_by(Reservation.created_at.desc())
        )
        return list(result.scalars().all())

    async def get_active_by_session(self, session_id: str) -> Optional[Reservation]:
        """Get active (pending/confirmed) reservation for session."""
        result = await self.session.execute(
            select(Reservation)
            .options(selectinload(Reservation.items).selectinload(ReservationItem.product))
            .where(
                and_(
                    Reservation.session_id == session_id,
                    Reservation.status.in_([
                        ReservationStatus.PENDING_CONFIRMATION,
                        ReservationStatus.CONFIRMED,
                    ]),
                )
            )
            .order_by(Reservation.created_at.desc())
            .limit(1)
        )
        return result.scalar_one_or_none()

    async def create(
        self,
        session_id: str,
        store_id: str,
        items: list[dict],
        expires_at: datetime,
        idempotency_key: str | None = None,
    ) -> Reservation:
        """Create a new reservation with items."""
        total_amount = sum(item["subtotal"] for item in items)
        import secrets
        reservation_code = f"KAIRO-{secrets.randbelow(9000) + 1000}"

        reservation = Reservation(
            id=f"rsv_{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S%f')}",
            reservation_code=reservation_code,
            session_id=session_id,
            store_id=store_id,
            status=ReservationStatus.PENDING_CONFIRMATION,
            total_amount=total_amount,
            expires_at=expires_at,
            idempotency_key=idempotency_key,
        )

        self.session.add(reservation)
        await self.session.flush()

        # Add items
        for item in items:
            reservation_item = ReservationItem(
                reservation_id=reservation.id,
                product_id=item["product_id"],
                quantity=item["quantity"],
                unit_price=item["unit_price"],
                subtotal=item["subtotal"],
            )
            self.session.add(reservation_item)

        await self.session.flush()
        return reservation

    async def confirm(self, reservation_id: str) -> Optional[Reservation]:
        """Confirm a pending reservation."""
        result = await self.session.execute(
            select(Reservation)
            .where(
                and_(
                    Reservation.id == reservation_id,
                    Reservation.status == ReservationStatus.PENDING_CONFIRMATION,
                )
            )
            .with_for_update()
        )
        reservation = result.scalar_one_or_none()

        if not reservation:
            return None

        reservation.status = ReservationStatus.CONFIRMED
        reservation.confirmed_at = datetime.now(timezone.utc)
        await self.session.flush()
        return reservation

    async def cancel(self, reservation_id: str) -> Optional[Reservation]:
        """Cancel a reservation."""
        result = await self.session.execute(
            select(Reservation)
            .where(
                and_(
                    Reservation.id == reservation_id,
                    Reservation.status.in_([
                        ReservationStatus.PENDING_CONFIRMATION,
                        ReservationStatus.CONFIRMED,
                    ]),
                )
            )
            .with_for_update()
        )
        reservation = result.scalar_one_or_none()

        if not reservation:
            return None

        reservation.status = ReservationStatus.CANCELLED
        reservation.cancelled_at = datetime.now(timezone.utc)
        await self.session.flush()
        return reservation

    async def update_quantity(
        self, reservation_id: str, product_id: str, new_quantity: int
    ) -> Optional[Reservation]:
        """Update item quantity in reservation."""
        result = await self.session.execute(
            select(Reservation)
            .options(selectinload(Reservation.items))
            .where(
                and_(
                    Reservation.id == reservation_id,
                    Reservation.status.in_([
                        ReservationStatus.PENDING_CONFIRMATION,
                        ReservationStatus.CONFIRMED,
                    ]),
                )
            )
            .with_for_update()
        )
        reservation = result.scalar_one_or_none()

        if not reservation:
            return None

        # Find and update item
        item_updated = False
        total_amount = 0
        for item in reservation.items:
            if item.product_id == product_id:
                if new_quantity <= 0:
                    await self.session.delete(item)
                else:
                    item.quantity = new_quantity
                    item.subtotal = item.unit_price * new_quantity
                    total_amount += item.subtotal
                    item_updated = True
            else:
                total_amount += item.subtotal

        if not item_updated and new_quantity > 0:
            # Add new item (would need product lookup for price)
            pass

        reservation.total_amount = total_amount
        await self.session.flush()
        return reservation

    async def mark_expired(self, reservation_id: str) -> Optional[Reservation]:
        """Mark reservation as expired."""
        result = await self.session.execute(
            select(Reservation)
            .where(
                and_(
                    Reservation.id == reservation_id,
                    Reservation.status.in_([
                        ReservationStatus.PENDING_CONFIRMATION,
                        ReservationStatus.CONFIRMED,
                    ]),
                )
            )
            .with_for_update()
        )
        reservation = result.scalar_one_or_none()

        if not reservation:
            return None

        reservation.status = ReservationStatus.EXPIRED
        await self.session.flush()
        return reservation

    async def get_expired_reservations(self) -> list[Reservation]:
        """Get all expired but not yet marked reservations."""
        now = datetime.now(timezone.utc)
        result = await self.session.execute(
            select(Reservation)
            .where(
                and_(
                    Reservation.expires_at < now,
                    Reservation.status.in_([
                        ReservationStatus.PENDING_CONFIRMATION,
                        ReservationStatus.CONFIRMED,
                    ]),
                )
            )
        )
        return list(result.scalars().all())

    async def check_idempotency(self, idempotency_key: str) -> Optional[Reservation]:
        """Check if reservation with idempotency key exists."""
        if not idempotency_key:
            return None
        result = await self.session.execute(
            select(Reservation).where(Reservation.idempotency_key == idempotency_key)
        )
        return result.scalar_one_or_none()
