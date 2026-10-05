"""Session API Schemas."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field
from uuid import UUID


class SessionCreate(BaseModel):
    """Request to create a new session."""

    store_id: Optional[str] = None
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
    intent: Optional[str]
    constraints: dict[str, Any]
    safety_state: Optional[Dict[str, Any]]
    active_reservation_id: Optional[str]
    created_at: datetime
    updated_at: datetime
    ended_at: Optional[datetime]