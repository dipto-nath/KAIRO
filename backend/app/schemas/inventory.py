"""Inventory API Schemas."""

from typing import Any
from pydantic import BaseModel


class InventoryCheckRequest(BaseModel):
    """Inventory check request."""

    product_id: str
    store_id: str
    quantity: int = 1


class InventoryCheckResponse(BaseModel):
    """Inventory check response."""

    product_id: str
    store_id: str
    available: bool
    quantity: int
    status: str  # available, low_stock, out_of_stock
    reserved_quantity: int


class StoreInventoryItem(BaseModel):
    """Store inventory item."""

    product_id: str
    product_name: str
    quantity: int
    reserved_quantity: int
    available_quantity: int
    status: str
    price: int
    aisle: str
    section: str


class StoreInventoryResponse(BaseModel):
    """Store inventory response."""

    store_id: str
    store_name: str
    items: list[StoreInventoryItem]
    total_products: int