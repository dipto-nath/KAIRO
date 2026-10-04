"""Store Database Model."""

import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.database import Base


class Store(Base):
    """Store/location model."""

    __tablename__ = "stores"

    id: Mapped[str] = mapped_column(sa.String(64), primary_key=True)
    store_code: Mapped[str] = mapped_column(sa.String(32), unique=True, index=True)
    name: Mapped[str] = mapped_column(sa.String(256), nullable=False)
    address: Mapped[str] = mapped_column(sa.Text, nullable=False)
    city: Mapped[str] = mapped_column(sa.String(128), nullable=False)
    is_open: Mapped[bool] = mapped_column(sa.Boolean, default=True, nullable=False)
    opening_time: Mapped[str] = mapped_column(sa.String(5), nullable=False)  # HH:MM
    closing_time: Mapped[str] = mapped_column(sa.String(5), nullable=False)  # HH:MM
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
    inventory: Mapped[list["Inventory"]] = relationship(back_populates="store")
    reservations: Mapped[list["Reservation"]] = relationship(back_populates="store")
    sessions: Mapped[list["Session"]] = relationship(back_populates="store")

    def __repr__(self) -> str:
        return f"<Store(id={self.id}, code={self.store_code}, name={self.name})>"