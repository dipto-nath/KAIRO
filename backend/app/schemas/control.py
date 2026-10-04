"""Control Console API Schemas."""

from datetime import datetime
from typing import Any
from pydantic import BaseModel


class ControlToolExecution(BaseModel):
    """Tool execution for control console."""

    execution_id: str
    tool_name: str
    status: str
    input: dict[str, Any]
    output: dict[str, Any] | None
    error: str | None
    duration_ms: int | None
    started_at: datetime
    completed_at: datetime | None


class ControlSessionResponse(BaseModel):
    """Control console session response."""

    session: dict[str, Any]
    agent_state: dict[str, Any]
    intent: dict[str, Any] | None
    constraints: dict[str, Any]
    tool_executions: list[ControlToolExecution]
    events: list[dict[str, Any]]
    reservation: dict[str, Any] | None
    safety: dict[str, Any] | None
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
