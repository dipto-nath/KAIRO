"""Reservation Database Models."""

import enum
import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.database import Base
from typing import Optional


class ReservationStatus(str, enum.Enum):
    """Reservation status enumeration."""

    PENDING_CONFIRMATION = "pending_confirmation"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"
    EXPIRED = "expired"
    FAILED = "failed"


class Reservation(Base):
    """Reservation model."""

    __tablename__ = "reservations"

    id: Mapped[str] = mapped_column(sa.String(64), primary_key=True)
    reservation_code: Mapped[str] = mapped_column(sa.String(32), unique=True, index=True, nullable=False)
    session_id: Mapped[str] = mapped_column(sa.String(64), index=True, nullable=False)
    store_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("stores.id", ondelete="RESTRICT"), nullable=False, index=True
    )
    status: Mapped[ReservationStatus] = mapped_column(
        sa.Enum(ReservationStatus, name="reservation_status", create_type=False, native_enum=False), default=ReservationStatus.PENDING_CONFIRMATION, nullable=False
    )
    total_amount: Mapped[int] = mapped_column(sa.Integer, nullable=False)  # In paise/cents
    expires_at: Mapped[sa.DateTime] = mapped_column(sa.DateTime(timezone=True), nullable=False, index=True)
    created_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )
    updated_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True),
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )
    confirmed_at: Mapped[Optional[sa.DateTime]] = mapped_column(sa.DateTime(timezone=True), nullable=True)
    cancelled_at: Mapped[Optional[sa.DateTime]] = mapped_column(sa.DateTime(timezone=True), nullable=True)
    idempotency_key: Mapped[Optional[str]] = mapped_column(sa.String(64), unique=True, nullable=True, index=True)

    # Relationships
    store: Mapped["Store"] = relationship(back_populates="reservations")
    items: Mapped[list["ReservationItem"]] = relationship(
        back_populates="reservation", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"<Reservation(id={self.id}, code={self.reservation_code}, status={self.status})>"


class ReservationItem(Base):
    """Reservation line items."""

    __tablename__ = "reservation_items"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True, autoincrement=True)
    reservation_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("reservations.id", ondelete="CASCADE"), nullable=False, index=True
    )
    product_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("products.id", ondelete="RESTRICT"), nullable=False
    )
    quantity: Mapped[int] = mapped_column(sa.Integer, nullable=False)
    unit_price: Mapped[int] = mapped_column(sa.Integer, nullable=False)  # In paise/cents
    subtotal: Mapped[int] = mapped_column(sa.Integer, nullable=False)

    # Relationships
    reservation: Mapped["Reservation"] = relationship(back_populates="items")
    product: Mapped["Product"] = relationship(back_populates="reservation_items")

    def __repr__(self) -> str:
        return f"<ReservationItem(reservation={self.reservation_id}, product={self.product_id}, qty={self.quantity})>"