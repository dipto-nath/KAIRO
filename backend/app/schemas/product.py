"""Product API Schemas."""

from typing import Any, Dict, Optional
from pydantic import BaseModel


class ProductSearchRequest(BaseModel):
    """Product search request."""

    query: Optional[str] = None
    category: Optional[str] = None
    subcategory: Optional[str] = None
    max_price: Optional[int] = None
    min_price: Optional[int] = None
    temperature: Optional[str] = None
    sugar_level: Optional[str] = None
    carbonated: Optional[bool] = None
    store_id: Optional[str] = None
    limit: int = 20
    offset: int = 0


class ProductResponse(BaseModel):
    """Product response."""

    id: str
    sku: str
    name: str
    name_hindi: Optional[str] = None
    description: str
    price: int
    currency: str
    category: str
    subcategory: str
    temperature: str
    sugar_level: str
    carbonated: bool
    brand: Optional[str] = None
    aisle: str
    section: str
    image_url: Optional[str] = None
    image_emoji: Optional[str] = None
    attributes: list[dict[str, str]] = []


class ProductDetailResponse(BaseModel):
    """Detailed product response with inventory."""

    product: ProductResponse
    inventory: Optional[Dict[str, Any]] = None
    location: Optional[Dict[str, str]] = None
    match_score: Optional[float] = None
    match_reasons: list[str] = []


class ProductSearchResponse(BaseModel):
    """Product search response."""

    products: list[ProductResponse]
    total: int
    query: ProductSearchRequest