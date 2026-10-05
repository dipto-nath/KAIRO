"""Inventory Service - Business logic for inventory operations."""

from typing import Any, Optional, Dict

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import InventoryRepository, ProductRepository
from app.core.exceptions import InventoryVerificationFailedError
from app.core.logging import get_logger

logger = get_logger(__name__)


class InventoryService:
    """Service for inventory-related operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = InventoryRepository(session)
        self.product_repo = ProductRepository(session)

    async def check_inventory(
        self, store_id: str, product_id: str, quantity: int = 1
    ) -> dict[str, Any]:
        """Check inventory availability for a product."""
        try:
            # Get inventory record
            inventory = await self.repo.get_by_store_product(store_id, product_id)
            
            if not inventory:
                # Product not in inventory for this store
                return {
                    "product_id": product_id,
                    "store_id": store_id,
                    "available": False,
                    "quantity": 0,
                    "reserved_quantity": 0,
                    "status": "out_of_stock",
                    "verification_failed": False,
                }

            available = inventory.available_quantity
            is_available = available >= quantity

            return {
                "product_id": product_id,
                "store_id": store_id,
                "available": is_available,
                "quantity": available,
                "reserved_quantity": inventory.reserved_quantity,
                "status": inventory.status,
                "verification_failed": False,
            }

        except Exception as e:
            logger.error("inventory_check_failed", error=str(e), store_id=store_id, product_id=product_id)
            # Return failure indicator instead of fake availability
            return {
                "product_id": product_id,
                "store_id": store_id,
                "available": False,
                "quantity": 0,
                "reserved_quantity": 0,
                "status": "verification_failed",
                "verification_failed": True,
                "error": str(e),
            }

    async def get_store_inventory(
        self, store_id: str, include_out_of_stock: bool = False
    ) -> list[dict[str, Any]]:
        """Get full inventory for a store."""
        try:
            inventory_items = await self.repo.get_store_inventory(store_id, include_out_of_stock)

            results = []
            for item in inventory_items:
                product = item.product
                if product:
                    results.append({
                        "product_id": product.id,
                        "product_name": product.name,
                        "quantity": item.quantity,
                        "reserved_quantity": item.reserved_quantity,
                        "available_quantity": item.available_quantity,
                        "status": item.status,
                        "price": product.price,
                        "aisle": product.aisle,
                        "section": product.section,
                    })

            return results

        except Exception as e:
            logger.error("get_store_inventory_failed", error=str(e), store_id=store_id)
            raise InventoryVerificationFailedError("all", store_id)

    async def reserve_quantity(
        self, store_id: str, product_id: str, quantity: int
    ) -> bool:
        """Reserve quantity for a reservation."""
        try:
            success = await self.repo.reserve_quantity(store_id, product_id, quantity)
            if success:
                logger.info("inventory_reserved", store_id=store_id, product_id=product_id, quantity=quantity)
            else:
                logger.warning("inventory_reserve_failed", store_id=store_id, product_id=product_id, quantity=quantity)
            return success
        except Exception as e:
            logger.error("inventory_reserve_error", error=str(e), store_id=store_id, product_id=product_id)
            return False

    async def release_quantity(
        self, store_id: str, product_id: str, quantity: int
    ) -> bool:
        """Release reserved quantity."""
        try:
            success = await self.repo.release_quantity(store_id, product_id, quantity)
            if success:
                logger.info("inventory_released", store_id=store_id, product_id=product_id, quantity=quantity)
            return success
        except Exception as e:
            logger.error("inventory_release_error", error=str(e), store_id=store_id, product_id=product_id)
            return False

    async def get_product_location(
        self, store_id: str, product_id: str
    ) -> Optional[Dict[str, Any]]:
        """Get product location in store."""
        product = await self.product_repo.get_by_id(product_id)
        if not product:
            return None

        inventory = await self.repo.get_by_store_product(store_id, product_id)
        
        return {
            "store_id": store_id,
            "product_id": product_id,
            "aisle": product.aisle,
            "section": product.section,
            "location_description": f"{product.section} - {product.aisle}",
            "available": inventory.available_quantity > 0 if inventory else False,
        }