"""Event and Tool Execution Repository."""

from datetime import datetime, timezone
from typing import Optional

from sqlalchemy import select, and_, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import AgentEvent, ToolExecution, EventType


class EventRepository:
    """Repository for agent events."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def create(
        self,
        session_id: str,
        event_type: EventType,
        payload: dict,
        sequence: int,
        status: str = "completed",
        event_id: Optional[str] = None,
    ) -> AgentEvent:
        """Create a new agent event."""
        import secrets
        event = AgentEvent(
            event_id=event_id or f"evt_{secrets.token_hex(8)}",
            session_id=session_id,
            type=event_type,
            status=status,
            payload=payload,
            sequence=sequence,
        )
        self.session.add(event)
        await self.session.flush()
        return event

    async def get_session_events(
        self, session_id: str, limit: int = 100
    ) -> list[AgentEvent]:
        """Get events for a session."""
        result = await self.session.execute(
            select(AgentEvent)
            .where(AgentEvent.session_id == session_id)
            .order_by(AgentEvent.sequence.desc())
            .limit(limit)
        )
        events = list(result.scalars().all())
        return list(reversed(events))

    async def get_next_sequence(self, session_id: str) -> int:
        """Get next sequence number for session."""
        result = await self.session.execute(
            select(func.max(AgentEvent.sequence)).where(AgentEvent.session_id == session_id)
        )
        max_seq = result.scalar_one_or_none()
        return (max_seq or 0) + 1


class ToolExecutionRepository:
    """Repository for tool executions."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def create(
        self,
        session_id: str,
        tool_name: str,
        input_data: dict,
        execution_id: Optional[str] = None,
    ) -> ToolExecution:
        """Create a new tool execution record."""
        import secrets
        execution = ToolExecution(
            execution_id=execution_id or f"tool_{secrets.token_hex(8)}",
            session_id=session_id,
            tool_name=tool_name,
            status="running",
            input=input_data,
        )
        self.session.add(execution)
        await self.session.flush()
        return execution

    async def complete(
        self, execution_id: str, output: Optional[dict] = None, error: Optional[str] = None
    ) -> Optional[ToolExecution]:
        """Complete a tool execution."""
        result = await self.session.execute(
            select(ToolExecution).where(ToolExecution.execution_id == execution_id)
        )
        execution = result.scalar_one_or_none()
        if not execution:
            return None

        execution.status = "error" if error else "success"
        execution.output = output
        execution.error = error
        execution.completed_at = datetime.now(timezone.utc)
        if execution.started_at:
            delta = execution.completed_at - execution.started_at
            execution.duration_ms = int(delta.total_seconds() * 1000)
        await self.session.flush()
        return execution

    async def get_session_executions(self, session_id: str) -> list[ToolExecution]:
        """Get all tool executions for a session."""
        result = await self.session.execute(
            select(ToolExecution)
            .where(ToolExecution.session_id == session_id)
            .order_by(ToolExecution.started_at.asc())
        )
        return list(result.scalars().all())