"""KAIRO API Schemas."""

from app.schemas.session import (
    SessionCreate,
    SessionResponse,
    SessionStateResponse,
)
from app.schemas.voice import (
    VoiceStartRequest,
    VoiceStartResponse,
    VoiceStopRequest,
)
from app.schemas.agent import (
    AgentMessageRequest,
    AgentMessageResponse,
    AgentStateResponse,
)
from app.schemas.product import (
    ProductSearchRequest,
    ProductSearchResponse,
    ProductResponse,
    ProductDetailResponse,
)
from app.schemas.inventory import (
    InventoryCheckRequest,
    InventoryCheckResponse,
    StoreInventoryResponse,
)
from app.schemas.reservation import (
    ReservationPrepareRequest,
    ReservationPrepareResponse,
    ReservationConfirmRequest,
    ReservationConfirmResponse,
    ReservationUpdateRequest,
    ReservationResponse,
)
from app.schemas.store import (
    StoreResponse,
    StoreInfoResponse,
)
from app.schemas.events import (
    EventResponse,
    SessionEventsResponse,
)
from app.schemas.control import (
    ControlSessionResponse,
    ControlSystemResponse,
    ControlToolResponse,
)
from app.schemas.common import (
    APIResponse,
    ErrorResponse,
    HealthResponse,
    DependencyHealthResponse,
)

__all__ = [
    "SessionCreate",
    "SessionResponse",
    "SessionStateResponse",
    "VoiceStartRequest",
    "VoiceStartResponse",
    "VoiceStopRequest",
    "AgentMessageRequest",
    "AgentMessageResponse",
    "AgentStateResponse",
    "ProductSearchRequest",
    "ProductSearchResponse",
    "ProductResponse",
    "ProductDetailResponse",
    "InventoryCheckRequest",
    "InventoryCheckResponse",
    "StoreInventoryResponse",
    "ReservationPrepareRequest",
    "ReservationPrepareResponse",
    "ReservationConfirmRequest",
    "ReservationConfirmResponse",
    "ReservationUpdateRequest",
    "ReservationResponse",
    "StoreResponse",
    "StoreInfoResponse",
    "EventResponse",
    "SessionEventsResponse",
    "ControlSessionResponse",
    "ControlSystemResponse",
    "ControlToolResponse",
    "APIResponse",
    "ErrorResponse",
    "HealthResponse",
    "DependencyHealthResponse",
]