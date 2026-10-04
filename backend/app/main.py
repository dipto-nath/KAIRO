"""KAIRO FastAPI Application."""

from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.core.logging import configure_logging, get_logger
from app.core.exceptions import (
    KairoError,
    kairo_exception_handler,
    http_exception_handler,
    generic_exception_handler,
)
from app.db.database import init_db, close_db, get_session_dependency
from app.api.routes import (
    health,
    sessions,
    voice,
    agent,
    products,
    inventory,
    reservations,
    stores,
    events,
    control,
    demo,
)

logger = get_logger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Application lifespan manager."""
    # Startup
    configure_logging()
    logger.info("application_starting", version=settings.APP_VERSION, env=settings.APP_ENV)
    
    init_db()
    logger.info("database_initialized")
    
    yield
    
    # Shutdown
    logger.info("application_shutting_down")
    await close_db()
    logger.info("database_closed")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="KAIRO - Real-Time Agentic AI Voice Assistant Backend",
    lifespan=lifespan,
    docs_url="/docs" if settings.is_development else None,
    redoc_url="/redoc" if settings.is_development else None,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Exception handlers
app.add_exception_handler(KairoError, kairo_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)

# Request ID middleware
@app.middleware("http")
async def add_request_id(request: Request, call_next):
    request.state.request_id = request.headers.get("X-Request-ID", "")
    response = await call_next(request)
    response.headers["X-Request-ID"] = request.state.request_id
    return response


# Include routers
app.include_router(health.router, prefix="/api")
app.include_router(sessions.router, prefix="/api")
app.include_router(voice.router, prefix="/api")
app.include_router(agent.router, prefix="/api")
app.include_router(products.router, prefix="/api")
app.include_router(inventory.router, prefix="/api")
app.include_router(reservations.router, prefix="/api")
app.include_router(stores.router, prefix="/api")
app.include_router(events.router, prefix="/api")
app.include_router(control.router, prefix="/api")
app.include_router(demo.router, prefix="/api")


@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "running",
        "docs": "/docs" if settings.is_development else "disabled",
    }