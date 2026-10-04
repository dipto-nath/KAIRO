"""Store Repository."""

from typing import Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import Store


class StoreRepository:
    """Repository for store operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_by_id(self, store_id: str) -> Optional[Store]:
        """Get store by ID."""
        result = await self.session.execute(select(Store).where(Store.id == store_id))
        return result.scalar_one_or_none()

    async def get_by_code(self, store_code: str) -> Optional[Store]:
        """Get store by code."""
        result = await self.session.execute(select(Store).where(Store.store_code == store_code))
        return result.scalar_one_or_none()

    async def get_active_store(self) -> Optional[Store]:
        """Get the first active store."""
        result = await self.session.execute(
            select(Store).where(Store.is_open == True).limit(1)
        )
        return result.scalar_one_or_none()

    async def create(self, store: Store) -> Store:
        """Create a new store."""
        self.session.add(store)
        await self.session.flush()
        return store