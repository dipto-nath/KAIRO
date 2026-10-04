"""Inventory Database Model."""

import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.database import Base


class Inventory(Base):
    """Store inventory model with reserved quantity tracking."""

    __tablename__ = "inventory"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True, autoincrement=True)
    store_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("stores.id", ondelete="CASCADE"), nullable=False, index=True
    )
    product_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("products.id", ondelete="CASCADE"), nullable=False, index=True
    )
    quantity: Mapped[int] = mapped_column(sa.Integer, default=0, nullable=False)
    reserved_quantity: Mapped[int] = mapped_column(sa.Integer, default=0, nullable=False)
    last_updated: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True),
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )

    # Relationships
    store: Mapped["Store"] = relationship(back_populates="inventory")
    product: Mapped["Product"] = relationship(back_populates="inventory")

    # Composite unique constraint
    __table_args__ = (
        sa.UniqueConstraint("store_id", "product_id", name="uq_store_product"),
        sa.Index("ix_inventory_store_product", "store_id", "product_id"),
    )

    @property
    def available_quantity(self) -> int:
        """Calculate available quantity (total - reserved)."""
        return max(0, self.quantity - self.reserved_quantity)

    @property
    def status(self) -> str:
        """Get inventory status."""
        available = self.available_quantity
        if available == 0:
            return "out_of_stock"
        elif available <= 5:
            return "low_stock"
        return "available"

    def __repr__(self) -> str:
        return f"<Inventory(store={self.store_id}, product={self.product_id}, qty={self.quantity}, reserved={self.reserved_quantity})>"