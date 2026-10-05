"""Session Repository."""

from datetime import datetime, timezone
from typing import Optional

from sqlalchemy import select, and_
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.db.models import Session, SessionStatus, ConversationMessage, MessageRole


class SessionRepository:
    """Repository for session operations."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def get_by_id(self, session_id: str) -> Optional[Session]:
        """Get session by ID."""
        result = await self.session.execute(
            select(Session).where(Session.id == session_id)
        )
        return result.scalar_one_or_none()

    async def get_active_by_store(self, store_id: str) -> list[Session]:
        """Get active sessions for a store."""
        result = await self.session.execute(
            select(Session).where(
                and_(Session.store_id == store_id, Session.status == SessionStatus.ACTIVE)
            )
        )
        return list(result.scalars().all())

    async def create(
        self,
        session_id: str,
        store_id: str,
        language: str = "en",
    ) -> Session:
        """Create a new session."""
        session = Session(
            id=session_id,
            store_id=store_id,
            language=language,
            status=SessionStatus.ACTIVE,
            current_state="IDLE",
            constraints={},
        )
        self.session.add(session)
        await self.session.flush()
        return session

    async def update_state(self, session_id: str, state: str) -> Optional[Session]:
        """Update session current state."""
        session = await self.get_by_id(session_id)
        if not session:
            return None
        session.current_state = state
        await self.session.flush()
        return session

    async def update_intent(self, session_id: str, intent: Optional[str]) -> Optional[Session]:
        """Update session intent."""
        session = await self.get_by_id(session_id)
        if not session:
            return None
        session.intent = intent
        await self.session.flush()
        return session

    async def update_constraints(
        self, session_id: str, constraints: dict
    ) -> Optional[Session]:
        """Update session constraints."""
        session = await self.get_by_id(session_id)
        if not session:
            return None
        session.constraints = constraints
        await self.session.flush()
        return session

    async def update_safety_state(
        self, session_id: str, safety_state: Optional[dict]
    ) -> Optional[Session]:
        """Update session safety state."""
        session = await self.get_by_id(session_id)
        if not session:
            return None
        session.safety_state = safety_state
        await self.session.flush()
        return session

    async def set_active_reservation(
        self, session_id: str, reservation_id: Optional[str]
    ) -> Optional[Session]:
        """Set active reservation for session."""
        session = await self.get_by_id(session_id)
        if not session:
            return None
        session.active_reservation_id = reservation_id
        await self.session.flush()
        return session

    async def end_session(self, session_id: str) -> Optional[Session]:
        """End a session."""
        session = await self.get_by_id(session_id)
        if not session:
            return None
        session.status = SessionStatus.ENDED
        session.ended_at = datetime.now(timezone.utc)
        await self.session.flush()
        return session

    async def add_message(
        self,
        session_id: str,
        role: MessageRole,
        content: str,
        sequence: int,
        is_streaming: bool = False,
        metadata: Optional[dict] = None,
    ) -> ConversationMessage:
        """Add a conversation message."""
        message = ConversationMessage(
            session_id=session_id,
            role=role,
            content=content,
            sequence=sequence,
            is_streaming=is_streaming,
            metadata=metadata,
        )
        self.session.add(message)
        await self.session.flush()
        return message

    async def get_messages(
        self, session_id: str, limit: int = 50
    ) -> list[ConversationMessage]:
        """Get recent messages for a session."""
        result = await self.session.execute(
            select(ConversationMessage)
            .where(ConversationMessage.session_id == session_id)
            .order_by(ConversationMessage.sequence.desc())
            .limit(limit)
        )
        messages = list(result.scalars().all())
        return list(reversed(messages))