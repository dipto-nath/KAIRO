"""Agent Orchestrator - Core agent logic coordinating tools and services."""

import json
import time
from typing import Any
from uuid import uuid4

from sqlalchemy.ext.asyncio import AsyncSession

from app.services.gemini_service import gemini_service
from app.services.product_service import ProductService
from app.services.inventory_service import InventoryService
from app.services.reservation_service import ReservationService
from app.services.store_service import StoreService
from app.services.session_service import SessionService
from app.services.safety_service import SafetyService
from app.services.event_service import EventService
from app.core.logging import get_logger
from app.core.exceptions import AIProviderError, ToolExecutionError

logger = get_logger(__name__)


class AgentOrchestrator:
    """Main agent orchestrator coordinating all services."""

    MAX_AGENT_STEPS = 10

    def __init__(self, session: AsyncSession) -> None:
        self.db_session = session
        self.product_service = ProductService(session)
        self.inventory_service = InventoryService(session)
        self.reservation_service = ReservationService(session)
        self.store_service = StoreService(session)
        self.session_service = SessionService(session)
        self.safety_service = SafetyService(session)
        self.event_service = EventService(session)

    async def process_message(
        self,
        session_id: str,
        user_message: str,
        language: str = "en",
    ) -> dict[str, Any]:
        """Process a user message through the agent loop."""
        # Add user message to conversation
        await self.session_service.add_message(
            session_id=session_id,
            role="user",
            content=user_message,
            sequence=await self._get_next_sequence(session_id),
        )

        # Check safety
        safety_result = self.safety_service.check_safety(user_message)
        if safety_result:
            await self.safety_service.handle_escalation(
                session_id=session_id,
                reason=safety_result["reason"],
                category=safety_result["category"],
            )
            await self.event_service.emit(
                session_id=session_id,
                event_type="ESCALATION_REQUIRED",
                payload=safety_result,
            )
            return {
                "response": "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this.",
                "safety_escalation": True,
                "safety_reason": safety_result["reason"],
            }

        # Get conversation history
        messages = await self._get_conversation_history(session_id)

        # Run agent loop
        for step in range(self.MAX_AGENT_STEPS):
            logger.info("agent_step", session_id=session_id, step=step)

            # Update session state to THINKING
            await self.session_service.update_session_state(session_id, "THINKING")
            await self.event_service.emit(
                session_id=session_id,
                event_type="AGENT_THINKING",
                payload={"step": step},
            )

            # Generate response from Gemini
            try:
                gemini_response = await gemini_service.generate_response(
                    session_id=session_id,
                    messages=messages,
                )
            except Exception as e:
                logger.error("gemini_generation_failed", session_id=session_id, error=str(e))
                await self.event_service.emit_error(
                    session_id=session_id,
                    error_code="AI_PROVIDER_ERROR",
                    message="Failed to generate response",
                    details={"error": str(e)},
                )
                return {
                    "response": "I'm having trouble understanding that right now. Please try again.",
                    "error": "AI_PROVIDER_ERROR",
                }

            # Add assistant response to conversation
            if gemini_response.get("text"):
                await self.session_service.add_message(
                    session_id=session_id,
                    role="assistant",
                    content=gemini_response["text"],
                    sequence=await self._get_next_sequence(session_id),
                )

            # Handle function calls
            function_calls = gemini_response.get("function_calls", [])
            if function_calls:
                # Execute tools
                for func_call in function_calls:
                    tool_result = await self._execute_tool(
                        session_id=session_id,
                        tool_name=func_call["name"],
                        tool_args=func_call["args"],
                    )

                    # Add tool result to messages for next iteration
                    messages.append({
                        "role": "tool",
                        "content": json.dumps(tool_result),
                    })

                # Continue loop to let Gemini process tool results
                continue

            # No function calls - return final response
            await self.session_service.update_session_state(session_id, "RESPONDING")
            await self.event_service.emit(
                session_id=session_id,
                event_type="AGENT_SPEAKING",
                payload={"response": gemini_response.get("text", "")},
            )

            return {
                "response": gemini_response.get("text", ""),
                "intent": None,
                "constraints": {},
            }

        # Max steps reached
        logger.warning("agent_loop_limit_reached", session_id=session_id)
        await self.event_service.emit_error(
            session_id=session_id,
            error_code="AGENT_LOOP_LIMIT",
            message="Agent loop limit reached",
        )
        return {
            "response": "I'm having trouble processing that request. Please try rephrasing.",
            "error": "AGENT_LOOP_LIMIT",
        }

    async def _execute_tool(
        self,
        session_id: str,
        tool_name: str,
        tool_args: dict[str, Any],
    ) -> dict[str, Any]:
        """Execute a tool and return result."""
        logger.info("tool_execution_start", session_id=session_id, tool=tool_name, args=tool_args)

        # Emit tool started event
        await self.event_service.emit_tool_started(session_id, tool_name, tool_args)

        start_time = time.time()
        result = {}
        error = None

        try:
            if tool_name == "search_products":
                result = await self._tool_search_products(session_id, tool_args)
            elif tool_name == "get_product_details":
                result = await self._tool_get_product_details(session_id, tool_args)
            elif tool_name == "check_inventory":
                result = await self._tool_check_inventory(session_id, tool_args)
            elif tool_name == "get_product_location":
                result = await self._tool_get_product_location(session_id, tool_args)
            elif tool_name == "find_alternatives":
                result = await self._tool_find_alternatives(session_id, tool_args)
            elif tool_name == "get_store_information":
                result = await self._tool_get_store_information(session_id, tool_args)
            elif tool_name == "prepare_reservation":
                result = await self._tool_prepare_reservation(session_id, tool_args)
            elif tool_name == "confirm_reservation":
                result = await self._tool_confirm_reservation(session_id, tool_args)
            elif tool_name == "update_reservation":
                result = await self._tool_update_reservation(session_id, tool_args)
            elif tool_name == "cancel_reservation":
                result = await self._tool_cancel_reservation(session_id, tool_args)
            else:
                error = f"Unknown tool: {tool_name}"
                raise ToolExecutionError(tool_name, error)

        except Exception as e:
            error = str(e)
            logger.error("tool_execution_failed", session_id=session_id, tool=tool_name, error=error)
            result = {"error": error}

        # Emit tool completed event
        await self.event_service.emit_tool_completed(
            session_id=session_id,
            tool_name=tool_name,
            output=result if not error else None,
            error=error,
        )

        return {"tool": tool_name, "result": result, "error": error}

    async def _tool_search_products(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Search products tool."""
        store_id = args.get("store_id")
        if not store_id:
            session_data = await self.session_service.get_session(session_id)
            store_id = session_data.get("store_id") if session_data else None

        session_data = await self.session_service.get_session(session_id)
        constraints = session_data.get("constraints", {}) if session_data else {}

        search_args = {
            "query": args.get("query"),
            "category": args.get("category") or constraints.get("category"),
            "max_price": args.get("max_price") or constraints.get("max_price"),
            "temperature": args.get("temperature") or constraints.get("temperature"),
            "sugar_level": args.get("sugar_level") or constraints.get("sugar_level"),
            "carbonated": args.get("carbonated") if args.get("carbonated") is not None else constraints.get("carbonated"),
            "store_id": store_id,
            "limit": 10,
        }

        products = await self.product_service.search_products(**search_args)

        for product in products:
            if store_id:
                inv_result = await self.inventory_service.check_inventory(
                    store_id, product["id"], 1
                )
                product["inventory"] = inv_result

        await self.event_service.emit_products_found(session_id, products, search_args)

        return {"products": products, "count": len(products)}

    async def _tool_get_product_details(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Get product details tool."""
        product_id = args["product_id"]
        product = await self.product_service.get_product_details(product_id)
        return {"product": product}

    async def _tool_check_inventory(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Check inventory tool."""
        store_id = args["store_id"]
        product_id = args["product_id"]
        quantity = args.get("quantity", 1)

        result = await self.inventory_service.check_inventory(store_id, product_id, quantity)

        await self.event_service.emit_inventory_checked(session_id, product_id, result)

        return result

    async def _tool_get_product_location(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Get product location tool."""
        store_id = args["store_id"]
        product_id = args["product_id"]

        location = await self.inventory_service.get_product_location(store_id, product_id)
        return {"location": location}

    async def _tool_find_alternatives(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Find alternatives tool."""
        product_id = args["product_id"]
        store_id = args["store_id"]
        limit = args.get("limit", 3)

        alternatives = await self.product_service.find_alternatives(product_id, store_id, limit)

        for product in alternatives:
            inv_result = await self.inventory_service.check_inventory(store_id, product["id"], 1)
            product["inventory"] = inv_result

        return {"alternatives": alternatives, "count": len(alternatives)}

    async def _tool_get_store_information(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Get store information tool."""
        store_id = args["store_id"]
        store = await self.store_service.get_store_info(store_id)
        return {"store": store}

    async def _tool_prepare_reservation(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Prepare reservation tool."""
        store_id = args["store_id"]
        items = args["items"]
        idempotency_key = args.get("idempotency_key")

        reservation = await self.reservation_service.prepare_reservation(
            session_id=session_id,
            store_id=store_id,
            items=items,
            idempotency_key=idempotency_key,
        )

        await self.session_service.set_active_reservation(session_id, reservation["id"])

        await self.event_service.emit_action_requires_confirmation(
            session_id=session_id,
            action="CONFIRM_RESERVATION",
            data=reservation,
        )

        return {"reservation": reservation, "requires_confirmation": True}

    async def _tool_confirm_reservation(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Confirm reservation tool."""
        reservation_id = args["reservation_id"]
        idempotency_key = args.get("idempotency_key")

        reservation = await self.reservation_service.confirm_reservation(
            reservation_id=reservation_id,
            idempotency_key=idempotency_key,
        )

        await self.event_service.emit_action_completed(
            session_id=session_id,
            action="CONFIRM_RESERVATION",
            result=reservation,
        )

        await self.session_service.set_active_reservation(session_id, None)

        return {"reservation": reservation, "confirmed": True}

    async def _tool_update_reservation(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Update reservation tool."""
        reservation_id = args["reservation_id"]
        product_id = args["product_id"]
        new_quantity = args["new_quantity"]

        reservation = await self.reservation_service.update_reservation(
            reservation_id=reservation_id,
            product_id=product_id,
            new_quantity=new_quantity,
        )

        await self.event_service.emit_action_completed(
            session_id=session_id,
            action="UPDATE_RESERVATION",
            result=reservation,
        )

        return {"reservation": reservation, "updated": True}

    async def _tool_cancel_reservation(
        self, session_id: str, args: dict[str, Any]
    ) -> dict[str, Any]:
        """Cancel reservation tool."""
        reservation_id = args["reservation_id"]

        reservation = await self.reservation_service.cancel_reservation(reservation_id)

        await self.event_service.emit_action_completed(
            session_id=session_id,
            action="CANCEL_RESERVATION",
            result=reservation,
        )

        await self.session_service.set_active_reservation(session_id, None)

        return {"reservation": reservation, "cancelled": True}

    async def _get_conversation_history(self, session_id: str) -> list[dict[str, Any]]:
        """Get conversation history for Gemini."""
        from app.db.repositories import SessionRepository
        session_repo = SessionRepository(self.db_session)
        messages = await session_repo.get_messages(session_id, limit=20)

        history = []
        for msg in messages:
            role = msg.role.value
            if role == "assistant":
                role = "model"
            history.append({"role": role, "content": msg.content})

        return history

    async def _get_next_sequence(self, session_id: str) -> int:
        """Get next message sequence number."""
        from app.db.repositories import SessionRepository
        session_repo = SessionRepository(self.db_session)
        messages = await session_repo.get_messages(session_id, limit=1)
        if messages:
            return messages[0].sequence + 1
        return 1
