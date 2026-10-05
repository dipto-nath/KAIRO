"""KAIRO Exception Definitions and Error Handling."""

from typing import Any, Dict, Optional
from fastapi import HTTPException, Request, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import structlog

logger = structlog.get_logger(__name__)


class ErrorCode:
    """Standardized error codes for KAIRO."""

    # Validation
    INVALID_REQUEST = "INVALID_REQUEST"

    # Session
    SESSION_NOT_FOUND = "SESSION_NOT_FOUND"
    SESSION_EXPIRED = "SESSION_EXPIRED"

    # Products
    PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND"
    PRODUCT_SEARCH_FAILED = "PRODUCT_SEARCH_FAILED"

    # Inventory
    INVENTORY_UNAVAILABLE = "INVENTORY_UNAVAILABLE"
    INVENTORY_VERIFICATION_FAILED = "INVENTORY_VERIFICATION_FAILED"
    INSUFFICIENT_INVENTORY = "INSUFFICIENT_INVENTORY"

    # Reservations
    RESERVATION_NOT_FOUND = "RESERVATION_NOT_FOUND"
    RESERVATION_FAILED = "RESERVATION_FAILED"
    RESERVATION_EXPIRED = "RESERVATION_EXPIRED"
    RESERVATION_CONFIRMATION_REQUIRED = "CONFIRMATION_REQUIRED"

    # Stores
    STORE_NOT_FOUND = "STORE_NOT_FOUND"
    STORE_CLOSED = "STORE_CLOSED"

    # AI Providers
    AI_PROVIDER_ERROR = "AI_PROVIDER_ERROR"
    AI_PROVIDER_UNAVAILABLE = "AI_PROVIDER_UNAVAILABLE"
    TRANSCRIPTION_ERROR = "TRANSCRIPTION_ERROR"
    TRANSCRIPTION_PROVIDER_UNAVAILABLE = "TRANSCRIPTION_PROVIDER_UNAVAILABLE"

    # Voice
    VOICE_CONNECTION_ERROR = "VOICE_CONNECTION_ERROR"

    # Tools
    TOOL_EXECUTION_ERROR = "TOOL_EXECUTION_ERROR"
    TOOL_VALIDATION_ERROR = "TOOL_VALIDATION_ERROR"

    # Safety
    SAFETY_ESCALATION = "SAFETY_ESCALATION"

    # Internal
    INTERNAL_ERROR = "INTERNAL_ERROR"
    DATABASE_ERROR = "DATABASE_ERROR"
    AGENT_LOOP_LIMIT = "AGENT_LOOP_LIMIT"
class ErrorDetail(BaseModel):
    """Standardized error response detail."""

    code: str
    message: str
    retryable: bool = False
    session_id: Optional[str] = None
    details: Optional[Dict[str, Any]] = None


class KairoError(Exception):
    """Base exception for KAIRO application errors."""

    def __init__(
        self,
        code: str,
        message: str,
        retryable: bool = False,
        session_id: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
    ) -> None:
        self.code = code
        self.message = message
        self.retryable = retryable
        self.session_id = session_id
        self.details = details or {}
        super().__init__(message)

    def to_detail(self) -> ErrorDetail:
        return ErrorDetail(
            code=self.code,
            message=self.message,
            retryable=self.retryable,
            session_id=self.session_id,
            details=self.details,
        )


class SessionNotFoundError(KairoError):
    def __init__(self, session_id: str) -> None:
        super().__init__(
            code="SESSION_NOT_FOUND",
            message=f"Session {session_id} not found",
            session_id=session_id,
        )


class ProductNotFoundError(KairoError):
    def __init__(self, product_id: str) -> None:
        super().__init__(
            code="PRODUCT_NOT_FOUND",
            message=f"Product {product_id} not found",
            details={"product_id": product_id},
        )


class ProductSearchFailedError(KairoError):
    def __init__(self, reason: str) -> None:
        super().__init__(
            code="PRODUCT_SEARCH_FAILED",
            message=f"Product search failed: {reason}",
            retryable=True,
            details={"reason": reason},
        )


class StoreNotFoundError(KairoError):
    def __init__(self, store_id: str) -> None:
        super().__init__(
            code="STORE_NOT_FOUND",
            message=f"Store {store_id} not found",
            details={"store_id": store_id},
        )


class InventoryVerificationFailedError(KairoError):
    def __init__(self, product_id: str, store_id: str) -> None:
        super().__init__(
            code="INVENTORY_VERIFICATION_FAILED",
            message="Inventory could not be verified",
            retryable=True,
            details={"product_id": product_id, "store_id": store_id},
        )


class InsufficientInventoryError(KairoError):
    def __init__(
        self, product_id: str, requested: int, available: int
    ) -> None:
        super().__init__(
            code="INSUFFICIENT_INVENTORY",
            message=f"Only {available} units available, {requested} requested",
            details={
                "product_id": product_id,
                "requested": requested,
                "available": available,
            },
        )


class ReservationNotFoundError(KairoError):
    def __init__(self, reservation_id: str) -> None:
        super().__init__(
            code="RESERVATION_NOT_FOUND",
            message=f"Reservation {reservation_id} not found",
            details={"reservation_id": reservation_id},
        )


class ReservationFailedError(KairoError):
    def ___init__(self, reason: str, session_id: Optional[str] = None) -> None:
        super().__init__(
            code="RESERVATION_FAILED",
            message=f"Reservation failed: {reason}",
            retryable=True,
            session_id=session_id,
            details={"reason": reason},
        )


class AIProviderError(KairoError):
    def __init__(self, provider: str, reason: str) -> None:
        super().__init__(
            code="AI_PROVIDER_ERROR",
            message=f"{provider} error: {reason}",
            retryable=True,
            details={"provider": provider, "reason": reason},
        )


class TranscriptionError(KairoError):
    def __init__(self, reason: str) -> None:
        super().__init__(
            code="TRANSCRIPTION_ERROR",
            message=f"Transcription failed: {reason}",
            retryable=True,
            details={"reason": reason},
        )


class TranscriptionProviderUnavailableError(KairoError):
    def __init__(self, reason: str) -> None:
        super().__init__(
            code="TRANSCRIPTION_PROVIDER_UNAVAILABLE",
            message=f"Transcription provider unavailable: {reason}",
            retryable=True,
            details={"reason": reason},
        )


class VoiceConnectionError(KairoError):
    def __init__(self, reason: str) -> None:
        super().__init__(
            code="VOICE_CONNECTION_ERROR",
            message=f"Voice connection error: {reason}",
            retryable=True,
            details={"reason": reason},
        )


class ToolExecutionError(KairoError):
    def __init__(self, tool: str, reason: str) -> None:
        super().__init__(
            code="TOOL_EXECUTION_ERROR",
            message=f"Tool {tool} failed: {reason}",
            details={"tool": tool, "reason": reason},
        )


class SafetyEscalationError(KairoError):
    def __init__(self, reason: str, category: str = "healthcare") -> None:
        super().__init__(
            code="SAFETY_ESCALATION",
            message=reason,
            details={"category": category, "requires_human": True},
        )


class DatabaseError(KairoError):
    def __init__(self, operation: str, reason: str) -> None:
        super().__init__(
            code="DATABASE_ERROR",
            message=f"Database {operation} failed: {reason}",
            retryable=True,
            details={"operation": operation, "reason": reason},
        )


async def kairo_exception_handler(request: Request, exc: KairoError) -> JSONResponse:
    """Global exception handler for KairoError."""
    logger.error(
        "kairo_error",
        code=exc.code,
        message=exc.message,
        session_id=exc.session_id,
        path=request.url.path,
    )
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={
            "success": False,
            "data": None,
            "error": exc.to_detail().model_dump(),
            "request_id": getattr(request.state, "request_id", None),
        },
    )


async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    """Global exception handler for HTTPException."""
    logger.warning(
        "http_exception",
        status_code=exc.status_code,
        detail=exc.detail,
        path=request.url.path,
    )
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "data": None,
            "error": {
                "code": "HTTP_ERROR",
                "message": str(exc.detail),
                "retryable": exc.status_code >= 500,
            },
            "request_id": getattr(request.state, "request_id", None),
        },
    )


async def generic_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    """Global exception handler for unhandled exceptions."""
    logger.exception(
        "unhandled_exception",
        error=str(exc),
        path=request.url.path,
    )
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "data": None,
            "error": {
                "code": "INTERNAL_ERROR",
                "message": "An internal error occurred",
                "retryable": True,
            },
            "request_id": getattr(request.state, "request_id", None),
        },
    )
