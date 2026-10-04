"""Product Repository."""

from typing import Optional
from uuid import uuid4

import sqlalchemy as sa
from sqlalchemy import select, and_, or_, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.db.models import Product, ProductAttribute


class ProductRepository:
    """Repository for product operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_by_id(self, product_id: str) -> Optional[Product]:
        """Get product by ID with attributes."""
        result = await self.session.execute(
            select(Product)
            .options(selectinload(Product.attributes))
            .where(Product.id == product_id)
        )
        return result.scalar_one_or_none()

    async def get_by_sku(self, sku: str) -> Optional[Product]:
        """Get product by SKU."""
        result = await self.session.execute(
            select(Product).where(Product.sku == sku)
        )
        return result.scalar_one_or_none()

    async def search(
        self,
        query: str | None = None,
        category: str | None = None,
        subcategory: str | None = None,
        max_price: int | None = None,
        min_price: int | None = None,
        temperature: str | None = None,
        sugar_level: str | None = None,
        carbonated: bool | None = None,
        is_active: bool = True,
        limit: int = 20,
        offset: int = 0,
    ) -> list[Product]:
        """Search products with filters."""
        conditions = []

        if is_active is not None:
            conditions.append(Product.is_active == is_active)

        if query:
            search_term = f"%{query.lower()}%"
            conditions.append(
                or_(
                    Product.name.ilike(search_term),
                    Product.description.ilike(search_term),
                    Product.category.ilike(search_term),
                    Product.subcategory.ilike(search_term),
                )
            )

        if category:
            conditions.append(Product.category == category)

        if subcategory:
            conditions.append(Product.subcategory == subcategory)

        if max_price is not None:
            conditions.append(Product.price <= max_price)

        if min_price is not None:
            conditions.append(Product.price >= min_price)

        if temperature:
            conditions.append(Product.temperature == temperature)

        if sugar_level:
            conditions.append(Product.sugar_level == sugar_level)

        if carbonated is not None:
            conditions.append(Product.carbonated == carbonated)

        stmt = (
            select(Product)
            .options(selectinload(Product.attributes))
            .where(and_(*conditions))
            .order_by(Product.price.asc())
            .limit(limit)
            .offset(offset)
        )

        result = await self.session.execute(stmt)
        return list(result.scalars().all())

    async def find_alternatives(
        self,
        product_id: str,
        store_id: str,
        limit: int = 3,
    ) -> list[Product]:
        """Find alternative products similar to the given product."""
        # Get the reference product
        ref_product = await self.get_by_id(product_id)
        if not ref_product:
            return []

        # Search for similar products in the same category
        conditions = [
            Product.is_active == True,
            Product.id != product_id,
            Product.category == ref_product.category,
        ]

        # Prefer same subcategory
        # Prefer similar temperature
        conditions.append(Product.temperature == ref_product.temperature)

        # Prefer similar sugar level
        conditions.append(Product.sugar_level == ref_product.sugar_level)

        stmt = (
            select(Product)
            .options(selectinload(Product.attributes))
            .where(and_(*conditions))
            .order_by(
                # Prioritize same subcategory
                sa.case((Product.subcategory == ref_product.subcategory, 0), else_=1),
                # Then by price similarity
                func.abs(Product.price - ref_product.price),
            )
            .limit(limit)
        )

        result = await self.session.execute(stmt)
        return list(result.scalars().all())

    async def create(self, product: Product) -> Product:
        """Create a new product."""
        self.session.add(product)
        await self.session.flush()
        return product

    async def create_with_attributes(
        self, product: Product, attributes: list[dict[str, str]]
    ) -> Product:
        """Create product with attributes."""
        self.session.add(product)
        await self.session.flush()

        for attr in attributes:
            pa = ProductAttribute(
                product_id=product.id,
                key=attr["key"],
                value=attr["value"],
            )
            self.session.add(pa)

        await self.session.flush()
        return product