"""Inventory Routes."""

from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.inventory_service import InventoryService
from app.schemas.inventory import InventoryCheckRequest, InventoryCheckResponse, StoreInventoryResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/inventory/{product_id}", response_model=APIResponse[InventoryCheckResponse])
async def check_inventory(
    product_id: str,
    store_id: str = Query(...),
    quantity: int = Query(1, ge=1),
    session: AsyncSession = Depends(get_session_dependency),
):
    """Check inventory for a product."""
    inventory_service = InventoryService(session)
    result = await inventory_service.check_inventory(store_id, product_id, quantity)
    return APIResponse(success=True, data=result)


@router.get("/stores/{store_id}/inventory", response_model=APIResponse[StoreInventoryResponse])
async def get_store_inventory(
    store_id: str,
    include_out_of_stock: bool = Query(False),
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get full inventory for a store."""
    inventory_service = InventoryService(session)
    items = await inventory_service.get_store_inventory(store_id, include_out_of_stock)

    # Get store info
    from app.services.store_service import StoreService
    store_service = StoreService(session)
    try:
        store = await store_service.get_store(store_id)
    except Exception:
        store = {"id": store_id, "name": "Unknown Store"}

    return APIResponse(success=True, data={
        "store_id": store_id,
        "store_name": store.get("name", "Unknown Store"),
        "items": items,
        "total_products": len(items),
    })