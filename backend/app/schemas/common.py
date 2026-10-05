"""Common API Schemas."""

from typing import Any, Dict, Generic, Optional, TypeVar

from pydantic import BaseModel, Field

T = TypeVar("T")


class APIResponse(BaseModel, Generic[T]):
    """Standard API response wrapper."""

    success: bool
    data: Optional[T] = None
    error: "Optional[ErrorResponse]" = None
    request_id: Optional[str] = None


class ErrorResponse(BaseModel):
    """Standard error response."""

    code: str
    message: str
    retryable: bool = False
    session_id: Optional[str] = None
    details: Optional[Dict[str, Any]] = None


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