"""Reservation Routes."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.reservation_service import ReservationService
from app.services.session_service import SessionService
from app.schemas.reservation import (
    ReservationPrepareRequest,
    ReservationPrepareResponse,
    ReservationConfirmRequest,
    ReservationConfirmResponse,
    ReservationUpdateRequest,
    ReservationResponse,
)
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.post("/reservations/prepare", response_model=APIResponse[ReservationPrepareResponse])
async def prepare_reservation(
    request: ReservationPrepareRequest,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Prepare a reservation (requires confirmation)."""
    # Verify session exists
    session_service = SessionService(session)
    session_data = await session_service.get_session(request.session_id)
    if not session_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    reservation_service = ReservationService(session)
    try:
        result = await reservation_service.prepare_reservation(
            session_id=request.session_id,
            store_id=request.store_id,
            items=[item.model_dump() for item in request.items],
            idempotency_key=request.idempotency_key,
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )

    return APIResponse(success=True, data=result)


@router.post("/reservations/{reservation_id}/confirm", response_model=APIResponse[ReservationConfirmResponse])
async def confirm_reservation(
    reservation_id: str,
    request: ReservationConfirmRequest,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Confirm a prepared reservation."""
    reservation_service = ReservationService(session)
    try:
        result = await reservation_service.confirm_reservation(
            reservation_id=reservation_id,
            idempotency_key=request.idempotency_key,
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )

    return APIResponse(success=True, data=result)


@router.patch("/reservations/{reservation_id}", response_model=APIResponse[ReservationResponse])
async def update_reservation(
    reservation_id: str,
    request: ReservationUpdateRequest,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Update reservation quantity."""
    reservation_service = ReservationService(session)
    try:
        result = await reservation_service.update_reservation(
            reservation_id=reservation_id,
            product_id=request.product_id,
            new_quantity=request.new_quantity,
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )

    return APIResponse(success=True, data=result)


@router.delete("/reservations/{reservation_id}", response_model=APIResponse[ReservationResponse])
async def cancel_reservation(
    reservation_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Cancel a reservation."""
    reservation_service = ReservationService(session)
    try:
        result = await reservation_service.cancel_reservation(reservation_id)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )

    return APIResponse(success=True, data=result)


@router.get("/reservations/{reservation_id}", response_model=APIResponse[ReservationResponse])
async def get_reservation(
    reservation_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get reservation by ID."""
    reservation_service = ReservationService(session)
    result = await reservation_service.get_reservation(reservation_id)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Reservation not found",
        )

    return APIResponse(success=True, data=result)