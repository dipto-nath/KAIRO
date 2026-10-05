"""Session Service - Business logic for session operations."""

from datetime import datetime, timezone
from typing import Any, Optional, Dict

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import SessionRepository
from app.db.models import SessionStatus, MessageRole
from app.core.exceptions import SessionNotFoundError
from app.core.logging import get_logger
from app.core.security import generate_session_id

logger = get_logger(__name__)


class SessionService:
    """Service for session-related operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = SessionRepository(session)

    async def create_session(
        self,
        store_id: Optional[str] = None,
        language: str = "en",
    ) -> dict[str, Any]:
        """Create a new session."""
        # If no store specified, get default active store
        if not store_id:
            from app.db.repositories import StoreRepository
            store_repo = StoreRepository(self.session)
            store = await store_repo.get_active_store()
            if not store:
                raise SessionNotFoundError("No active store available")
            store_id = store.id

        session_id = generate_session_id()
        session = await self.repo.create(
            session_id=session_id,
            store_id=store_id,
            language=language,
        )

        logger.info("session_created", session_id=session_id, store_id=store_id)
        return {
            "session_id": session.id,
            "store_id": session.store_id,
            "status": session.status,
            "language": session.language,
            "created_at": session.created_at,
        }

    async def get_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Get session by ID."""
        session = await self.repo.get_by_id(session_id)
        if not session:
            return None

        return {
            "id": session.id,
            "store_id": session.store_id,
            "language": session.language,
            "status": session.status,
            "current_state": session.current_state,
            "intent": session.intent,
            "constraints": session.constraints,
            "safety_state": session.safety_state,
            "active_reservation_id": session.active_reservation_id,
            "created_at": session.created_at,
            "updated_at": session.updated_at,
            "ended_at": session.ended_at,
        }

    async def get_full_session_state(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Get full session state for control console."""
        session = await self.repo.get_by_id(session_id)
        if not session:
            return None

        # Get recent messages
        messages = await self.repo.get_messages(session_id, limit=50)

        # Get events
        from app.db.repositories import EventRepository
        event_repo = EventRepository(self.session)
        events = await event_repo.get_session_events(session_id, limit=100)

        # Get tool executions
        from app.db.repositories import ToolExecutionRepository
        tool_repo = ToolExecutionRepository(self.session)
        tools = await tool_repo.get_session_executions(session_id)

        # Get active reservation
        from app.services.reservation_service import ReservationService
        reservation_service = ReservationService(self.session)
        active_reservation = await reservation_service.get_active_reservation(session_id)

        return {
            "session": {
                "id": session.id,
                "store_id": session.store_id,
                "language": session.language,
                "status": session.status,
                "current_state": session.current_state,
                "intent": session.intent,
                "constraints": session.constraints,
                "safety_state": session.safety_state,
                "active_reservation_id": session.active_reservation_id,
                "created_at": session.created_at,
                "updated_at": session.updated_at,
                "ended_at": session.ended_at,
            },
            "messages": [
                {
                    "id": m.id,
                    "role": m.role.value,
                    "content": m.content,
                    "sequence": m.sequence,
                    "is_streaming": m.is_streaming,
                    "metadata": m.message_metadata,
                    "created_at": m.created_at,
                }
                for m in messages
            ],
            "events": [
                {
                    "event_id": e.event_id,
                    "type": e.type.value,
                    "status": e.status,
                    "payload": e.payload,
                    "sequence": e.sequence,
                    "timestamp": e.timestamp,
                }
                for e in events
            ],
            "tool_executions": [
                {
                    "execution_id": t.execution_id,
                    "tool_name": t.tool_name,
                    "status": t.status,
                    "input": t.input,
                    "output": t.output,
                    "error": t.error,
                    "duration_ms": t.duration_ms,
                    "started_at": t.started_at,
                    "completed_at": t.completed_at,
                }
                for t in tools
            ],
            "reservation": active_reservation,
            "performance": {
                "session_duration_seconds": (
                    datetime.now(timezone.utc) - session.created_at
                ).total_seconds(),
                "tool_call_count": len(tools),
                "message_count": len(messages),
            },
        }

    async def update_session_state(
        self, session_id: str, state: str
    ) -> Optional[Dict[str, Any]]:
        """Update session current state."""
        session = await self.repo.update_state(session_id, state)
        if not session:
            return None
        return {"session_id": session.id, "current_state": session.current_state}

    async def update_intent(self, session_id: str, intent: Optional[str]) -> Optional[Dict[str, Any]]:
        """Update session intent."""
        session = await self.repo.update_intent(session_id, intent)
        if not session:
            return None
        return {"session_id": session.id, "intent": session.intent}

    async def update_constraints(
        self, session_id: str, constraints: dict[str, Any]
    ) -> Optional[Dict[str, Any]]:
        """Update session constraints."""
        session = await self.repo.update_constraints(session_id, constraints)
        if not session:
            return None
        return {"session_id": session.id, "constraints": session.constraints}

    async def update_safety_state(
        self, session_id: str, safety_state: Optional[Dict[str, Any]]
    ) -> Optional[Dict[str, Any]]:
        """Update session safety state."""
        session = await self.repo.update_safety_state(session_id, safety_state)
        if not session:
            return None
        return {"session_id": session.id, "safety_state": session.safety_state}

    async def set_active_reservation(
        self, session_id: str, reservation_id: Optional[str]
    ) -> Optional[Dict[str, Any]]:
        """Set active reservation for session."""
        session = await self.repo.set_active_reservation(session_id, reservation_id)
        if not session:
            return None
        return {"session_id": session.id, "active_reservation_id": session.active_reservation_id}

    async def add_message(
        self,
        session_id: str,
        role: str,
        content: str,
        sequence: int,
        is_streaming: bool = False,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> dict[str, Any]:
        """Add a conversation message."""
        message_role = MessageRole(role)
        message = await self.repo.add_message(
            session_id=session_id,
            role=message_role,
            content=content,
            sequence=sequence,
            is_streaming=is_streaming,
            metadata=metadata,
        )
        return {
            "id": message.id,
            "role": message.role.value,
            "content": message.content,
            "sequence": message.sequence,
            "is_streaming": message.is_streaming,
            "metadata": message.message_metadata,
            "created_at": message.created_at,
        }

    async def end_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        """End a session."""
        session = await self.repo.end_session(session_id)
        if not session:
            return None
        
        logger.info("session_ended", session_id=session_id)
        return {"session_id": session.id, "status": session.status}
