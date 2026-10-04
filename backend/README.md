# KAIRO Backend

**Real-Time Agentic AI Voice Assistant - Backend API**

A production-quality FastAPI backend for KAIRO, featuring real-time voice processing, agentic AI orchestration, and PostgreSQL persistence.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        KAIRO Backend                            │
├─────────────────────────────────────────────────────────────────┤
│  FastAPI Application                                            │
│  ├── API Routes (REST + WebSocket)                             │
│  ├── Agent Orchestrator (Gemini + Tools)                       │
│  ├── Domain Services                                            │
│  │   ├── Product Service                                        │
│  │   ├── Inventory Service                                      │
│  │   ├── Reservation Service                                    │
│  │   ├── Store Service                                          │
│  │   ├── Session Service                                        │
│  │   ├── Safety Service                                         │
│  │   └── Event Service                                          │
│  ├── Database Layer (SQLAlchemy + PostgreSQL)                  │
│  │   ├── Models                                                 │
│  │   ├── Repositories                                           │
│  │   └── Migrations (Alembic)                                  │
│  └── External Integrations                                      │
│      ├── Google Gemini (AI Agent)                              │
│      └── Deepgram (Speech-to-Text)                             │
└─────────────────────────────────────────────────────────────────┘
```

## Features

- **Real-time Voice Pipeline**: WebSocket audio streaming → Deepgram STT → Gemini Agent → Tools → PostgreSQL
- **Agentic AI**: Gemini with structured function calling for tool execution
- **Real Database Operations**: PostgreSQL with transactional inventory/reservation management
- **Concurrency Safe**: Row-level locking for inventory reservations
- **Idempotency**: Safe retry for reservation confirmations
- **Safety Escalation**: Healthcare request detection and human handoff
- **Control Console API**: Real-time observability for judges
- **Demo Mode**: Deterministic scenario replay for hackathon reliability

## Quick Start

### Prerequisites

- Python 3.11+
- PostgreSQL 16+
- Google Gemini API Key
- Deepgram API Key

### Local Development

```bash
# 1. Start PostgreSQL
docker compose up -d postgres

# 2. Create virtual environment
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure environment
cp .env.example .env
# Edit .env with your API keys:
# GEMINI_API_KEY=your_key_here
# DEEPGRAM_API_KEY=your_key_here

# 5. Run migrations
alembic upgrade head

# 6. Seed database
python scripts/seed_database.py

# 7. Start server
uvicorn app.main:app --reload --port 8000
```

### Docker Development

```bash
# Start all services
docker compose up -d

# Run migrations
docker compose exec backend alembic upgrade head

# Seed database
docker compose exec backend python scripts/seed_database.py

# View logs
docker compose logs -f backend
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `DEEPGRAM_API_KEY` | Deepgram API key | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SECRET_KEY` | JWT secret (32+ chars) | Yes |
| `FRONTEND_URL` | CORS origin | Yes |
| `APP_ENV` | Environment (development/staging/production) | No |
| `LOG_LEVEL` | Logging level | No |
| `DEMO_MODE` | Enable demo features | No |
| `TTS_PROVIDER` | TTS provider (browser/elevenlabs) | No |

## API Documentation

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Key Endpoints

#### Sessions
- `POST /api/sessions` - Create new session
- `GET /api/sessions/{session_id}` - Get session state
- `DELETE /api/sessions/{session_id}` - End session

#### Voice
- `POST /api/voice/start` - Start voice session
- `POST /api/voice/stop` - Stop voice session
- `WS /ws/voice/{session_id}` - Real-time audio streaming

#### Agent
- `POST /api/agent/message` - Send message to agent
- `GET /api/agent/state/{session_id}` - Get agent state

#### Products
- `GET /api/products/search` - Search products
- `GET /api/products/{product_id}` - Get product details

#### Inventory
- `GET /api/inventory/{product_id}` - Check inventory
- `GET /api/stores/{store_id}/inventory` - Get store inventory

#### Reservations
- `POST /api/reservations/prepare` - Prepare reservation
- `POST /api/reservations/{id}/confirm` - Confirm reservation
- `PATCH /api/reservations/{id}` - Update reservation
- `DELETE /api/reservations/{id}` - Cancel reservation

#### Control Console
- `GET /api/control/session/{session_id}` - Full session state
- `GET /api/control/system` - System status
- `GET /api/control/tools` - Registered tools

#### Demo
- `POST /api/demo/reset` - Reset demo data
- `POST /api/demo/scenario/{id}` - Trigger scenario

## WebSocket Protocol

### Voice WebSocket (`/ws/voice/{session_id}`)

**Client → Server:**
```json
{"type": "audio", "data": "base64_encoded_pcm16"}
{"type": "stop"}
```

**Server → Client:**
```json
{"type": "ready", "data": {"session_id": "..."}}
{"type": "transcript", "data": {"transcript": "...", "is_final": true, "confidence": 0.95}}
{"type": "speech_start", "data": {"session_id": "..."}}
{"type": "speech_end", "data": {"session_id": "..."}}
```

### Events SSE (`/api/sessions/{session_id}/events/stream`)

Server-Sent Events stream for real-time agent events.

## Database Schema

### Core Tables
- `stores` - Store locations
- `products` - Product catalog
- `product_attributes` - Product tags/attributes
- `inventory` - Stock levels with reservations
- `reservations` - Customer reservations
- `reservation_items` - Reservation line items
- `sessions` - User sessions
- `conversation_messages` - Chat transcript
- `agent_events` - Agent activity log
- `tool_executions` - Tool execution tracking

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app --cov-report=html

# Run specific test
pytest tests/test_reservation_concurrency.py -v
```

### Critical Tests
- `test_reservation_concurrency` - Proves only one reservation succeeds for last item
- `test_golden_path` - Full end-to-end flow test

## Demo Mode

Enable demo mode for hackathon presentations:

```bash
# In .env
DEMO_MODE=true
```

Demo features:
- `POST /api/demo/reset` - Restore deterministic inventory
- `POST /api/demo/scenario/golden_product_reservation` - Trigger golden flow
- `POST /api/demo/scenario/inventory_failure` - Simulate inventory failure
- `POST /api/demo/scenario/safety_escalation` - Trigger safety flow

## Security

- API keys never exposed to frontend
- CORS restricted to `FRONTEND_URL`
- Input validation on all endpoints
- SQL injection protection via SQLAlchemy ORM
- Structured error responses (no stack traces in production)
- Idempotency keys for safe retries

## Production Considerations

1. **Secrets Management**: Use proper secret manager (AWS Secrets Manager, HashiCorp Vault)
2. **Rate Limiting**: Add Redis-based rate limiting for expensive endpoints
3. **Monitoring**: Add Prometheus metrics, structured logging
4. **Scaling**: Horizontal scaling with session affinity for WebSockets
5. **Database**: Connection pooling, read replicas for analytics
6. **TLS**: Terminate at load balancer

## Project Structure

```
backend/
├── app/
│   ├── main.py                 # FastAPI app factory
│   ├── core/                   # Configuration, logging, security
│   ├── db/                     # Database models, repositories, migrations
│   ├── schemas/                # Pydantic API schemas
│   ├── services/               # Business logic services
│   ├── agent/                  # Agent orchestrator
│   ├── realtime/               # WebSocket management
│   └── api/routes/             # API endpoints
├── tests/                      # Test suite
├── scripts/                    # Utility scripts
├── alembic/                    # Database migrations
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── .env.example
```

## License

MIT License - Built for WCC Launchpad 30 Hackathon
