"""Voice Routes - WebSocket and voice session management."""

from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session_dependency
from app.services.voice_service import voice_service
from app.services.session_service import SessionService
from app.schemas.voice import VoiceStartRequest, VoiceStartResponse, VoiceStopRequest
from app.schemas.common import APIResponse
from app.core.logging import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.post("/voice/start", response_model=APIResponse[VoiceStartResponse])
async def start_voice_session(
    request: VoiceStartRequest,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Start a voice session."""
    # Verify session exists
    session_service = SessionService(session)
    session_data = await session_service.get_session(request.session_id)
    if not session_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    # Create voice session
    voice_session = await voice_service.create_session(
        session_id=request.session_id,
        language=request.language,
    )

    return APIResponse(success=True, data={
        "session_id": request.session_id,
        "websocket_url": f"/ws/voice/{request.session_id}",
        "status": "started",
    })


@router.post("/voice/stop", response_model=APIResponse[dict])
async def stop_voice_session(
    request: VoiceStopRequest,
    session: AsyncSession = Depends(get_session_dependency),
):
    """Stop a voice session."""
    await voice_service.close_session(request.session_id)
    return APIResponse(success=True, data={"status": "stopped"})


@router.websocket("/ws/voice/{session_id}")
async def voice_websocket(
    websocket: WebSocket,
    session_id: str,
    session: AsyncSession = Depends(get_session_dependency),
):
    """WebSocket endpoint for real-time voice streaming."""
    await websocket.accept()
    
    # Verify session exists
    session_service = SessionService(session)
    session_data = await session_service.get_session(session_id)
    if not session_data:
        await websocket.close(code=4004, reason="Session not found")
        return

    # Create voice session
    voice_session = await voice_service.create_session(session_id=session_id)

    async def on_transcript(event: dict):
        """Handle transcript from Deepgram."""
        await websocket.send_json({
            "type": "transcript",
            "data": event,
        })

    async def on_speech_start():
        """Handle speech start."""
        await websocket.send_json({
            "type": "speech_start",
            "data": {"session_id": session_id},
        })

    async def on_speech_end():
        """Handle speech end."""
        await websocket.send_json({
            "type": "speech_end",
            "data": {"session_id": session_id},
        })

    try:
        await voice_session.start(
            on_transcript=on_transcript,
            on_speech_start=on_speech_start,
            on_speech_end=on_speech_end,
        )

        # Send ready message
        await websocket.send_json({
            "type": "ready",
            "data": {"session_id": session_id},
        })

        # Listen for audio chunks from client
        while True:
            data = await websocket.receive_text()
            import json
            message = json.loads(data)
            
            if message.get("type") == "audio":
                audio_base64 = message.get("data", "")
                await voice_service.process_audio_chunk(session_id, audio_base64)
            elif message.get("type") == "stop":
                break

    except WebSocketDisconnect:
        logger.info("voice_websocket_disconnected", session_id=session_id)
    except Exception as e:
        logger.error("voice_websocket_error", session_id=session_id, error=str(e))
    finally:
        await voice_service.close_session(session_id)