"""Session and Conversation Database Models."""

import enum
import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import JSONB

from app.db.database import Base
from typing import Optional


class SessionStatus(str, enum.Enum):
    """Session status enumeration."""

    ACTIVE = "active"
    INACTIVE = "inactive"
    EXPIRED = "expired"
    ENDED = "ended"


class MessageRole(str, enum.Enum):
    """Conversation message role."""

    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"
    TOOL = "tool"


class Session(Base):
    """User session model."""

    __tablename__ = "sessions"

    id: Mapped[str] = mapped_column(sa.String(64), primary_key=True)
    store_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("stores.id", ondelete="RESTRICT"), nullable=False, index=True
    )
    language: Mapped[str] = mapped_column(sa.String(10), default="en", nullable=False)
    status: Mapped[SessionStatus] = mapped_column(
        sa.Enum(SessionStatus), default=SessionStatus.ACTIVE, nullable=False, index=True
    )
    current_state: Mapped[str] = mapped_column(sa.String(64), default="IDLE", nullable=False)
    intent: Mapped[Optional[str]] = mapped_column(sa.String(128), nullable=True)
    constraints: Mapped[dict] = mapped_column(JSONB, default=dict, nullable=False)
    safety_state: Mapped[Optional[dict]] = mapped_column(JSONB, nullable=True)
    active_reservation_id: Mapped[Optional[str]] = mapped_column(sa.String(64), nullable=True)
    created_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )
    updated_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True),
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )
    ended_at: Mapped[Optional[sa.DateTime]] = mapped_column(sa.DateTime(timezone=True), nullable=True)

    # Relationships
    store: Mapped["Store"] = relationship(back_populates="sessions")
    messages: Mapped[list["ConversationMessage"]] = relationship(
        back_populates="session", cascade="all, delete-orphan", order_by="ConversationMessage.sequence"
    )
    events: Mapped[list["AgentEvent"]] = relationship(back_populates="session", order_by="AgentEvent.sequence")
    tool_executions: Mapped[list["ToolExecution"]] = relationship(
        back_populates="session", order_by="ToolExecution.started_at"
    )

    def __repr__(self) -> str:
        return f"<Session(id={self.id}, status={self.status}, state={self.current_state})>"


class ConversationMessage(Base):
    """Conversation transcript messages."""

    __tablename__ = "conversation_messages"

    id: Mapped[int] = mapped_column(sa.Integer, primary_key=True, autoincrement=True)
    session_id: Mapped[str] = mapped_column(
        sa.String(64), sa.ForeignKey("sessions.id", ondelete="CASCADE"), nullable=False, index=True
    )
    role: Mapped[MessageRole] = mapped_column(sa.Enum(MessageRole), nullable=False)
    content: Mapped[str] = mapped_column(sa.Text, nullable=False)
    sequence: Mapped[int] = mapped_column(sa.Integer, nullable=False)
    is_streaming: Mapped[bool] = mapped_column(sa.Boolean, default=False, nullable=False)
    message_metadata: Mapped[Optional[dict]] = mapped_column(JSONB, nullable=True)
    created_at: Mapped[sa.DateTime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )

    # Relationships
    session: Mapped["Session"] = relationship(back_populates="messages")

    __table_args__ = (
        sa.Index("ix_conversation_session_sequence", "session_id", "sequence"),
    )

    def __repr__(self) -> str:
        return f"<ConversationMessage(session={self.session_id}, role={self.role}, seq={self.sequence})>"