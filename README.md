# KAIRO – Real-Time Agentic AI Voice Assistant

*Talk naturally. Get things done.*

KAIRO is a real-time, agentic AI voice assistant designed to recreate the natural experience of interacting with a helpful human service employee. Built for convenience stores, pharmacies, hospitals, clinics, and service counters, KAIRO does not merely answer questions—it is a **voice-to-action** system that completes useful tasks on behalf of the user.

## Overview

Unlike traditional digital interfaces or rigid voice bots, KAIRO is capable of:
- Understanding natural, conversational speech
- Asking clarifying follow-up questions when context is missing
- Executing tools (e.g., product search, inventory check, reservations)
- Providing grounded, real-time responses based on actual operational data
- Escalating out-of-scope or high-risk requests (e.g., medical advice) to human employees

### Example Workflow
**User:** "Do you have a chocolate protein drink below ₹100?"
**KAIRO (Reasoning):** Extracts constraints (category, flavor, price) → Calls `search_products()` → Analyzes results.
**KAIRO (Response):** "Yes, I found two options under ₹100. The cheaper one is ₹85 and there are four available. Would you like me to reserve one?"
**User:** "Yes, reserve one."
**KAIRO (Action):** Calls `reserve_product()` → Confirms reservation verbally.

## Architecture

KAIRO acts as an intelligent orchestration layer between the user's voice and backend operational systems.

- **Frontend:** Next.js / React + TypeScript (Voice client, conversational interface, live agent state visualization)
- **Backend:** FastAPI (Async APIs, WebSocket communication, tool execution)
- **Real-Time Voice Model:** Gemini 3.8 Live (or equivalent model supporting bidirectional realtime audio and function calling)
- **Database:** PostgreSQL (Products, Inventory, Stores, Orders)

## Project Structure

```text
.
├── frontend/             # Next.js application for voice client and visualizations
├── backend/              # FastAPI application for tool execution and AI orchestration (To be implemented)
├── docker-compose.yml    # Docker configuration for PostgreSQL database
└── .env                  # Environment variables (not tracked in git)
```

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- Docker & Docker Compose
- API key for Gemini (or selected AI provider)

### 1. Environment Configuration
Create a `.env` file in the root directory and populate it with the necessary API keys and database credentials (see `.env` template or create one).

### 2. Database Setup
Start the PostgreSQL database using Docker Compose:
```bash
docker-compose up -d
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Backend Setup
*(Coming soon)*

## Target Hackathon MVP (WCC Launchpad 30)

For the MVP, KAIRO is specialized as a **Store Agent** allowing customers to:
1. Find products and understand details.
2. Check real-time pricing and inventory.
3. Reserve items for pickup.
4. Get recommendations based on conversational constraints.

This core foundation utilizes a "Vertical Adapter" concept, meaning the underlying Agent Engine can be easily expanded into Pharmacy or Healthcare versions in the future just by defining new tools and safety boundaries.
