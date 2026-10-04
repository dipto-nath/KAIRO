#!/usr/bin/env python3
"""Database seeding script for KAIRO."""

import asyncio
import sys
from pathlib import Path

# Add backend to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.core.config import settings
from app.db.database import init_db, get_session
from app.db.models import Store, Product, ProductAttribute, Inventory
from app.core.logging import configure_logging, get_logger

configure_logging()
logger = get_logger(__name__)


async def seed_database():
    """Seed the database with initial data."""
    init_db()
    
    async with get_session() as session:
        # Check if already seeded
        from sqlalchemy import select
        result = await session.execute(select(Store).limit(1))
        if result.scalar_one_or_none():
            logger.info("database_already_seeded")
            return

        logger.info("seeding_database")

        # Create store
        store = Store(
            id="store_042",
            store_code="042",
            name="Hatiara Central",
            address="Plot 42, Hatiara Main Road, Kolkata — 700157",
            city="Kolkata",
            is_open=True,
            opening_time="06:00",
            closing_time="23:00",
        )
        session.add(store)
        await session.flush()

        # Create products
        products = [
            Product(
                id="prod_001",
                sku="STR-MILK-001",
                name="Strawberry Milk",
                name_hindi="स्ट्रॉबेरी दूध",
                description="Real strawberry extract, low sugar, cold-pressed milk",
                category="beverages",
                subcategory="dairy",
                price=6500,
                currency="INR",
                temperature="cold",
                sugar_level="low",
                carbonated=False,
                brand="KAIRO Select",
                aisle="Aisle 2",
                section="Refrigerated Drinks",
                image_emoji="🍓",
                is_active=True,
            ),
            Product(
                id="prod_002",
                sku="PCH-TEA-002",
                name="Peach Iced Tea",
                name_hindi="पीच आइस्ड टी",
                description="Lightly sweetened peach blend, zero artificial flavors",
                category="beverages",
                subcategory="tea",
                price=5500,
                currency="INR",
                temperature="cold",
                sugar_level="low",
                carbonated=False,
                brand="KAIRO Select",
                aisle="Aisle 2",
                section="Refrigerated Drinks",
                image_emoji="🍑",
                is_active=True,
            ),
            Product(
                id="prod_003",
                sku="ZRO-COLA-003",
                name="Zero Sugar Cola",
                description="Classic cola taste, zero calories, extra carbonated",
                category="beverages",
                subcategory="soda",
                price=6000,
                currency="INR",
                temperature="cold",
                sugar_level="zero",
                carbonated=True,
                brand="KAIRO Select",
                aisle="Aisle 1",
                section="Fizzy Drinks",
                image_emoji="🥤",
                is_active=True,
            ),
            Product(
                id="prod_004",
                sku="PRT-COC-004",
                name="Protein Cocoa Drink",
                description="Dark chocolate, 20g protein, no added sugar",
                category="beverages",
                subcategory="protein",
                price=9500,
                currency="INR",
                temperature="cold",
                sugar_level="low",
                carbonated=False,
                brand="KAIRO Select",
                aisle="Aisle 3",
                section="Health Drinks",
                image_emoji="🍫",
                is_active=True,
            ),
            Product(
                id="prod_005",
                sku="GRN-APL-005",
                name="Green Apple Sparkling",
                description="Crisp green apple, lightly carbonated, low calories",
                category="beverages",
                subcategory="sparkling",
                price=5800,
                currency="INR",
                temperature="cold",
                sugar_level="low",
                carbonated=True,
                brand="KAIRO Select",
                aisle="Aisle 1",
                section="Fizzy Drinks",
                image_emoji="🍏",
                is_active=True,
            ),
            Product(
                id="prod_006",
                sku="LYC-COC-006",
                name="Lychee Coconut Water",
                description="Natural electrolytes, lychee flavored, 100% natural",
                category="beverages",
                subcategory="water",
                price=6800,
                currency="INR",
                temperature="cold",
                sugar_level="low",
                carbonated=False,
                brand="KAIRO Select",
                aisle="Aisle 2",
                section="Refrigerated Drinks",
                image_emoji="🥥",
                is_active=True,
            ),
        ]

        for product in products:
            session.add(product)

        await session.flush()

        # Create product attributes
        attributes = [
            ProductAttribute(product_id="prod_001", key="dietary", value="vegetarian"),
            ProductAttribute(product_id="prod_001", key="allergens", value="milk"),
            ProductAttribute(product_id="prod_001", key="size", value="200ml"),
            ProductAttribute(product_id="prod_002", key="dietary", value="vegan"),
            ProductAttribute(product_id="prod_002", key="caffeine", value="low"),
            ProductAttribute(product_id="prod_002", key="size", value="300ml"),
            ProductAttribute(product_id="prod_003", key="dietary", value="vegan"),
            ProductAttribute(product_id="prod_003", key="caffeine", value="medium"),
            ProductAttribute(product_id="prod_003", key="size", value="330ml"),
            ProductAttribute(product_id="prod_004", key="dietary", value="vegetarian"),
            ProductAttribute(product_id="prod_004", key="protein", value="20g"),
            ProductAttribute(product_id="prod_004", key="allergens", value="milk, soy"),
            ProductAttribute(product_id="prod_004", key="size", value="250ml"),
            ProductAttribute(product_id="prod_005", key="dietary", value="vegan"),
            ProductAttribute(product_id="prod_005", key="calories", value="5kcal"),
            ProductAttribute(product_id="prod_005", key="size", value="250ml"),
            ProductAttribute(product_id="prod_006", key="dietary", value="vegan"),
            ProductAttribute(product_id="prod_006", key="electrolytes", value="natural"),
            ProductAttribute(product_id="prod_006", key="size", value="300ml"),
        ]

        for attr in attributes:
            session.add(attr)

        await session.flush()

        # Create inventory
        inventory_data = [
            {"product_id": "prod_001", "quantity": 6, "reserved": 0},
            {"product_id": "prod_002", "quantity": 8, "reserved": 0},
            {"product_id": "prod_003", "quantity": 12, "reserved": 0},
            {"product_id": "prod_004", "quantity": 2, "reserved": 0},
            {"product_id": "prod_005", "quantity": 0, "reserved": 0},
            {"product_id": "prod_006", "quantity": 5, "reserved": 0},
        ]

        for inv in inventory_data:
            inventory = Inventory(
                store_id="store_042",
                product_id=inv["product_id"],
                quantity=inv["quantity"],
                reserved_quantity=inv["reserved"],
            )
            session.add(inventory)

        await session.commit()
        logger.info("database_seeded_successfully")


if __name__ == "__main__":
    asyncio.run(seed_database())
