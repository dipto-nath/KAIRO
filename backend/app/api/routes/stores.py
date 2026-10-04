"""Store Routes."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.store_service import StoreService
from app.schemas.store import StoreResponse, StoreInfoResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/stores", response_model=APIResponse[list[StoreResponse]])
async def list_stores(
    session: AsyncSession = Depends(get_session_dependency),
):
    """List all stores."""
    store_service = StoreService(session)
    # For now, return the active store
    store = await store_service.get_active_store()
    if store:
        return APIResponse(success=True, data=[store])
    return APIResponse(success=True, data=[])


@router.get("/stores/{store_id}", response_model=APIResponse[StoreResponse])
async def get_store(
    store_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get store information."""
    store_service = StoreService(session)
    try:
        store = await store_service.get_store(store_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Store not found",
        )
    return APIResponse(success=True, data=store)


@router.get("/stores/{store_id}/info", response_model=APIResponse[StoreInfoResponse])
async def get_store_info(
    store_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get detailed store information."""
    store_service = StoreService(session)
    try:
        store_info = await store_service.get_store_info(store_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Store not found",
        )
    return APIResponse(success=True, data=store_info)