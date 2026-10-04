# KAIRO Backend API Contract

This document describes the API contract between the KAIRO frontend and backend.

## Base URL

```
Development: http://localhost:8000/api
Production: https://api.kairo.example.com/api
```

## Authentication

Currently uses session-based authentication. Future versions will use JWT tokens.

Headers:
```
X-Request-ID: <uuid>  # Optional, for tracing
```

## Response Format

All responses follow this standard format:

```json
{
  "success": true,
  "data": {},
  "error": null,
  "request_id": "uuid"
}
```

Error responses:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "retryable": true,
    "session_id": "session_id",
    "details": {}
  },
  "request_id": "uuid"
}
```

## Endpoints

### Health

#### GET /health
Basic health check.

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "service": "kairo-backend",
    "version": "1.0.0"
  }
}
```

#### GET /health/dependencies
Check all external dependencies.

**Response:**
```json
{
  "success": true,
  "data": {
    "database": "connected",
    "gemini": "configured",
    "deepgram": "configured",
    "voice_gateway": "ready",
    "environment": "development"
  }
}
```

### Sessions

#### POST /sessions
Create a new session.

**Request:**
```json
{
  "store_id": "store_042",  // Optional, uses default if omitted
  "language": "en"  // en, hi, bn
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "session_id": "uuid",
    "store_id": "store_042",
    "status": "active",
    "language": "en",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

#### GET /sessions/{session_id}
Get full session state (for control console).

#### DELETE /sessions/{session_id}
End a session.

### Voice

#### POST /voice/start
Start a voice session.

**Request:**
```json
{
  "session_id": "uuid",
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "session_id": "uuid",
    "websocket_url": "/ws/voice/{session_id}",
    "status": "started"
  }
}
```

#### POST /voice/stop
Stop a voice session.

#### WS /ws/voice/{session_id}
WebSocket for real-time audio streaming.

**Client Messages:**
```json
{"type": "audio", "data": "base64_pcm16"}
{"type": "stop"}
```

**Server Messages:**
```json
{"type": "ready", "data": {"session_id": "..."}}
{"type": "transcript", "data": {"transcript": "...", "is_final": true, "confidence": 0.95}}
{"type": "speech_start", "data": {"session_id": "..."}}
{"type": "speech_end", "data": {"session_id": "..."}}
```

### Agent

#### POST /agent/message
Send a message to the agent.

**Request:**
```json
{
  "session_id": "uuid",
  "message": "I need a cold drink under ₹70",
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "session_id": "uuid",
    "response": "Sure. Would you prefer carbonated or non-carbonated?",
    "intent": "product_discovery",
    "constraints": {"max_price": 7000, "temperature": "cold", "sugar_level": "low"},
    "requires_confirmation": false,
    "safety_escalation": false
  }
}
```

#### GET /agent/state/{session_id}
Get current agent state.

### Products

#### GET /products/search
Search products with filters.

**Query Parameters:**
- `query` - Search text
- `category` - Category filter
- `subcategory` - Subcategory filter
- `max_price` - Maximum price in paise
- `min_price` - Minimum price in paise
- `temperature` - cold/hot/ambient
- `sugar_level` - zero/low/medium/high
- `carbonated` - true/false
- `store_id` - Store for inventory check
- `limit` - Results limit (default 20)
- `offset` - Pagination offset

**Response:**
```json
{
  "success": true,
  "data": {
    "products": [...],
    "total": 5,
    "query": {...}
  }
}
```

#### GET /products/{product_id}
Get product details with inventory and location.

**Query Parameters:**
- `store_id` - Optional store for inventory/location

### Inventory

#### GET /inventory/{product_id}
Check inventory for a product.

**Query Parameters:**
- `store_id` (required)
- `quantity` (default 1)

**Response:**
```json
{
  "success": true,
  "data": {
    "product_id": "prod_001",
    "store_id": "store_042",
    "available": true,
    "quantity": 6,
    "reserved_quantity": 0,
    "status": "available",
    "verification_failed": false
  }
}
```

#### GET /stores/{store_id}/inventory
Get full store inventory.

### Reservations

#### POST /reservations/prepare
Prepare a reservation (requires confirmation).

**Request:**
```json
{
  "session_id": "uuid",
  "store_id": "store_042",
  "items": [
    {"product_id": "prod_001", "quantity": 1, "unit_price": 6500}
  ],
  "idempotency_key": "optional_key"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "reservation_id": "rsv_...",
    "reservation_code": "KAIRO-1234",
    "items": [...],
    "total_amount": 6500,
    "store_id": "store_042",
    "store_name": "Hatiara Central",
    "expires_at": "2024-01-01T00:30:00Z",
    "status": "pending_confirmation",
    "requires_confirmation": true
  }
}
```

#### POST /reservations/{reservation_id}/confirm
Confirm a prepared reservation.

**Request:**
```json
{
  "idempotency_key": "optional_key"
}
```

#### PATCH /reservations/{reservation_id}
Update reservation quantity.

**Request:**
```json
{
  "product_id": "prod_001",
  "new_quantity": 2
}
```

#### DELETE /reservations/{reservation_id}
Cancel a reservation.

#### GET /reservations/{reservation_id}
Get reservation details.

### Stores

#### GET /stores
List all stores.

#### GET /stores/{store_id}
Get store information.

#### GET /stores/{store_id}/info
Get detailed store information with aisles.

### Events

#### GET /sessions/{session_id}/events
Get historical events for a session.

**Query Parameters:**
- `limit` (default 100)

#### GET /sessions/{session_id}/events/stream
Server-Sent Events stream for real-time events.

### Control Console

#### GET /control/session/{session_id}
Get full session state for control console.

#### GET /control/system
Get system status.

#### GET /control/tools
Get registered tools.

### Demo (only when DEMO_MODE=true)

#### POST /demo/reset
Reset demo data to initial state.

#### POST /demo/scenario/{scenario_id}
Trigger a demo scenario.

Available scenarios:
- `golden_product_reservation` - Product discovery and reservation flow
- `inventory_failure` - Simulate inventory verification failure
- `reservation_failure` - Simulate reservation failure
- `alternative_product` - Show alternative products
- `reservation_correction` - Demonstrate reservation update
- `safety_escalation` - Trigger safety escalation

#### GET /demo/status
Get demo mode status.

## Event Types

The following event types are emitted by the agent and streamed via SSE/WebSocket:

- `SESSION_STARTED` - Session created
- `USER_SPEAKING` - User started speaking
- `USER_TRANSCRIPT` - Transcript received
- `AGENT_THINKING` - Agent processing
- `AGENT_SPEAKING` - Agent responding
- `TOOL_STARTED` - Tool execution started
- `TOOL_COMPLETED` - Tool execution completed
- `PRODUCTS_FOUND` - Products found
- `INVENTORY_CHECKED` - Inventory verified
- `ACTION_REQUIRES_CONFIRMATION` - User confirmation needed
- `ACTION_COMPLETED` - Action completed
- `ESCALATION_REQUIRED` - Safety escalation
- `SESSION_ENDED` - Session ended
- `ERROR` - Error occurred
- `CONSTRAINT_UPDATED` - Conversation constraint changed
- `RESERVATION_PREPARED` - Reservation prepared
- `RESERVATION_CONFIRMED` - Reservation confirmed
- `RESERVATION_UPDATED` - Reservation updated
- `RESERVATION_CANCELLED` - Reservation cancelled
- `VOICE_CONNECTION_CHANGED` - Voice connection state changed

## Error Codes

| Code | Description | Retryable |
|------|-------------|-----------|
| INVALID_REQUEST | Invalid request parameters | No |
| SESSION_NOT_FOUND | Session does not exist | No |
| PRODUCT_NOT_FOUND | Product does not exist | No |
| INVENTORY_VERIFICATION_FAILED | Could not verify inventory | Yes |
| INSUFFICIENT_INVENTORY | Not enough stock | No |
| RESERVATION_NOT_FOUND | Reservation does not exist | No |
| RESERVATION_FAILED | Reservation could not be created | Yes |
| AI_PROVIDER_ERROR | Gemini API error | Yes |
| TRANSCRIPTION_ERROR | Deepgram API error | Yes |
| TOOL_EXECUTION_ERROR | Tool execution failed | No |
| SAFETY_ESCALATION | Safety escalation required | No |
| INTERNAL_ERROR | Internal server error | Yes |

## Example cURL Commands

```bash
# Create session
curl -X POST http://localhost:8000/api/sessions \
  -H "Content-Type: application/json" \
  -d '{"store_id": "store_042", "language": "en"}'

# Search products
curl "http://localhost:8000/api/products/search?max_price=7000&temperature=cold&store_id=store_042"

# Check inventory
curl "http://localhost:8000/api/inventory/prod_001?store_id=store_042&quantity=1"

# Prepare reservation
curl -X POST http://localhost:8000/api/reservations/prepare \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "session_uuid",
    "store_id": "store_042",
    "items": [{"product_id": "prod_001", "quantity": 1, "unit_price": 6500}]
  }'

# Health check
curl http://localhost:8000/api/health
```
