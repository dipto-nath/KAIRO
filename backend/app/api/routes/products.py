"""Product Routes."""

from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.product_service import ProductService
from app.schemas.product import ProductSearchRequest, ProductSearchResponse, ProductResponse, ProductDetailResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/products/search", response_model=APIResponse[ProductSearchResponse])
async def search_products(
    query: str | None = Query(None),
    category: str | None = Query(None),
    subcategory: str | None = Query(None),
    max_price: int | None = Query(None),
    min_price: int | None = Query(None),
    temperature: str | None = Query(None),
    sugar_level: str | None = Query(None),
    carbonated: bool | None = Query(None),
    store_id: str | None = Query(None),
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    session: AsyncSession = Depends(get_session_dependency),
):
    """Search products with filters."""
    product_service = ProductService(session)
    products = await product_service.search_products(
        query=query,
        category=category,
        subcategory=subcategory,
        max_price=max_price,
        min_price=min_price,
        temperature=temperature,
        sugar_level=sugar_level,
        carbonated=carbonated,
        store_id=store_id,
        limit=limit,
        offset=offset,
    )

    return APIResponse(success=True, data={
        "products": products,
        "total": len(products),
        "query": {
            "query": query,
            "category": category,
            "subcategory": subcategory,
            "max_price": max_price,
            "min_price": min_price,
            "temperature": temperature,
            "sugar_level": sugar_level,
            "carbonated": carbonated,
            "store_id": store_id,
            "limit": limit,
            "offset": offset,
        },
    })


@router.get("/products/{product_id}", response_model=APIResponse[ProductDetailResponse])
async def get_product(
    product_id: str,
    store_id: str | None = Query(None),
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get product details with inventory and location."""
    product_service = ProductService(session)
    inventory_service = None
    
    try:
        product = await product_service.get_product_details(product_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )

    inventory = None
    location = None
    if store_id:
        from app.services.inventory_service import InventoryService
        inventory_service = InventoryService(session)
        inventory = await inventory_service.check_inventory(store_id, product_id, 1)
        location = await inventory_service.get_product_location(store_id, product_id)

    return APIResponse(success=True, data={
        "product": product,
        "inventory": inventory,
        "location": location,
        "match_score": None,
        "match_reasons": [],
    })