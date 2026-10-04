"""Events Routes - Real-time event streaming and history."""

from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.event_service import EventService
from app.services.session_service import SessionService
from app.schemas.events import EventResponse, SessionEventsResponse
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.get("/sessions/{session_id}/events", response_model=APIResponse[SessionEventsResponse])
async def get_session_events(
    session_id: str,
    limit: int = Query(100, ge=1, le=500),
    session: AsyncSession = Depends(get_session_dependency),
):
    """Get historical events for a session."""
    # Verify session exists
    session_service = SessionService(session)
    session_data = await session_service.get_session(session_id)
    if not session_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    event_service = EventService(session)
    events = await event_service.get_session_events(session_id, limit)

    return APIResponse(success=True, data={
        "session_id": session_id,
        "events": events,
        "total": len(events),
    })


@router.get("/sessions/{session_id}/events/stream")
async def stream_session_events(
    session_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Stream real-time events for a session (Server-Sent Events)."""
    from fastapi.responses import StreamingResponse
    import asyncio
    import json

    # Verify session exists
    session_service = SessionService(session)
    session_data = await session_service.get_session(session_id)
    if not session_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    event_service = EventService(session)
    queue = event_service.subscribe(session_id)

    async def event_generator():
        try:
            # Send historical events first
            events = await event_service.get_session_events(session_id, limit=50)
            for event in events:
                yield f"data: {json.dumps(event)}\n\n"

            # Then stream real-time events
            while True:
                try:
                    event = await asyncio.wait_for(queue.get(), timeout=30.0)
                    yield f"data: {json.dumps(event)}\n\n"
                except asyncio.TimeoutError:
                    # Send keep-alive
                    yield ": keep-alive\n\n"
        finally:
            event_service.unsubscribe(session_id, queue)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        },
    )