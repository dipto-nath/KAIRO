"""Gemini AI Service."""

import json
import time
from typing import Any, Optional

import google.generativeai as genai
from google.generativeai.types import FunctionDeclaration, Tool

from app.core.config import settings
from app.core.exceptions import AIProviderError
from app.core.logging import get_logger

logger = get_logger(__name__)


class GeminiService:
    """Service for interacting with Google Gemini API."""

    def __init__(self) -> None:
        self.model = None
        self._configured = False

    def configure(self) -> None:
        """Configure Gemini with API key."""
        if self._configured:
            return

        genai.configure(api_key=settings.GEMINI_API_KEY)
        self._configured = True
        logger.info("gemini_configured")

    def _get_tool_declarations(self) -> list[FunctionDeclaration]:
        """Get function declarations for available tools."""
        return [
            FunctionDeclaration(
                name="search_products",
                description="Search products in the catalog with filters",
                parameters={
                    "type": "object",
                    "properties": {
                        "query": {"type": "string", "description": "Search query text"},
                        "category": {"type": "string", "description": "Product category"},
                        "max_price": {"type": "integer", "description": "Maximum price in paise"},
                        "temperature": {"type": "string", "description": "Temperature preference: cold, hot, ambient"},
                        "sugar_level": {"type": "string", "description": "Sugar level: zero, low, medium, high"},
                        "carbonated": {"type": "boolean", "description": "Carbonated or not"},
                        "store_id": {"type": "string", "description": "Store ID for inventory check"},
                    },
                    "required": [],
                },
            ),
            FunctionDeclaration(
                name="get_product_details",
                description="Get detailed product information",
                parameters={
                    "type": "object",
                    "properties": {
                        "product_id": {"type": "string", "description": "Product ID"},
                    },
                    "required": ["product_id"],
                },
            ),
            FunctionDeclaration(
                name="check_inventory",
                description="Check product inventory at a store",
                parameters={
                    "type": "object",
                    "properties": {
                        "product_id": {"type": "string", "description": "Product ID"},
                        "store_id": {"type": "string", "description": "Store ID"},
                        "quantity": {"type": "integer", "description": "Quantity to check"},
                    },
                    "required": ["product_id", "store_id"],
                },
            ),
            FunctionDeclaration(
                name="get_product_location",
                description="Get product location in store",
                parameters={
                    "type": "object",
                    "properties": {
                        "product_id": {"type": "string", "description": "Product ID"},
                        "store_id": {"type": "string", "description": "Store ID"},
                    },
                    "required": ["product_id", "store_id"],
                },
            ),
            FunctionDeclaration(
                name="find_alternatives",
                description="Find alternative products similar to a given product",
                parameters={
                    "type": "object",
                    "properties": {
                        "product_id": {"type": "string", "description": "Reference product ID"},
                        "store_id": {"type": "string", "description": "Store ID"},
                        "limit": {"type": "integer", "description": "Number of alternatives"},
                    },
                    "required": ["product_id", "store_id"],
                },
            ),
            FunctionDeclaration(
                name="get_store_information",
                description="Get store information",
                parameters={
                    "type": "object",
                    "properties": {
                        "store_id": {"type": "string", "description": "Store ID"},
                    },
                    "required": ["store_id"],
                },
            ),
            FunctionDeclaration(
                name="prepare_reservation",
                description="Prepare a reservation (requires user confirmation)",
                parameters={
                    "type": "object",
                    "properties": {
                        "session_id": {"type": "string", "description": "Session ID"},
                        "store_id": {"type": "string", "description": "Store ID"},
                        "items": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "product_id": {"type": "string"},
                                    "quantity": {"type": "integer"},
                                    "unit_price": {"type": "integer"},
                                },
                                "required": ["product_id", "quantity", "unit_price"],
                            },
                        },
                        "idempotency_key": {"type": "string", "description": "Idempotency key for safe retries"},
                    },
                    "required": ["session_id", "store_id", "items"],
                },
            ),
            FunctionDeclaration(
                name="confirm_reservation",
                description="Confirm a prepared reservation",
                parameters={
                    "type": "object",
                    "properties": {
                        "reservation_id": {"type": "string", "description": "Reservation ID"},
                        "idempotency_key": {"type": "string", "description": "Idempotency key for safe retries"},
                    },
                    "required": ["reservation_id"],
                },
            ),
            FunctionDeclaration(
                name="update_reservation",
                description="Update reservation quantity",
                parameters={
                    "type": "object",
                    "properties": {
                        "reservation_id": {"type": "string", "description": "Reservation ID"},
                        "product_id": {"type": "string", "description": "Product ID"},
                        "new_quantity": {"type": "integer", "description": "New quantity"},
                    },
                    "required": ["reservation_id", "product_id", "new_quantity"],
                },
            ),
            FunctionDeclaration(
                name="cancel_reservation",
                description="Cancel a reservation",
                parameters={
                    "type": "object",
                    "properties": {
                        "reservation_id": {"type": "string", "description": "Reservation ID"},
                    },
                    "required": ["reservation_id"],
                },
            ),
        ]

    def get_model(self, system_prompt: Optional[str] = None) -> genai.GenerativeModel:
        """Get configured Gemini model with tools."""
        self.configure()

        tools = [Tool(function_declarations=self._get_tool_declarations())]

        model = genai.GenerativeModel(
            model_name="gemini-flash-lite-latest",
            system_instruction=system_prompt or self._get_default_system_prompt(),
            tools=tools,
            generation_config={
                "temperature": 0.3,
                "top_p": 0.95,
                "top_k": 40,
                "max_output_tokens": 2048,
            },
        )
        return model

    def _get_default_system_prompt(self) -> str:
        """Get the default system prompt for KAIRO."""
        return """You are KAIRO, a real-time service agent for a convenience store.

Your job is to understand what the customer needs and use authorized backend tools to complete the task.

CRITICAL RULES:
1. You must NEVER invent operational facts (prices, inventory, product availability, store info, reservation IDs, quantities, product attributes).
2. All operational facts MUST come from backend tools or verified session state.
3. If information is missing, ask a clarification question.
4. If a tool fails, clearly acknowledge that the information could not be verified.
5. Never claim an action succeeded unless the backend confirms the action succeeded.
6. Before consequential actions (reservation confirmation), obtain explicit user confirmation.
7. Use concise, calm, natural language.
8. Do not expose private reasoning or chain-of-thought.
9. Show only user-facing explanations and high-level action status.
10. For sensitive healthcare requests, do not diagnose or prescribe. Escalate to an appropriate human professional when necessary.

CONVERSATION FLOW:
- Listen to customer request
- Extract constraints (price, category, temperature, sugar, carbonation, etc.)
- Ask clarifying questions if needed
- Search products using tools
- Check inventory using tools
- Present 1-3 best matches with structured reasons
- If customer wants to reserve: prepare reservation, ask for confirmation, then confirm
- Handle corrections naturally (update constraints, re-search, update reservations)

TOOL USAGE:
- search_products: Find products matching constraints
- check_inventory: Verify availability before recommending
- get_product_details: Get full product info when needed
- find_alternatives: When requested product unavailable
- prepare_reservation: Create pending reservation preview
- confirm_reservation: Execute confirmed reservation
- update_reservation: Modify existing reservation
- cancel_reservation: Cancel reservation

RESPONSE STYLE:
- Concise, calm, capable, polite, natural
- Not overly enthusiastic
- "Sure. Let me check." / "I found two options." / "I couldn't verify that, so I don't want to guess."
"""

    async def generate_response(
        self,
        session_id: str,
        messages: list[dict[str, Any]],
        system_prompt: Optional[str] = None,
    ) -> dict[str, Any]:
        """Generate a response from Gemini with tool calling."""
        model = self.get_model(system_prompt)

        # Convert messages to Gemini format
        history = []
        for msg in messages:
            role = msg.get("role", "user")
            content = msg.get("content", "")
            if role == "assistant":
                role = "model"
            history.append({"role": role, "parts": [content]})

        chat = model.start_chat(history=history[:-1]) if len(history) > 1 else model.start_chat()

        last_message = history[-1]["parts"][0] if history else ""

        try:
            start_time = time.time()
            response = await chat.send_message_async(last_message)
            elapsed_ms = int((time.time() - start_time) * 1000)

            logger.info(
                "gemini_response",
                session_id=session_id,
                latency_ms=elapsed_ms,
                has_function_calls=bool(response.candidates[0].content.parts[0].function_call)
                if response.candidates
                else False,
            )

            return self._parse_response(response)

        except Exception as e:
            logger.error("gemini_error", session_id=session_id, error=str(e))
            raise AIProviderError("Gemini", str(e))

    def _parse_response(self, response: Any) -> dict[str, Any]:
        """Parse Gemini response into structured format."""
        result = {
            "text": "",
            "function_calls": [],
        }

        if not response.candidates:
            return result

        candidate = response.candidates[0]
        if not candidate.content or not candidate.content.parts:
            return result

        for part in candidate.content.parts:
            if isinstance(part, dict):
                if 'function_call' in part:
                    fc = part['function_call']
                    result["function_calls"].append(
                        {
                            "name": fc.get('name', ''),
                            "args": dict(fc.get('args', {})),
                        }
                    )
            else:
                if hasattr(part, 'text') and part.text:
                    result["text"] += part.text
                if hasattr(part, 'function_call') and part.function_call:
                    fc = part.function_call
                    result["function_calls"].append(
                        {
                            "name": fc.name,
                            "args": dict(fc.args) if fc.args else {},
                        }
                    )

        return result


# Singleton instance
gemini_service = GeminiService()
