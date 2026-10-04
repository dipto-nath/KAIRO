"""Safety Service - Handles safety escalation and content filtering."""

from typing import Any

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.repositories import SessionRepository
from app.db.models import Session
from app.core.logging import get_logger

logger = get_logger(__name__)


class SafetyService:
    """Service for safety-related operations."""

    HEALTHCARE_KEYWORDS = [
        "medicine", "medication", "drug", "prescription", "pill", "tablet",
        "chest pain", "heart attack", "stroke", "emergency", "doctor",
        "diagnosis", "treatment", "symptom", "disease", "condition",
        "hospital", "clinic", "pharmacy", "pharmacist", "physician",
        "blood pressure", "diabetes", "cancer", "allergy", "reaction",
        "overdose", "poison", "suicide", "self harm", "hurt myself",
    ]

    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        self.repo = SessionRepository(session)

    def check_safety(self, text: str) -> dict[str, Any] | None:
        """Check if text contains safety-sensitive content."""
        text_lower = text.lower()
        
        for keyword in self.HEALTHCARE_KEYWORDS:
            if keyword in text_lower:
                return {
                    "triggered": True,
                    "reason": "Healthcare-related decision",
                    "category": "healthcare",
                    "escalation_available": True,
                    "matched_keyword": keyword,
                }
        
        return None

    async def handle_escalation(
        self, session_id: str, reason: str, category: str = "healthcare"
    ) -> dict[str, Any]:
        """Handle safety escalation for a session."""
        safety_state = {
            "triggered": True,
            "reason": reason,
            "category": category,
            "escalation_available": True,
        }

        await self.repo.update_safety_state(session_id, safety_state)

        # Create escalation record
        from app.db.models import AgentEvent, EventType
        from app.db.repositories import EventRepository
        event_repo = EventRepository(self.session)
        sequence = await event_repo.get_next_sequence(session_id)
        
        await event_repo.create(
            session_id=session_id,
            event_type=EventType.ESCALATION_REQUIRED,
            payload={
                "reason": reason,
                "category": category,
                "escalation_available": True,
            },
            sequence=sequence,
        )

        logger.warning(
            "safety_escalation_triggered",
            session_id=session_id,
            reason=reason,
            category=category,
        )

        return safety_state

    async def get_safety_state(self, session_id: str) -> dict[str, Any] | None:
        """Get current safety state for a session."""
        session = await self.repo.get_by_id(session_id)
        if not session:
            return None
        return session.safety_state