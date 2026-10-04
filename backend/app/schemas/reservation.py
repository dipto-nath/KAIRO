"""Reservation API Schemas."""

from datetime import datetime
from typing import Any
from pydantic import BaseModel


class ReservationItemRequest(BaseModel):
    """Reservation item request."""

    product_id: str
    quantity: int
    unit_price: int


class ReservationPrepareRequest(BaseModel):
    """Reservation preparation request."""

    session_id: str
    store_id: str
    items: list[ReservationItemRequest]
    idempotency_key: str | None = None


class ReservationPrepareResponse(BaseModel):
    """Reservation preparation response."""

    reservation_id: str
    reservation_code: str
    items: list[dict[str, Any]]
    total_amount: int
    store_id: str
    store_name: str
    expires_at: datetime
    status: str
    requires_confirmation: bool = True


class ReservationConfirmRequest(BaseModel):
    """Reservation confirmation request."""

    reservation_id: str
    idempotency_key: str | None = None


class ReservationConfirmResponse(BaseModel):
    """Reservation confirmation response."""

    reservation_id: str
    reservation_code: str
    status: str
    confirmed_at: datetime
    expires_at: datetime
    items: list[dict[str, Any]]
    total_amount: int


class ReservationUpdateRequest(BaseModel):
    """Reservation update request."""

    reservation_id: str
    product_id: str
    new_quantity: int


class ReservationResponse(BaseModel):
    """Reservation response."""

    id: str
    reservation_code: str
    session_id: str
    store_id: str
    store_name: str
    status: str
    total_amount: int
    items: list[dict[str, Any]]
    created_at: datetime
    expires_at: datetime
    confirmed_at: datetime | None = None