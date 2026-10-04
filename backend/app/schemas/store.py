"""Store API Schemas."""

from pydantic import BaseModel


class StoreResponse(BaseModel):
    """Store response."""

    id: str
    store_code: str
    name: str
    address: str
    city: str
    is_open: bool
    opening_time: str
    closing_time: str


class StoreInfoResponse(BaseModel):
    """Store info response with additional details."""

    store: StoreResponse
    aisles: list[dict[str, str]] = []