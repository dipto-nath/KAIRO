"""Deepgram Speech-to-Text Service."""

import asyncio
import json
import time
from typing import Any, AsyncGenerator, Callable, Optional

import httpx
from deepgram import DeepgramClient, LiveTranscriptionEvents, LiveOptions

from app.core.config import settings
from app.core.exceptions import TranscriptionError, TranscriptionProviderUnavailableError
from app.core.logging import get_logger

logger = get_logger(__name__)


class DeepgramService:
    """Service for Deepgram streaming speech-to-text."""

    def __init__(self) -> None:
        self.client: Optional[DeepgramClient] = None
        self._configured = False

    def configure(self) -> None:
        """Configure Deepgram client."""
        if self._configured:
            return

        self.client = DeepgramClient(settings.DEEPGRAM_API_KEY)
        self._configured = True
        logger.info("deepgram_configured")

    def is_configured(self) -> bool:
        """Check if Deepgram is configured."""
        return self._configured and self.client is not None

    async def create_stream_connection(
        self,
        language: str = "en",
        model: str = "nova-2",
        smart_format: bool = True,
        interim_results: bool = True,
        punctuate: bool = True,
    ) -> Any:
        """Create a live transcription connection."""
        if not self.is_configured():
            self.configure()

        if not self.client:
            raise TranscriptionProviderUnavailableError("Deepgram client not initialized")

        # Configure live options
        options = LiveOptions(
            model=model,
            language=language,
            smart_format=smart_format,
            interim_results=interim_results,
            punctuate=punctuate,
            encoding="linear16",
            sample_rate=16000,
            channels=1,
        )

        # Create live connection
        connection = self.client.listen.asyncwebsocket.v("1")
        
        # Start the connection
        await connection.start(options)
        
        return connection

    async def transcribe_stream(
        self,
        audio_queue: asyncio.Queue,
        on_transcript: Callable[[dict[str, Any]], None],
        on_error: Callable[[Exception], None],
        language: str = "en",
    ) -> None:
        """
        Transcribe audio stream from queue.
        
        Args:
            audio_queue: Queue receiving audio chunks (bytes)
            on_transcript: Callback for transcript events
            on_error: Callback for errors
            language: Language code for transcription
        """
        if not self.is_configured():
            self.configure()

        if not self.client:
            raise TranscriptionProviderUnavailableError("Deepgram client not initialized")

        connection = None
        try:
            # Create connection
            options = LiveOptions(
                model="nova-2",
                language=language,
                smart_format=True,
                interim_results=True,
                punctuate=True,
                encoding="linear16",
                sample_rate=16000,
                channels=1,
            )

            connection = self.client.listen.asyncwebsocket.v("1")
            
            # Set up event handlers
            connection.on(LiveTranscriptionEvents.Transcript, on_transcript)
            connection.on(LiveTranscriptionEvents.Error, lambda e: on_error(Exception(str(e))))
            connection.on(LiveTranscriptionEvents.Close, lambda _: logger.info("deepgram_connection_closed"))

            # Start connection
            await connection.start(options)
            logger.info("deepgram_stream_started", language=language)

            # Send audio chunks
            while True:
                try:
                    chunk = await asyncio.wait_for(audio_queue.get(), timeout=30.0)
                    if chunk is None:  # Sentinel for end of stream
                        break
                    await connection.send(chunk)
                except asyncio.TimeoutError:
                    # Keep-alive, continue
                    continue
                except Exception as e:
                    logger.error("deepgram_send_error", error=str(e))
                    on_error(e)
                    break

        except Exception as e:
            logger.error("deepgram_stream_error", error=str(e))
            on_error(e)
        finally:
            if connection:
                try:
                    await connection.finish()
                except Exception:
                    pass
            logger.info("deepgram_stream_ended")

    async def transcribe_prerecorded(
        self,
        audio_data: bytes,
        language: str = "en",
        model: str = "nova-2",
    ) -> dict[str, Any]:
        """Transcribe pre-recorded audio."""
        if not self.is_configured():
            self.configure()

        if not self.client:
            raise TranscriptionProviderUnavailableError("Deepgram client not initialized")

        try:
            source = {"buffer": audio_data, "mimetype": "audio/wav"}
            options = {
                "model": model,
                "language": language,
                "smart_format": True,
                "punctuate": True,
            }

            response = await self.client.listen.asyncrest.v("1").transcribe_file(source, options)
            return response.to_dict()

        except Exception as e:
            logger.error("deepgram_prerecorded_error", error=str(e))
            raise TranscriptionError(str(e))


# Singleton instance
deepgram_service = DeepgramService()