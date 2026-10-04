"""Demo Routes - Demo mode reliability tools."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.core.config import settings
from app.core.logging import get_logger
from app.schemas.common import APIResponse

router = APIRouter()
logger = get_logger(__name__)


@router.post("/demo/reset", response_model=APIResponse[dict])
async def reset_demo(
    session: AsyncSession = Depends(get_session_dependency),
):
    """Reset demo data to initial state."""
    if not settings.DEMO_MODE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Demo mode not enabled",
        )

    # Reset inventory to seed values
    from app.db.repositories import InventoryRepository
    from app.db.models import Product
    from sqlalchemy import select

    inventory_repo = InventoryRepository(session)
    
    # Default demo inventory
    demo_inventory = {
        "prod_001": 6,   # Strawberry Milk
        "prod_002": 8,   # Peach Iced Tea
        "prod_003": 12,  # Zero Sugar Cola
        "prod_004": 2,   # Protein Cocoa Drink
        "prod_005": 0,   # Green Apple Sparkling
        "prod_006": 5,   # Lychee Coconut Water
    }

    for product_id, quantity in demo_inventory.items():
        await inventory_repo.create_or_update("store_042", product_id, quantity)

    # Expire all reservations
    from app.services.reservation_service import ReservationService
    reservation_service = ReservationService(session)
    expired_count = await reservation_service.expire_reservations()

    logger.info("demo_reset_completed", expired_reservations=expired_count)

    return APIResponse(success=True, data={
        "message": "Demo data reset successfully",
        "inventory_restored": demo_inventory,
        "expired_reservations": expired_count,
    })


@router.post("/demo/scenario/{scenario_id}", response_model=APIResponse[dict])
async def trigger_demo_scenario(
    scenario_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Trigger a demo scenario."""
    if not settings.DEMO_MODE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Demo mode not enabled",
        )

    scenarios = {
        "golden_product_reservation": "Product discovery and reservation flow",
        "inventory_failure": "Simulate inventory verification failure",
        "reservation_failure": "Simulate reservation failure",
        "alternative_product": "Show alternative products",
        "reservation_correction": "Demonstrate reservation update",
        "safety_escalation": "Trigger safety escalation",
    }

    if scenario_id not in scenarios:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Unknown scenario: {scenario_id}",
        )

    logger.info("demo_scenario_triggered", scenario=scenario_id)

    return APIResponse(success=True, data={
        "scenario": scenario_id,
        "description": scenarios[scenario_id],
        "triggered": True,
    })


@router.get("/demo/status", response_model=APIResponse[dict])
async def demo_status():
    """Get demo mode status."""
    return APIResponse(success=True, data={
        "demo_mode": settings.DEMO_MODE,
        "available_scenarios": [
            "golden_product_reservation",
            "inventory_failure",
            "reservation_failure",
            "alternative_product",
            "reservation_correction",
            "safety_escalation",
        ],
    })