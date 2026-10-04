"""Control Console Routes - Technical dashboard for judges."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.session_service import SessionService
from app.services.event_service import EventService
from app.services.reservation_service import ReservationService
from app.core.config import settings
from app.schemas.control import ControlSessionResponse, ControlSystemResponse, ControlToolResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/control/session/{session_id}", response_model=APIResponse[ControlSessionResponse])
async def get_control_session(
    session_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get full session state for control console."""
    session_service = SessionService(session)
    result = await session_service.get_full_session_state(session_id)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    # Format for control console
    return APIResponse(success=True, data={
        "session": result["session"],
        "agent_state": {
            "current": result["session"].get("current_state", "IDLE"),
            "intent": result["session"].get("intent"),
        },
        "intent": {
            "name": result["session"].get("intent"),
            "confidence": 0.9,
        } if result["session"].get("intent") else None,
        "constraints": result["session"].get("constraints", {}),
        "tool_executions": result.get("tool_executions", []),
        "events": result.get("events", []),
        "reservation": result.get("reservation"),
        "safety": result["session"].get("safety_state"),
        "performance": result.get("performance", {}),
    })


@router.get("/control/system", response_model=APIResponse[ControlSystemResponse])
async def get_control_system(
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get system status for control console."""
    # Check database
    db_status = "connected"
    try:
        from sqlalchemy import text
        await session.execute(text("SELECT 1"))
    except Exception:
        db_status = "error"

    return APIResponse(success=True, data={
        "database": db_status,
        "gemini": "configured" if settings.GEMINI_API_KEY and settings.GEMINI_API_KEY != "PASTE_YOUR_GEMINI_API_KEY_HERE" else "not_configured",
        "deepgram": "configured" if settings.DEEPGRAM_API_KEY and settings.DEEPGRAM_API_KEY != "PASTE_YOUR_DEEPGRAM_API_KEY_HERE" else "not_configured",
        "voice_gateway": "ready",
        "environment": settings.APP_ENV,
        "demo_mode": settings.DEMO_MODE,
    })


@router.get("/control/tools", response_model=APIResponse[ControlToolResponse])
async def get_control_tools():
    """Get registered tools for control console."""
    tools = [
        {
            "name": "search_products",
            "description": "Search products in the catalog with filters",
            "category": "read",
        },
        {
            "name": "get_product_details",
            "description": "Get detailed product information",
            "category": "read",
        },
        {
            "name": "check_inventory",
            "description": "Check product inventory at a store",
            "category": "read",
        },
        {
            "name": "get_product_location",
            "description": "Get product location in store",
            "category": "read",
        },
        {
            "name": "find_alternatives",
            "description": "Find alternative products similar to a given product",
            "category": "read",
        },
        {
            "name": "get_store_information",
            "description": "Get store information",
            "category": "read",
        },
        {
            "name": "prepare_reservation",
            "description": "Prepare a reservation (requires user confirmation)",
            "category": "action",
        },
        {
            "name": "confirm_reservation",
            "description": "Confirm a prepared reservation",
            "category": "action",
        },
        {
            "name": "update_reservation",
            "description": "Update reservation quantity",
            "category": "action",
        },
        {
            "name": "cancel_reservation",
            "description": "Cancel a reservation",
            "category": "action",
        },
    ]
    return APIResponse(success=True, data={"tools": tools})