"""Product API Schemas."""

from typing import Any
from pydantic import BaseModel


class ProductSearchRequest(BaseModel):
    """Product search request."""

    query: str | None = None
    category: str | None = None
    subcategory: str | None = None
    max_price: int | None = None
    min_price: int | None = None
    temperature: str | None = None
    sugar_level: str | None = None
    carbonated: bool | None = None
    store_id: str | None = None
    limit: int = 20
    offset: int = 0


class ProductResponse(BaseModel):
    """Product response."""

    id: str
    sku: str
    name: str
    name_hindi: str | None = None
    description: str
    price: int
    currency: str
    category: str
    subcategory: str
    temperature: str
    sugar_level: str
    carbonated: bool
    brand: str | None = None
    aisle: str
    section: str
    image_url: str | None = None
    image_emoji: str | None = None
    attributes: list[dict[str, str]] = []


class ProductDetailResponse(BaseModel):
    """Detailed product response with inventory."""

    product: ProductResponse
    inventory: dict[str, Any] | None = None
    location: dict[str, str] | None = None
    match_score: float | None = None
    match_reasons: list[str] = []


class ProductSearchResponse(BaseModel):
    """Product search response."""

    products: list[ProductResponse]
    total: int
    query: ProductSearchRequest