"""Session Routes."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.session_service import SessionService
from app.schemas.session import SessionCreate, SessionResponse, SessionStateResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.post("/sessions", response_model=APIResponse[SessionResponse])
async def create_session(
    request: SessionCreate,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Create a new session."""
    session_service = SessionService(session)
    result = await session_service.create_session(
        store_id=request.store_id,
        language=request.language,
    )
    return APIResponse(success=True, data=result)


@router.get("/sessions/{session_id}", response_model=APIResponse[SessionStateResponse])
async def get_session(
    session_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get session state."""
    session_service = SessionService(session)
    result = await session_service.get_full_session_state(session_id)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )
    return APIResponse(success=True, data=result)


@router.delete("/sessions/{session_id}", response_model=APIResponse[dict])
async def end_session(
    session_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """End a session."""
    session_service = SessionService(session)
    result = await session_service.end_session(session_id)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )
    return APIResponse(success=True, data=result)