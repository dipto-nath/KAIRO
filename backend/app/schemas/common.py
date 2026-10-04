"""Common API Schemas."""

from typing import Any, Generic, TypeVar

from pydantic import BaseModel, Field

T = TypeVar("T")


class APIResponse(BaseModel, Generic[T]):
    """Standard API response wrapper."""

    success: bool
    data: T | None = None
    error: "ErrorResponse | None" = None
    request_id: str | None = None


class ErrorResponse(BaseModel):
    """Standard error response."""

    code: str
    message: str
    retryable: bool = False
    session_id: str | None = None
    details: dict[str, Any] | None = None


class HealthResponse(BaseModel):
    """Health check response."""

    status: str
    service: str
    version: str


class DependencyHealthResponse(BaseModel):
    """Dependency health check response."""

    database: str
    gemini: str
    deepgram: str
    voice_gateway: str
    environment: str