"""Health Check Routes."""

from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.core.config import settings
from app.core.logging import get_logger
from app.schemas.common import HealthResponse, DependencyHealthResponse

router = APIRouter()
logger = get_logger(__name__)


@router.get("/health", response_model=HealthResponse)
async def health_check():
    """Basic health check."""
    return HealthResponse(
        status="healthy",
        service=settings.APP_NAME,
        version=settings.APP_VERSION,
    )


@router.get("/health/dependencies", response_model=DependencyHealthResponse)
async def health_dependencies(session: AsyncSession = Depends(get_session_dependency)):
    """Check all dependencies."""
    # Check database
    db_status = "connected"
    try:
        await session.execute(text("SELECT 1"))
    except Exception:
        db_status = "error"

    # Check AI providers (just check if configured)
    gemini_status = "configured" if settings.GEMINI_API_KEY and settings.GEMINI_API_KEY != "PASTE_YOUR_GEMINI_API_KEY_HERE" else "not_configured"
    deepgram_status = "configured" if settings.DEEPGRAM_API_KEY and settings.DEEPGRAM_API_KEY != "PASTE_YOUR_DEEPGRAM_API_KEY_HERE" else "not_configured"

    return DependencyHealthResponse(
        database=db_status,
        gemini=gemini_status,
        deepgram=deepgram_status,
        voice_gateway="ready",
        environment=settings.APP_ENV,
    )