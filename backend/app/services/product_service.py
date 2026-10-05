"""Product Service - Business logic for product operations."""

from typing import Any, Optional

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import ProductRepository
from app.core.exceptions import ProductNotFoundError, ProductSearchFailedError
from app.core.logging import get_logger

logger = get_logger(__name__)


class ProductService:
    """Service for product-related operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = ProductRepository(session)

    async def search_products(
        self,
        query: Optional[str] = None,
        category: Optional[str] = None,
        subcategory: Optional[str] = None,
        max_price: Optional[int] = None,
        min_price: Optional[int] = None,
        temperature: Optional[str] = None,
        sugar_level: Optional[str] = None,
        carbonated: Optional[bool] = None,
        store_id: Optional[str] = None,
        limit: int = 20,
        offset: int = 0,
    ) -> list[dict[str, Any]]:
        """Search products with filters and return structured results."""
        try:
            products = await self.repo.search(
                query=query,
                category=category,
                subcategory=subcategory,
                max_price=max_price,
                min_price=min_price,
                temperature=temperature,
                sugar_level=sugar_level,
                carbonated=carbonated,
                limit=limit,
                offset=offset,
            )

            results = []
            for product in products:
                results.append({
                    "id": product.id,
                    "sku": product.sku,
                    "name": product.name,
                    "name_hindi": product.name_hindi,
                    "description": product.description,
                    "price": product.price,
                    "currency": product.currency,
                    "category": product.category,
                    "subcategory": product.subcategory,
                    "temperature": product.temperature,
                    "sugar_level": product.sugar_level,
                    "carbonated": product.carbonated,
                    "brand": product.brand,
                    "aisle": product.aisle,
                    "section": product.section,
                    "image_url": product.image_url,
                    "image_emoji": product.image_emoji,
                    "attributes": [
                        {"key": attr.key, "value": attr.value}
                        for attr in product.attributes
                    ],
                })

            logger.info(
                "product_search_completed",
                count=len(results),
                query=query,
                max_price=max_price,
            )
            return results

        except Exception as e:
            logger.error("product_search_failed", error=str(e))
            raise ProductSearchFailedError(str(e))

    async def get_product_details(self, product_id: str) -> dict[str, Any]:
        """Get detailed product information."""
        product = await self.repo.get_by_id(product_id)
        if not product:
            raise ProductNotFoundError(product_id)

        return {
            "id": product.id,
            "sku": product.sku,
            "name": product.name,
            "name_hindi": product.name_hindi,
            "description": product.description,
            "price": product.price,
            "currency": product.currency,
            "category": product.category,
            "subcategory": product.subcategory,
            "temperature": product.temperature,
            "sugar_level": product.sugar_level,
            "carbonated": product.carbonated,
            "brand": product.brand,
            "aisle": product.aisle,
            "section": product.section,
            "image_url": product.image_url,
            "image_emoji": product.image_emoji,
            "attributes": [
                {"key": attr.key, "value": attr.value}
                for attr in product.attributes
            ],
        }

    async def find_alternatives(
        self, product_id: str, store_id: str, limit: int = 3
    ) -> list[dict[str, Any]]:
        """Find alternative products."""
        try:
            products = await self.repo.find_alternatives(product_id, store_id, limit)

            results = []
            for product in products:
                results.append({
                    "id": product.id,
                    "sku": product.sku,
                    "name": product.name,
                    "name_hindi": product.name_hindi,
                    "description": product.description,
                    "price": product.price,
                    "currency": product.currency,
                    "category": product.category,
                    "subcategory": product.subcategory,
                    "temperature": product.temperature,
                    "sugar_level": product.sugar_level,
                    "carbonated": product.carbonated,
                    "brand": product.brand,
                    "aisle": product.aisle,
                    "section": product.section,
                    "image_url": product.image_url,
                    "image_emoji": product.image_emoji,
                    "attributes": [
                        {"key": attr.key, "value": attr.value}
                        for attr in product.attributes
                    ],
                })

            return results

        except Exception as e:
            logger.error("find_alternatives_failed", error=str(e))
            raise ProductSearchFailedError(str(e))