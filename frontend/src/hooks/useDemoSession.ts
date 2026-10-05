import { useState, useCallback } from "react";
import { useSession } from "./useSession";
import { DemoScenarioId, SessionState } from "@/types";
import { MOCK_PRODUCTS } from "@/data/mock";

export function useDemoSession(scenarioId: DemoScenarioId) {
  const session = useSession();
  const [isRunning, setIsRunning] = useState(false);
  
  const runScenario = useCallback(async (id: DemoScenarioId) => {
    if (isRunning) return;
    setIsRunning(true);
    session.resetSession();
    
    try {
      session.setVoiceState("thinking", "UNDERSTANDING");
      
      if (id === "product_discovery") {
        session.addTranscript("user", "I need a cold drink under ₹70, preferably not too sweet.");
        await new Promise(r => setTimeout(r, 1200));
        session.addTranscript("kairo", "I found a few cold drinks under ₹70 that are currently in stock. Would you like to reserve one of these?");
        session.update({
          products: [MOCK_PRODUCTS[1], MOCK_PRODUCTS[2], MOCK_PRODUCTS[5]],
        });
      } else if (id === "low_stock") {
        session.addTranscript("user", "Do you have Green Apple Sparkling?");
        await new Promise(r => setTimeout(r, 1200));
        session.addTranscript("kairo", "Green Apple Sparkling is currently out of stock. Here are some alternatives.");
        session.update({
          products: [MOCK_PRODUCTS[1], MOCK_PRODUCTS[2]],
        });
      } else if (id === "reservation") {
        session.addTranscript("user", "Reserve one Strawberry Milk please.");
        await new Promise(r => setTimeout(r, 1200));
        session.addTranscript("kairo", "I can help with that. Please confirm the details.");
        session.update({
          reservation: {
            id: "res-123",
            productId: MOCK_PRODUCTS[0].id,
            productName: MOCK_PRODUCTS[0].name,
            quantity: 1,
            unitPrice: MOCK_PRODUCTS[0].price,
            totalPrice: MOCK_PRODUCTS[0].price,
            storeId: "store-1",
            storeName: "Demo Store",
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 15 * 60000),
            status: "pending",
            confirmationCode: "CONF-123"
          }
        });
      } else if (id === "safety_escalation") {
        session.addTranscript("user", "What medicine should I take for chest pain?");
        await new Promise(r => setTimeout(r, 1200));
        session.addTranscript("kairo", "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this.");
        session.update({
          safetyState: {
            triggered: true,
            reason: "User asking for medical advice",
            category: "healthcare",
            escalationAvailable: true,
          }
        });
      }
      session.setVoiceState("idle", "IDLE");
    } finally {
      setIsRunning(false);
    }
  }, [isRunning, session]);
  
  return { session: session.session, isRunning, runScenario, resetSession: session.resetSession };
}
