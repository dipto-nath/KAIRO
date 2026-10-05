import { DemoScenarioId } from "@/types";

export interface ScenarioMetrics {
  latency: number;
  tokens: number;
  tools: number;
  steps: number;
  reasoningTrace: string;
}

export const SCENARIO_METRICS: Record<DemoScenarioId, ScenarioMetrics> = {
  product_discovery: {
    latency: 847,
    tokens: 1247,
    tools: 3,
    steps: 4,
    reasoningTrace: `[THOUGHT] User wants cold drink under ₹70, not too sweet
[TOOL] search_products({query: "cold drink", maxPrice: 70, sweetness: "low"})
[RESULT] 12 products found
[FILTER] In stock + sweetness ≤ 4/10
[RANK] By price asc, rating desc
[TOOL] get_product_details([ids...])
[RESPONSE] "I found 3 cold drinks under ₹70..."`
  },
  low_stock: {
    latency: 620,
    tokens: 850,
    tools: 2,
    steps: 3,
    reasoningTrace: `[THOUGHT] Checking stock for Green Apple Sparkling
[TOOL] check_inventory({productId: "P-123"})
[RESULT] Out of stock
[THOUGHT] Need to find alternatives
[TOOL] get_alternatives({productId: "P-123"})
[RESPONSE] "Green Apple Sparkling is out of stock. Alternatives..."`
  },
  reservation: {
    latency: 1050,
    tokens: 1500,
    tools: 4,
    steps: 5,
    reasoningTrace: `[THOUGHT] User wants to reserve Strawberry Milk
[TOOL] hold_inventory({productId: "P-456", qty: 1})
[RESULT] Hold successful
[TOOL] generate_reservation()
[RESPONSE] "Please confirm the details..."`
  },
  safety_escalation: {
    latency: 430,
    tokens: 520,
    tools: 0,
    steps: 2,
    reasoningTrace: `[THOUGHT] Query involves medical advice (chest pain)
[GUARDRAIL] Medical diagnosis detected
[ACTION] Trigger safety protocol
[RESPONSE] "I can't diagnose..."`
  },
};
