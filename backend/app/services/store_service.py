"""Store Service - Business logic for store operations."""

from typing import Any, Optional, Dict

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import StoreRepository
from app.core.exceptions import StoreNotFoundError
from app.core.logging import get_logger

logger = get_logger(__name__)


class StoreService:
    """Service for store-related operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = StoreRepository(session)

    async def get_store(self, store_id: str) -> dict[str, Any]:
        """Get store information."""
        store = await self.repo.get_by_id(store_id)
        if not store:
            raise StoreNotFoundError(store_id)

        return {
            "id": store.id,
            "store_code": store.store_code,
            "name": store.name,
            "address": store.address,
            "city": store.city,
            "is_open": store.is_open,
            "opening_time": store.opening_time,
            "closing_time": store.closing_time,
        }

    async def get_store_info(self, store_id: str) -> dict[str, Any]:
        """Get detailed store information."""
        store = await self.repo.get_by_id(store_id)
        if not store:
            raise StoreNotFoundError(store_id)

        # Get aisle/section info from products
        from app.db.repositories import ProductRepository
        product_repo = ProductRepository(self.session)
        
        # Get distinct aisles and sections
        from sqlalchemy import select, distinct
        from app.db.models import Product
        
        aisles_result = await self.session.execute(
            select(distinct(Product.aisle), Product.section)
            .where(Product.is_active == True)
            .order_by(Product.aisle)
        )
        aisles = [{"aisle": row[0], "section": row[1]} for row in aisles_result.all()]

        return {
            "store": {
                "id": store.id,
                "store_code": store.store_code,
                "name": store.name,
                "address": store.address,
                "city": store.city,
                "is_open": store.is_open,
                "opening_time": store.opening_time,
                "closing_time": store.closing_time,
            },
            "aisles": aisles,
        }

    async def get_active_store(self) -> Optional[Dict[str, Any]]:
        """Get the default active store."""
        store = await self.repo.get_active_store()
        if not store:
            return None

        return {
            "id": store.id,
            "store_code": store.store_code,
            "name": store.name,
            "address": store.address,
            "city": store.city,
            "is_open": store.is_open,
            "opening_time": store.opening_time,
            "closing_time": store.closing_time,
        }