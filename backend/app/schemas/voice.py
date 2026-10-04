"""Voice API Schemas."""

from pydantic import BaseModel


class VoiceStartRequest(BaseModel):
    """Request to start voice session."""

    session_id: str
    language: str = "en"


class VoiceStartResponse(BaseModel):
    """Voice session start response."""

    session_id: str
    websocket_url: str
    status: str


class VoiceStopRequest(BaseModel):
    """Request to stop voice session."""

    session_id: str