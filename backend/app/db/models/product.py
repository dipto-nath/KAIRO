"""Product Database Models."""

import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.database import Base
from typing import Optional


class ProductAttribute(Base):
    """Product attributes/tags for filtering and matching."""

    __tablename__ = "product_attributes"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True, autoincrement=True)
    product_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("products.id", ondelete="CASCADE"), nullable=False, index=True
    )
    key: Mapped[str] = mapped_column(sa.String(64), nullable=False)
    value: Mapped[str] = mapped_column(sa.String(256), nullable=False)

    # Relationship
    product: Mapped["Product"] = relationship(back_populates="attributes")


class Product(Base):
    """Product catalog model."""

    __tablename__ = "products"

    id: Mapped[str] = mapped_column(sa.String(64), primary_key=True)
    sku: Mapped[str] = mapped_column(sa.String(64), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(sa.String(256), nullable=False)
    name_hindi: Mapped[Optional[str]] = mapped_column(sa.String(256), nullable=True)
    description: Mapped[str] = mapped_column(sa.Text, nullable=False)
    category: Mapped[str] = mapped_column(sa.String(64), index=True, nullable=False)
    subcategory: Mapped[str] = mapped_column(sa.String(64), index=True, nullable=False)
    price: Mapped[int] = mapped_column(sa.Integer, nullable=False)  # Stored in paise/cents
    currency: Mapped[str] = mapped_column(sa.String(3), default="INR", nullable=False)
    temperature: Mapped[str] = mapped_column(sa.String(32), nullable=False)  # cold, hot, ambient
    sugar_level: Mapped[str] = mapped_column(sa.String(32), nullable=False)  # zero, low, medium, high
    carbonated: Mapped[bool] = mapped_column(sa.Boolean, default=False, nullable=False)
    brand: Mapped[Optional[str]] = mapped_column(sa.String(128), nullable=True)
    aisle: Mapped[str] = mapped_column(sa.String(64), nullable=False)
    section: Mapped[str] = mapped_column(sa.String(128), nullable=False)
    image_url: Mapped[Optional[str]] = mapped_column(sa.String(512), nullable=True)
    image_emoji: Mapped[Optional[str]] = mapped_column(sa.String(8), nullable=True)
    is_active: Mapped[bool] = mapped_column(sa.Boolean, default=True, nullable=False)
    created_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )
    updated_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True),
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )

    # Relationships
    attributes: Mapped[list[ProductAttribute]] = relationship(
        back_populates="product", cascade="all, delete-orphan"
    )
    inventory: Mapped[list["Inventory"]] = relationship(back_populates="product")
    reservation_items: Mapped[list["ReservationItem"]] = relationship(back_populates="product")

    def __repr__(self) -> str:
        return f"<Product(id={self.id}, name={self.name}, price={self.price})>"