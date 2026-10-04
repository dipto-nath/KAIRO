"""Session API Schemas."""

from datetime import datetime
from typing import Any
from pydantic import BaseModel, Field
from uuid import UUID


class SessionCreate(BaseModel):
    """Request to create a new session."""

    store_id: str | None = None
    language: str = Field(default="en", pattern="^(en|hi|bn)$")


class SessionResponse(BaseModel):
    """Session creation response."""

    session_id: str
    store_id: str
    status: str
    language: str
    created_at: datetime


class SessionStateResponse(BaseModel):
    """Full session state response for control console."""

    id: str
    store_id: str
    language: str
    status: str
    current_state: str
    intent: str | None
    constraints: dict[str, Any]
    safety_state: dict[str, Any] | None
    active_reservation_id: str | None
    created_at: datetime
    updated_at: datetime
    ended_at: datetime | None