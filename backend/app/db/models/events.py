"""Agent Events and Tool Execution Database Models."""

import enum
import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import JSONB

from app.db.database import Base


class EventType(str, enum.Enum):
    """Agent event types matching frontend expectations."""

    SESSION_STARTED = "SESSION_STARTED"
    USER_SPEAKING = "USER_SPEAKING"
    USER_TRANSCRIPT = "USER_TRANSCRIPT"
    AGENT_THINKING = "AGENT_THINKING"
    AGENT_SPEAKING = "AGENT_SPEAKING"
    TOOL_STARTED = "TOOL_STARTED"
    TOOL_COMPLETED = "TOOL_COMPLETED"
    PRODUCTS_FOUND = "PRODUCTS_FOUND"
    INVENTORY_CHECKED = "INVENTORY_CHECKED"
    ACTION_REQUIRES_CONFIRMATION = "ACTION_REQUIRES_CONFIRMATION"
    ACTION_COMPLETED = "ACTION_COMPLETED"
    ESCALATION_REQUIRED = "ESCALATION_REQUIRED"
    SESSION_ENDED = "SESSION_ENDED"
    ERROR = "ERROR"
    CONSTRAINT_UPDATED = "CONSTRAINT_UPDATED"
    RESERVATION_PREPARED = "RESERVATION_PREPARED"
    RESERVATION_CONFIRMED = "RESERVATION_CONFIRMED"
    RESERVATION_UPDATED = "RESERVATION_UPDATED"
    RESERVATION_CANCELLED = "RESERVATION_CANCELLED"
    VOICE_CONNECTION_CHANGED = "VOICE_CONNECTION_CHANGED"


class AgentEvent(Base):
    """Agent state and activity events."""

    __tablename__ = "agent_events"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True, autoincrement=True)
    event_id: Mapped[str] = mapped_column(sa.String(64), unique=True, index=True, nullable=False)
    session_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("sessions.id", ondelete="CASCADE"), nullable=False, index=True
    )
    type: Mapped[EventType] = mapped_column(sa.Enum(EventType), nullable=False, index=True)
    status: Mapped[str] = mapped_column(sa.String(32), default="completed", nullable=False)
    payload: Mapped[dict] = mapped_column(JSONB, default=dict, nullable=False)
    sequence: Mapped[int] = mapped_column(sa.Integer, nullable=False)
    timestamp: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )

    # Relationships
    session: Mapped["Session"] = relationship(back_populates="events")

    __table_args__ = (
        sa.Index("ix_agent_events_session_sequence", "session_id", "sequence"),
        sa.Index("ix_agent_events_session_type", "session_id", "type"),
    )

    def __repr__(self) -> str:
        return f"<AgentEvent(id={self.event_id}, session={self.session_id}, type={self.type})>"


class ToolExecution(Base):
    """Tool execution tracking for observability."""

    __tablename__ = "tool_executions"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True, autoincrement=True)
    execution_id: Mapped[str] = mapped_column(sa.String(64), unique=True, index=True, nullable=False)
    session_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("sessions.id", ondelete="CASCADE"), nullable=False, index=True
    )
    tool_name: Mapped[str] = mapped_column(sa.String(64), nullable=False, index=True)
    status: Mapped[str] = mapped_column(sa.String(32), nullable=False)  # running, success, error
    input: Mapped[dict] = mapped_column(JSONB, default=dict, nullable=False)
    output: Mapped[dict | None] = mapped_column(JSONB, nullable=True)
    error: Mapped[str | None] = mapped_column(sa.Text, nullable=True)
    duration_ms: Mapped[int | None] = mapped_column(sa.Integer, nullable=True)
    started_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )
    completed_at: Mapped[sa.DateTime | None] = mapped_column(sa.DateTime(timezone=True), nullable=True)

    # Relationships
    session: Mapped["Session"] = relationship(back_populates="tool_executions")

    __table_args__ = (
        sa.Index("ix_tool_exec_session_started", "session_id", "started_at"),
    )

    def __repr__(self) -> str:
        return f"<ToolExecution(id={self.execution_id}, tool={self.tool_name}, status={self.status})>"