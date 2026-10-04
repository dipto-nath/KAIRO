"""API Routes Package."""

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

__all__ = [
    "health",
    "sessions",
    "voice",
    "agent",
    "products",
    "inventory",
    "reservations",
    "stores",
    "events",
    "control",
    "demo",
]