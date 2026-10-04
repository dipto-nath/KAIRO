"""Event Service - Manages agent events and real-time event streaming."""

import asyncio
import json
from datetime import datetime, timezone
from typing import Any, AsyncGenerator, Callable, Optional
from collections import defaultdict

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import EventRepository
from app.db.models import AgentEvent, EventType
from app.core.logging import get_logger

logger = get_logger(__name__)


class EventService:
    """Service for managing agent events and real-time streaming."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = EventRepository(session)
        self._subscribers: dict[str, list[asyncio.Queue]] = defaultdict(list)

    async def emit(
        self,
        session_id: str,
        event_type: EventType,
        payload: dict[str, Any],
        status: str = "completed",
    ) -> AgentEvent:
        """Emit an event for a session."""
        sequence = await self.repo.get_next_sequence(session_id)
        
        event = await self.repo.create(
            session_id=session_id,
            event_type=event_type,
            payload=payload,
            sequence=sequence,
            status=status,
        )

        # Notify subscribers
        await self._notify_subscribers(session_id, event)

        return event

    async def emit_tool_started(
        self, session_id: str, tool_name: str, input_data: dict[str, Any]
    ) -> AgentEvent:
        """Emit tool started event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.TOOL_STARTED,
            payload={
                "tool": tool_name,
                "input": input_data,
            },
            status="running",
        )

    async def emit_tool_completed(
        self,
        session_id: str,
        tool_name: str,
        output: dict[str, Any] | None = None,
        error: str | None = None,
    ) -> AgentEvent:
        """Emit tool completed event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.TOOL_COMPLETED,
            payload={
                "tool": tool_name,
                "output": output,
                "error": error,
            },
            status="error" if error else "success",
        )

    async def emit_products_found(
        self, session_id: str, products: list[dict[str, Any]], query: dict[str, Any]
    ) -> AgentEvent:
        """Emit products found event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.PRODUCTS_FOUND,
            payload={
                "products": products,
                "query": query,
                "count": len(products),
            },
        )

    async def emit_inventory_checked(
        self, session_id: str, product_id: str, result: dict[str, Any]
    ) -> AgentEvent:
        """Emit inventory checked event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.INVENTORY_CHECKED,
            payload={
                "product_id": product_id,
                **result,
            },
        )

    async def emit_action_requires_confirmation(
        self, session_id: str, action: str, data: dict[str, Any]
    ) -> AgentEvent:
        """Emit action requires confirmation event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.ACTION_REQUIRES_CONFIRMATION,
            payload={
                "action": action,
                "data": data,
            },
        )

    async def emit_action_completed(
        self, session_id: str, action: str, result: dict[str, Any]
    ) -> AgentEvent:
        """Emit action completed event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.ACTION_COMPLETED,
            payload={
                "action": action,
                "result": result,
            },
        )

    async def emit_error(
        self, session_id: str, error_code: str, message: str, details: dict[str, Any] | None = None
    ) -> AgentEvent:
        """Emit error event."""
        return await self.emit(
            session_id=session_id,
            event_type=EventType.ERROR,
            payload={
                "code": error_code,
                "message": message,
                "details": details or {},
            },
        )

    def subscribe(self, session_id: str) -> asyncio.Queue:
        """Subscribe to real-time events for a session."""
        queue: asyncio.Queue = asyncio.Queue()
        self._subscribers[session_id].append(queue)
        return queue

    def unsubscribe(self, session_id: str, queue: asyncio.Queue) -> None:
        """Unsubscribe from real-time events."""
        if session_id in self._subscribers:
            try:
                self._subscribers[session_id].remove(queue)
            except ValueError:
                pass

    async def _notify_subscribers(self, session_id: str, event: AgentEvent) -> None:
        """Notify all subscribers of a new event."""
        if session_id not in self._subscribers:
            return

        event_data = {
            "event_id": event.event_id,
            "session_id": event.session_id,
            "type": event.type.value,
            "timestamp": event.timestamp.isoformat(),
            "status": event.status,
            "payload": event.payload,
            "sequence": event.sequence,
        }

        # Send to all subscribers (non-blocking)
        for queue in self._subscribers[session_id]:
            try:
                queue.put_nowait(event_data)
            except asyncio.QueueFull:
                logger.warning("event_queue_full", session_id=session_id)

    async def get_session_events(self, session_id: str, limit: int = 100) -> list[dict[str, Any]]:
        """Get historical events for a session."""
        events = await self.repo.get_session_events(session_id, limit)
        return [
            {
                "event_id": e.event_id,
                "session_id": e.session_id,
                "type": e.type.value,
                "timestamp": e.timestamp.isoformat(),
                "status": e.status,
                "payload": e.payload,
                "sequence": e.sequence,
            }
            for e in events
        ]
