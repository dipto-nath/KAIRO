"""KAIRO Structured Logging Configuration."""

import logging
import sys
from typing import Any

import structlog
from pythonjsonlogger import jsonlogger

from app.core.config import settings


def configure_logging() -> None:
    """Configure structured logging for the application."""

    # Configure standard library logging
    logging.basicConfig(
        format="%(message)s",
        stream=sys.stdout,
        level=getattr(logging, settings.LOG_LEVEL.upper()),
    )

    # Configure structlog
    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            structlog.processors.StackInfoRenderer(),
            structlog.dev.set_exc_info,
            structlog.processors.TimeStamper(fmt="ISO"),
            structlog.processors.JSONRenderer()
            if settings.is_production
            else structlog.dev.ConsoleRenderer(colors=True),
        ],
        wrapper_class=structlog.make_filtering_bound_logger(
            getattr(logging, settings.LOG_LEVEL.upper())
        ),
        context_class=dict,
        logger_factory=structlog.PrintLoggerFactory(),
        cache_logger_on_first_use=True,
    )


def get_logger(name: str) -> structlog.BoundLogger:
    """Get a structured logger instance."""
    return structlog.get_logger(name)


class LogContext:
    """Context manager for adding structured context to logs."""

    def __init__(self, **kwargs: Any) -> None:
        self.context = kwargs
        self.tokens: list[structlog.contextvars.BoundContextVars] = []

    def __enter__(self) -> None:
        for key, value in self.context.items():
            token = structlog.contextvars.bind_contextvars(**{key: value})
            self.tokens.append(token)

    def __exit__(self, *args: Any) -> None:
        for token in reversed(self.tokens):
            token.__exit__(None, None, None)


# Convenience function for common log contexts
def session_context(session_id: str) -> LogContext:
    return LogContext(session_id=session_id)


def request_context(request_id: str) -> LogContext:
    return LogContext(request_id=request_id)