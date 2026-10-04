"""Events API Schemas."""

from datetime import datetime
from typing import Any
from pydantic import BaseModel


class EventResponse(BaseModel):
    """Single event response."""

    event_id: str
    session_id: str
    type: str
    timestamp: datetime
    status: str
    payload: dict[str, Any]
    sequence: int


class SessionEventsResponse(BaseModel):
    """Session events response."""

    session_id: str
    events: list[EventResponse]
    total: int