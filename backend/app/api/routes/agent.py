"""Agent Routes - Process messages through the agent."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.session_service import SessionService
from app.agent.orchestrator import AgentOrchestrator
from app.schemas.agent import AgentMessageRequest, AgentMessageResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.post("/agent/message", response_model=APIResponse[AgentMessageResponse])
async def send_message(
    request: AgentMessageRequest,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Send a message to the agent."""
    # Verify session exists
    session_service = SessionService(session)
    session_data = await session_service.get_session(request.session_id)
    if not session_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    # Process message through orchestrator
    orchestrator = AgentOrchestrator(session)
    result = await orchestrator.process_message(
        session_id=request.session_id,
        user_message=request.message,
        language=request.language,
    )

    return APIResponse(success=True, data=result)


@router.get("/agent/state/{session_id}", response_model=APIResponse[dict])
async def get_agent_state(
    session_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get current agent state for a session."""
    session_service = SessionService(session)
    session_data = await session_service.get_session(session_id)
    if not session_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    # Get recent events for state
    from app.services.event_service import EventService
    event_service = EventService(session)
    events = await event_service.get_session_events(session_id, limit=10)

    current_state = session_data.get("current_state", "IDLE")
    last_event = events[-1] if events else None

    return APIResponse(success=True, data={
        "session_id": session_id,
        "state": current_state,
        "intent": session_data.get("intent"),
        "constraints": session_data.get("constraints", {}),
        "current_tool": last_event.get("payload", {}).get("tool") if last_event and last_event.get("type") == "TOOL_STARTED" else None,
        "tool_history": [
            {
                "tool": e.get("payload", {}).get("tool"),
                "status": e.get("status"),
                "timestamp": e.get("timestamp"),
            }
            for e in events
            if e.get("type") in ["TOOL_STARTED", "TOOL_COMPLETED"]
        ][-10:],
        "last_updated": last_event.get("timestamp") if last_event else session_data.get("updated_at"),
    })