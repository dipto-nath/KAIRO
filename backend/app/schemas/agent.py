"""Agent API Schemas."""

from datetime import datetime
from typing import Any
from pydantic import BaseModel


class AgentMessageRequest(BaseModel):
    """Request to send message to agent."""

    session_id: str
    message: str
    language: str = "en"


class AgentMessageResponse(BaseModel):
    """Agent message response."""

    session_id: str
    response: str
    intent: str | None = None
    constraints: dict[str, Any] = {}
    requires_confirmation: bool = False
    confirmation_data: dict[str, Any] | None = None
    safety_escalation: bool = False
    safety_reason: str | None = None


class AgentStateResponse(BaseModel):
    """Agent state response for control console."""

    session_id: str
    state: str
    intent: str | None
    constraints: dict[str, Any]
    current_tool: str | None
    tool_history: list[dict[str, Any]]
    last_updated: datetime