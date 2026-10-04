"""Inventory Repository."""

from typing import Optional

from sqlalchemy import select, and_, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.db.models import Inventory, Product


class InventoryRepository:
    """Repository for inventory operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_by_store_product(
        self, store_id: str, product_id: str
    ) -> Optional[Inventory]:
        """Get inventory record for a store-product combination."""
        result = await self.session.execute(
            select(Inventory)
            .options(selectinload(Inventory.product))
            .where(and_(Inventory.store_id == store_id, Inventory.product_id == product_id))
        )
        return result.scalar_one_or_none()

    async def get_store_inventory(
        self, store_id: str, include_out_of_stock: bool = False
    ) -> list[Inventory]:
        """Get all inventory for a store."""
        conditions = [Inventory.store_id == store_id]
        if not include_out_of_stock:
            conditions.append(Inventory.quantity > Inventory.reserved_quantity)

        result = await self.session.execute(
            select(Inventory)
            .options(selectinload(Inventory.product))
            .where(and_(*conditions))
        )
        return list(result.scalars().all())

    async def check_availability(
        self, store_id: str, product_id: str, quantity: int = 1
    ) -> tuple[bool, int]:
        """Check if product is available in quantity."""
        inventory = await self.get_by_store_product(store_id, product_id)
        if not inventory:
            return False, 0

        available = inventory.available_quantity
        return available >= quantity, available

    async def reserve_quantity(
        self, store_id: str, product_id: str, quantity: int
    ) -> bool:
        """Reserve quantity (increment reserved_quantity). Returns success."""
        result = await self.session.execute(
            select(Inventory).where(
                and_(
                    Inventory.store_id == store_id,
                    Inventory.product_id == product_id,
                    Inventory.quantity - Inventory.reserved_quantity >= quantity,
                )
            ).with_for_update()
        )
        inventory = result.scalar_one_or_none()

        if not inventory:
            return False

        inventory.reserved_quantity += quantity
        await self.session.flush()
        return True

    async def release_quantity(
        self, store_id: str, product_id: str, quantity: int
    ) -> bool:
        """Release reserved quantity (decrement reserved_quantity)."""
        result = await self.session.execute(
            select(Inventory).where(
                and_(Inventory.store_id == store_id, Inventory.product_id == product_id)
            ).with_for_update()
        )
        inventory = result.scalar_one_or_none()

        if not inventory:
            return False

        inventory.reserved_quantity = max(0, inventory.reserved_quantity - quantity)
        await self.session.flush()
        return True

    async def update_quantity(
        self, store_id: str, product_id: str, quantity: int
    ) -> Optional[Inventory]:
        """Update total quantity."""
        inventory = await self.get_by_store_product(store_id, product_id)
        if not inventory:
            return None

        inventory.quantity = quantity
        await self.session.flush()
        return inventory

    async def create_or_update(
        self, store_id: str, product_id: str, quantity: int
    ) -> Inventory:
        """Create or update inventory record."""
        inventory = await self.get_by_store_product(store_id, product_id)
        if inventory:
            inventory.quantity = quantity
        else:
            inventory = Inventory(
                store_id=store_id,
                product_id=product_id,
                quantity=quantity,
                reserved_quantity=0,
            )
            self.session.add(inventory)

        await self.session.flush()
        return inventory