"""Agent API Schemas."""

from datetime import datetime
from typing import Any, Dict, Optional
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
    intent: Optional[str] = None
    constraints: dict[str, Any] = {}
    requires_confirmation: bool = False
    confirmation_data: Optional[Dict[str, Any]] = None
    safety_escalation: bool = False
    safety_reason: Optional[str] = None


class AgentStateResponse(BaseModel):
    """Agent state response for control console."""

    session_id: str
    state: str
    intent: Optional[str]
    constraints: dict[str, Any]
    current_tool: Optional[str]
    tool_history: list[dict[str, Any]]
    last_updated: datetime