"""Initial migration - Create all tables."""

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID, JSONB, ENUM

# revision identifiers
revision = '001_initial'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Create enum types
    reservation_status_enum = sa.Enum(
        'pending_confirmation', 'confirmed', 'cancelled', 'expired', 'failed',
        name='reservation_status'
    )

    session_status_enum = sa.Enum(
        'active', 'inactive', 'expired', 'ended',
        name='session_status'
    )

    message_role_enum = sa.Enum(
        'user', 'assistant', 'system', 'tool',
        name='message_role'
    )

    event_type_enum = sa.Enum(
        'SESSION_STARTED', 'USER_SPEAKING', 'USER_TRANSCRIPT', 'AGENT_THINKING',
        'AGENT_SPEAKING', 'TOOL_STARTED', 'TOOL_COMPLETED', 'PRODUCTS_FOUND',
        'INVENTORY_CHECKED', 'ACTION_REQUIRES_CONFIRMATION', 'ACTION_COMPLETED',
        'ESCALATION_REQUIRED', 'SESSION_ENDED', 'ERROR', 'CONSTRAINT_UPDATED',
        'RESERVATION_PREPARED', 'RESERVATION_CONFIRMED', 'RESERVATION_UPDATED',
        'RESERVATION_CANCELLED', 'VOICE_CONNECTION_CHANGED',
        name='event_type'
    )

    # Create stores table
    op.create_table(
        'stores',
        sa.Column('id', sa.String(64), primary_key=True),
        sa.Column('store_code', sa.String(32), unique=True, nullable=False, index=True),
        sa.Column('name', sa.String(256), nullable=False),
        sa.Column('address', sa.Text, nullable=False),
        sa.Column('city', sa.String(128), nullable=False),
        sa.Column('is_open', sa.Boolean, default=True, nullable=False),
        sa.Column('opening_time', sa.String(5), nullable=False),
        sa.Column('closing_time', sa.String(5), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
    )

    # Create products table
    op.create_table(
        'products',
        sa.Column('id', sa.String(64), primary_key=True),
        sa.Column('sku', sa.String(64), unique=True, nullable=False, index=True),
        sa.Column('name', sa.String(256), nullable=False),
        sa.Column('name_hindi', sa.String(256), nullable=True),
        sa.Column('description', sa.Text, nullable=False),
        sa.Column('category', sa.String(64), nullable=False, index=True),
        sa.Column('subcategory', sa.String(64), nullable=False, index=True),
        sa.Column('price', sa.Integer, nullable=False),
        sa.Column('currency', sa.String(3), default='INR', nullable=False),
        sa.Column('temperature', sa.String(32), nullable=False),
        sa.Column('sugar_level', sa.String(32), nullable=False),
        sa.Column('carbonated', sa.Boolean, default=False, nullable=False),
        sa.Column('brand', sa.String(128), nullable=True),
        sa.Column('aisle', sa.String(64), nullable=False),
        sa.Column('section', sa.String(128), nullable=False),
        sa.Column('image_url', sa.String(512), nullable=True),
        sa.Column('image_emoji', sa.String(8), nullable=True),
        sa.Column('is_active', sa.Boolean, default=True, nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
    )

    # Create product_attributes table
    op.create_table(
        'product_attributes',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('product_id', sa.String(64), sa.ForeignKey('products.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('key', sa.String(64), nullable=False),
        sa.Column('value', sa.String(256), nullable=False),
    )

    # Create inventory table
    op.create_table(
        'inventory',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('store_id', sa.String(64), sa.ForeignKey('stores.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('product_id', sa.String(64), sa.ForeignKey('products.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('quantity', sa.Integer, default=0, nullable=False),
        sa.Column('reserved_quantity', sa.Integer, default=0, nullable=False),
        sa.Column('last_updated', sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
        sa.UniqueConstraint('store_id', 'product_id', name='uq_store_product'),
    )
    op.create_index('ix_inventory_store_product', 'inventory', ['store_id', 'product_id'])

    # Create reservations table
    op.create_table(
        'reservations',
        sa.Column('id', sa.String(64), primary_key=True),
        sa.Column('reservation_code', sa.String(32), unique=True, nullable=False, index=True),
        sa.Column('session_id', sa.String(64), nullable=False, index=True),
        sa.Column('store_id', sa.String(64), sa.ForeignKey('stores.id', ondelete='RESTRICT'), nullable=False, index=True),
        sa.Column('status', reservation_status_enum, default='pending_confirmation', nullable=False),
        sa.Column('total_amount', sa.Integer, nullable=False),
        sa.Column('expires_at', sa.DateTime(timezone=True), nullable=False, index=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
        sa.Column('confirmed_at', sa.DateTime(timezone=True), nullable=True),
        sa.Column('cancelled_at', sa.DateTime(timezone=True), nullable=True),
        sa.Column('idempotency_key', sa.String(64), unique=True, nullable=True, index=True),
    )

    # Create reservation_items table
    op.create_table(
        'reservation_items',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('reservation_id', sa.String(64), sa.ForeignKey('reservations.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('product_id', sa.String(64), sa.ForeignKey('products.id', ondelete='RESTRICT'), nullable=False),
        sa.Column('quantity', sa.Integer, nullable=False),
        sa.Column('unit_price', sa.Integer, nullable=False),
        sa.Column('subtotal', sa.Integer, nullable=False),
    )

    # Create sessions table
    op.create_table(
        'sessions',
        sa.Column('id', sa.String(64), primary_key=True),
        sa.Column('store_id', sa.String(64), sa.ForeignKey('stores.id', ondelete='RESTRICT'), nullable=False, index=True),
        sa.Column('language', sa.String(10), default='en', nullable=False),
        sa.Column('status', session_status_enum, default='active', nullable=False, index=True),
        sa.Column('current_state', sa.String(64), default='IDLE', nullable=False),
        sa.Column('intent', sa.String(128), nullable=True),
        sa.Column('constraints', JSONB, default={}, nullable=False),
        sa.Column('safety_state', JSONB, nullable=True),
        sa.Column('active_reservation_id', sa.String(64), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
        sa.Column('ended_at', sa.DateTime(timezone=True), nullable=True),
    )

    # Create conversation_messages table
    op.create_table(
        'conversation_messages',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('session_id', sa.String(64), sa.ForeignKey('sessions.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('role', message_role_enum, nullable=False),
        sa.Column('content', sa.Text, nullable=False),
        sa.Column('sequence', sa.Integer, nullable=False),
        sa.Column('is_streaming', sa.Boolean, default=False, nullable=False),
        sa.Column('message_metadata', JSONB, nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
    )
    op.create_index('ix_conversation_session_sequence', 'conversation_messages', ['session_id', 'sequence'])

    # Create agent_events table
    op.create_table(
        'agent_events',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('event_id', sa.String(64), unique=True, nullable=False, index=True),
        sa.Column('session_id', sa.String(64), sa.ForeignKey('sessions.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('type', event_type_enum, nullable=False, index=True),
        sa.Column('status', sa.String(32), default='completed', nullable=False),
        sa.Column('payload', JSONB, default={}, nullable=False),
        sa.Column('sequence', sa.Integer, nullable=False),
        sa.Column('timestamp', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
    )
    op.create_index('ix_agent_events_session_sequence', 'agent_events', ['session_id', 'sequence'])
    op.create_index('ix_agent_events_session_type', 'agent_events', ['session_id', 'type'])

    # Create tool_executions table
    op.create_table(
        'tool_executions',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('execution_id', sa.String(64), unique=True, nullable=False, index=True),
        sa.Column('session_id', sa.String(64), sa.ForeignKey('sessions.id', ondelete='CASCADE'), nullable=False, index=True),
        sa.Column('tool_name', sa.String(64), nullable=False, index=True),
        sa.Column('status', sa.String(32), nullable=False),
        sa.Column('input', JSONB, default={}, nullable=False),
        sa.Column('output', JSONB, nullable=True),
        sa.Column('error', sa.Text, nullable=True),
        sa.Column('duration_ms', sa.Integer, nullable=True),
        sa.Column('started_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column('completed_at', sa.DateTime(timezone=True), nullable=True),
    )
    op.create_index('ix_tool_exec_session_started', 'tool_executions', ['session_id', 'started_at'])


def downgrade() -> None:
    # Drop tables in reverse order
    op.drop_table('tool_executions')
    op.drop_table('agent_events')
    op.drop_table('conversation_messages')
    op.drop_table('sessions')
    op.drop_table('reservation_items')
    op.drop_table('reservations')
    op.drop_table('inventory')
    op.drop_table('product_attributes')
    op.drop_table('products')
    op.drop_table('stores')

    # Drop enums
    event_type_enum = sa.Enum(name='event_type')
    event_type_enum.drop(op.get_bind())
    
    message_role_enum = sa.Enum(name='message_role')
    message_role_enum.drop(op.get_bind())
    
    session_status_enum = sa.Enum(name='session_status')
    session_status_enum.drop(op.get_bind())
    
    reservation_status_enum = sa.Enum(name='reservation_status')
    reservation_status_enum.drop(op.get_bind())
