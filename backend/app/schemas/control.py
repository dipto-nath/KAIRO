"""Control Console API Schemas."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel


class ControlToolExecution(BaseModel):
    """Tool execution for control console."""

    execution_id: str
    tool_name: str
    status: str
    input: dict[str, Any]
    output: Optional[Dict[str, Any]]
    error: Optional[str]
    duration_ms: Optional[int]
    started_at: datetime
    completed_at: Optional[datetime]


class ControlSessionResponse(BaseModel):
    """Control console session response."""

    session: dict[str, Any]
    agent_state: dict[str, Any]
    intent: Optional[Dict[str, Any]]
    constraints: dict[str, Any]
    tool_executions: list[ControlToolExecution]
    events: list[dict[str, Any]]
    reservation: Optional[Dict[str, Any]]
    safety: Optional[Dict[str, Any]]
    performance: dict[str, Any]


class ControlSystemResponse(BaseModel):
    """Control console system status."""

    database: str
    gemini: str
    deepgram: str
    voice_gateway: str
    environment: str
    demo_mode: bool


class ControlToolResponse(BaseModel):
    """Control console tool registry."""

    tools: list[dict[str, Any]]
