"""Voice Service - Manages audio pipeline and Deepgram integration."""

import asyncio
import base64
import time
from typing import Any, Callable, Optional
from uuid import uuid4

from app.core.config import settings
from app.core.exceptions import TranscriptionError, VoiceConnectionError
from app.core.logging import get_logger
from app.services.deepgram_service import deepgram_service

logger = get_logger(__name__)


class VoiceSession:
    """Represents an active voice session."""

    def __init__(
        self,
        session_id: str,
        language: str = "en",
    ) -> None:
        self.session_id = session_id
        self.language = language
        self.audio_queue: asyncio.Queue = asyncio.Queue()
        self.is_active = False
        self.deepgram_task: Optional[asyncio.Task] = None
        self.on_transcript_callback: Optional[Callable[[dict[str, Any]], None]] = None
        self.on_speech_start_callback: Optional[Callable[[], None]] = None
        self.on_speech_end_callback: Optional[Callable[[], None]] = None
        self.start_time: float = 0
        self.last_activity: float = 0

    async def start(
        self,
        on_transcript: Callable[[dict[str, Any]], None],
        on_speech_start: Optional[Callable[[], None]] = None,
        on_speech_end: Optional[Callable[[], None]] = None,
    ) -> None:
        """Start the voice session."""
        self.on_transcript_callback = on_transcript
        self.on_speech_start_callback = on_speech_start
        self.on_speech_end_callback = on_speech_end
        self.is_active = True
        self.start_time = time.time()
        self.last_activity = time.time()

        # Start Deepgram streaming task
        self.deepgram_task = asyncio.create_task(self._run_deepgram())

        logger.info("voice_session_started", session_id=self.session_id, language=self.language)

    async def _run_deepgram(self) -> None:
        """Run Deepgram transcription loop."""
        async def handle_transcript(event: Any) -> None:
            """Handle transcript event from Deepgram."""
            try:
                if not self.on_transcript_callback:
                    return

                # Parse Deepgram event
                if hasattr(event, 'channel'):
                    channel = event.channel
                    if channel.alternatives:
                        alt = channel.alternatives[0]
                        transcript = alt.transcript
                        confidence = alt.confidence
                        is_final = event.is_final
                        speech_final = event.speech_final

                        if transcript:
                            self.last_activity = time.time()
                            
                            await self.on_transcript_callback({
                                "session_id": self.session_id,
                                "transcript": transcript,
                                "confidence": confidence,
                                "is_final": is_final,
                                "speech_final": speech_final,
                                "language": self.language,
                            })

                            if speech_final and self.on_speech_end_callback:
                                await self.on_speech_end_callback()
                            elif not is_final and self.on_speech_start_callback:
                                await self.on_speech_start_callback()

            except Exception as e:
                logger.error("transcript_handler_error", session_id=self.session_id, error=str(e))

        async def handle_error(error: Exception) -> None:
            """Handle Deepgram error."""
            logger.error("deepgram_error", session_id=self.session_id, error=str(error))

        try:
            await deepgram_service.transcribe_stream(
                audio_queue=self.audio_queue,
                on_transcript=handle_transcript,
                on_error=handle_error,
                language=self.language,
            )
        except Exception as e:
            logger.error("deepgram_task_error", session_id=self.session_id, error=str(e))

    async def send_audio(self, audio_data: bytes) -> None:
        """Send audio chunk to Deepgram."""
        if not self.is_active:
            raise VoiceConnectionError("Voice session not active")
        
        self.audio_queue.put_nowait(audio_data)

    async def stop(self) -> None:
        """Stop the voice session."""
        self.is_active = False
        
        # Send sentinel to stop Deepgram task
        self.audio_queue.put_nowait(None)
        
        if self.deepgram_task:
            try:
                await asyncio.wait_for(self.deepgram_task, timeout=5.0)
            except asyncio.TimeoutError:
                self.deepgram_task.cancel()
                try:
                    await self.deepgram_task
                except asyncio.CancelledError:
                    pass

        logger.info("voice_session_stopped", session_id=self.session_id)

    def get_duration(self) -> float:
        """Get session duration in seconds."""
        return time.time() - self.start_time


class VoiceService:
    """Service for managing voice sessions."""

    def __init__(self) -> None:
        self.sessions: dict[str, VoiceSession] = {}

    async def create_session(
        self,
        session_id: str,
        language: str = "en",
    ) -> VoiceSession:
        """Create a new voice session."""
        if session_id in self.sessions:
            await self.sessions[session_id].stop()

        session = VoiceSession(session_id, language)
        self.sessions[session_id] = session
        return session

    def get_session(self, session_id: str) -> Optional[VoiceSession]:
        """Get existing voice session."""
        return self.sessions.get(session_id)

    async def close_session(self, session_id: str) -> None:
        """Close and remove a voice session."""
        if session_id in self.sessions:
            await self.sessions[session_id].stop()
            del self.sessions[session_id]

    async def process_audio_chunk(
        self,
        session_id: str,
        audio_base64: str,
    ) -> None:
        """Process base64 encoded audio chunk."""
        session = self.get_session(session_id)
        if not session:
            raise VoiceConnectionError(f"Voice session {session_id} not found")

        try:
            audio_bytes = base64.b64decode(audio_base64)
            await session.send_audio(audio_bytes)
        except Exception as e:
            logger.error("audio_processing_error", session_id=session_id, error=str(e))
            raise TranscriptionError(f"Failed to process audio: {e}")

    def get_active_sessions(self) -> list[str]:
        """Get list of active session IDs."""
        return [sid for sid, s in self.sessions.items() if s.is_active]


# Singleton instance
voice_service = VoiceService()
