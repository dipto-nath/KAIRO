"use client";

import { useState, useCallback, useRef } from "react";
import type {
  SessionState,
  VoiceState,
  AgentState,
  TranscriptEntry,
  ToolCall,
  ActivityStep,
  ContextConstraint,
  Product,
  Reservation,
  SafetyState,
} from "@/types";
import {
  MOCK_PRODUCTS,
  MOCK_INVENTORY,
  createMockReservation,
} from "@/data/mock";
import { generateId, sleep } from "@/lib/utils";

// ── Initial State ──────────────────────────────────────────

function createInitialState(): SessionState {
  return {
    id: generateId(),
    status: "idle",
    agentState: "IDLE",
    transcript: [],
    constraints: [],
    activities: [],
    toolHistory: [],
    products: [],
    selectedProduct: undefined,
    inventory: undefined,
    reservation: undefined,
    safetyState: undefined,
    error: undefined,
    metrics: {
      startedAt: new Date(),
      responseLatencyMs: 0,
      toolCallCount: 0,
      taskCompletionRate: 0,
      sessionDurationSeconds: 0,
    },
  };
}

// ── Hook ───────────────────────────────────────────────────

export function useSession() {
  const [session, setSession] = useState<SessionState>(createInitialState);
  const abortRef = useRef<AbortController | null>(null);

  const update = useCallback(
    (partial: Partial<SessionState>) =>
      setSession((prev) => ({ ...prev, ...partial })),
    []
  );

  const setVoiceState = useCallback(
    (status: VoiceState, agentState?: AgentState) =>
      setSession((prev) => ({
        ...prev,
        status,
        agentState: agentState ?? prev.agentState,
      })),
    []
  );

  const addTranscript = useCallback(
    (speaker: TranscriptEntry["speaker"], text: string) => {
      const entry: TranscriptEntry = {
        id: generateId(),
        speaker,
        text,
        timestamp: new Date(),
      };
      setSession((prev) => ({
        ...prev,
        transcript: [...prev.transcript, entry],
      }));
      return entry;
    },
    []
  );

  const addActivity = useCallback(
    (label: string, status: ActivityStep["status"] = "pending"): string => {
      const id = generateId();
      const step: ActivityStep = { id, label, status, timestamp: new Date() };
      setSession((prev) => ({
        ...prev,
        activities: [...prev.activities, step],
      }));
      return id;
    },
    []
  );

  const updateActivity = useCallback(
    (id: string, status: ActivityStep["status"]) =>
      setSession((prev) => ({
        ...prev,
        activities: prev.activities.map((a) =>
          a.id === id ? { ...a, status } : a
        ),
      })),
    []
  );

  const addTool = useCallback(
    (name: string, displayName: string, description: string): string => {
      const id = generateId();
      const tool: ToolCall = {
        id,
        name,
        displayName,
        description,
        status: "running",
        startedAt: new Date(),
      };
      setSession((prev) => ({
        ...prev,
        toolHistory: [...prev.toolHistory, tool],
        metrics: {
          ...prev.metrics,
          toolCallCount: prev.metrics.toolCallCount + 1,
        },
      }));
      return id;
    },
    []
  );

  const updateTool = useCallback(
    (
      id: string,
      status: ToolCall["status"],
      output?: Record<string, unknown>
    ) =>
      setSession((prev) => ({
        ...prev,
        toolHistory: prev.toolHistory.map((t) =>
          t.id === id
            ? { ...t, status, completedAt: new Date(), output }
            : t
        ),
      })),
    []
  );

  const setConstraints = useCallback(
    (constraints: ContextConstraint[]) => update({ constraints }),
    [update]
  );

  const resetSession = useCallback(() => {
    abortRef.current?.abort();
    setSession(createInitialState());
  }, []);

  // ── Golden Path: Product Discovery ──────────────────────

  const runProductDiscovery = useCallback(
    async (userInput: string) => {
      abortRef.current?.abort();
      const abort = new AbortController();
      abortRef.current = abort;

      const startTime = Date.now();

      // Reset product/reservation state, keep existing
      setSession((prev) => ({
        ...prev,
        status: "listening",
        agentState: "LISTENING",
        products: [],
        selectedProduct: undefined,
        inventory: undefined,
        reservation: undefined,
        safetyState: undefined,
        error: undefined,
        activities: [],
        toolHistory: [],
        constraints: [],
      }));

      await sleep(800);
      if (abort.signal.aborted) return;

      // User speaks
      addTranscript("user", userInput);
      setVoiceState("thinking", "UNDERSTANDING");

      await sleep(1000);
      if (abort.signal.aborted) return;

      // Detect safety
      const isSafetyTrigger =
        /chest pain|medicine|medication|drug|diagnos|treatment|hospital|emergency/i.test(
          userInput
        );

      if (isSafetyTrigger) {
        await runSafetyEscalation(abort);
        return;
      }

      // Step: understood
      const understandId = addActivity("Understood request", "active");
      await sleep(600);
      if (abort.signal.aborted) return;
      updateActivity(understandId, "complete");

      // Parse constraints
      const constraints: ContextConstraint[] = [];
      const priceMatch = userInput.match(/₹?\s*(\d+)/);
      if (priceMatch) {
        constraints.push({
          key: "price",
          label: "Price",
          value: `≤ ₹${priceMatch[1]}`,
          icon: "₹",
        });
      }
      if (/cold|chilled|refrigerat/i.test(userInput)) {
        constraints.push({ key: "temp", label: "Temperature", value: "Cold", icon: "❄️" });
      }
      if (/not.*sweet|low.?sugar|sugar.?free|no sugar|not too sweet/i.test(userInput)) {
        constraints.push({ key: "sugar", label: "Sugar", value: "Low", icon: "🌿" });
      }
      if (/non.?carbonated|not carbonated|still/i.test(userInput)) {
        constraints.push({ key: "carbonation", label: "Type", value: "Non-carbonated", icon: "💧" });
      }
      if (/carbonated|sparkling|fizzy/i.test(userInput)) {
        constraints.push({ key: "carbonation", label: "Type", value: "Carbonated", icon: "🫧" });
      }

      setConstraints(constraints);
      const constraintId = addActivity("Constraints identified", "active");
      await sleep(500);
      if (abort.signal.aborted) return;
      updateActivity(constraintId, "complete");

      // Kairo asks follow-up if carbonation not specified
      const hasCarbonation = constraints.some((c) => c.key === "carbonation");
      if (!hasCarbonation && !/reserve|book/i.test(userInput)) {
        setVoiceState("speaking", "CLARIFYING");
        addTranscript("kairo", "Sure. Would you prefer carbonated or non-carbonated?");
        await sleep(2500);
        if (abort.signal.aborted) return;

        // Simulate user answering non-carbonated
        setVoiceState("listening", "LISTENING");
        await sleep(1500);
        if (abort.signal.aborted) return;
        addTranscript("user", "Non-carbonated.");
        constraints.push({ key: "carbonation", label: "Type", value: "Non-carbonated", icon: "💧" });
        setConstraints([...constraints]);
        setVoiceState("thinking", "PLANNING");
        await sleep(700);
        if (abort.signal.aborted) return;
      } else {
        setVoiceState("thinking", "PLANNING");
      }

      // Tool: search_products
      const searchId = addActivity("Searching product catalog", "active");
      const toolSearchId = addTool(
        "search_products",
        "Product Search",
        "Searching 482 products"
      );
      setVoiceState("tool_running", "TOOL_EXECUTION");
      await sleep(1400);
      if (abort.signal.aborted) return;

      // Filter products
      const maxPrice = priceMatch ? parseInt(priceMatch[1]) : 999;
      const wantCold = constraints.some((c) => c.key === "temp");
      const wantLowSugar = constraints.some((c) => c.key === "sugar");
      const wantNonCarb = constraints.some(
        (c) => c.key === "carbonation" && c.value === "Non-carbonated"
      );
      const wantCarb = constraints.some(
        (c) => c.key === "carbonation" && c.value === "Carbonated"
      );

      const filtered = MOCK_PRODUCTS.filter((p) => {
        if (p.price > maxPrice) return false;
        if (wantCold && !p.attributes.some((a) => /cold|chilled/i.test(a))) return false;
        if (wantLowSugar && !p.attributes.some((a) => /low sugar|zero sugar|light sweet/i.test(a))) return false;
        if (wantNonCarb && p.attributes.some((a) => /carbonated/i.test(a) && !/non/i.test(a))) return false;
        if (wantCarb && !p.attributes.some((a) => /carbonated/i.test(a))) return false;
        return true;
      }).slice(0, 3);

      const results = filtered.length > 0 ? filtered : MOCK_PRODUCTS.slice(0, 2);

      updateTool(toolSearchId, "success", { count: results.length });
      updateActivity(searchId, "complete");

      // Tool: check_inventory
      const invId = addActivity("Checking live inventory", "active");
      const toolInvId = addTool(
        "check_inventory",
        "Inventory Check",
        `Checking Store #042`
      );
      await sleep(1200);
      if (abort.signal.aborted) return;

      const topProduct = results[0];
      const invData = MOCK_INVENTORY[topProduct.id];
      updateTool(toolInvId, "success", {
        product: topProduct.id,
        quantity: invData?.quantity ?? 0,
      });
      updateActivity(invId, "complete");

      setSession((prev) => ({
        ...prev,
        products: results,
        inventory: invData,
        metrics: {
          ...prev.metrics,
          responseLatencyMs: Date.now() - startTime,
          taskCompletionRate: 90,
        },
      }));

      setVoiceState("speaking", "RESPONDING");
      await sleep(600);
      if (abort.signal.aborted) return;

      const responseText =
        results.length >= 2
          ? `I found ${results.length} options. The ${results[0].name} at ₹${results[0].price} is the closest match — it's cold, low sugar, and non-carbonated. There are ${invData?.quantity ?? "a few"} in stock.`
          : `I found the ${results[0].name} at ₹${results[0].price}. It's in stock.`;

      addTranscript("kairo", responseText);

      const recommendId = addActivity("Recommendation generated", "complete");
      void recommendId;

      setSession((prev) => ({
        ...prev,
        metrics: {
          ...prev.metrics,
          taskCompletionRate: 100,
        },
      }));

      await sleep(2000);
      if (abort.signal.aborted) return;
      setVoiceState("idle", "ACTION_COMPLETE");
    },
    [addTranscript, addActivity, updateActivity, addTool, updateTool, setConstraints, setVoiceState]
  );

  // ── Reservation ──────────────────────────────────────────

  const runReservation = useCallback(
    async (product: Product, quantity: number) => {
      abortRef.current?.abort();
      const abort = new AbortController();
      abortRef.current = abort;

      setVoiceState("action", "TOOL_EXECUTION");
      const toolId = addTool(
        "create_reservation",
        "Reservation",
        `Reserving ${quantity}× ${product.name}`
      );
      const actId = addActivity(`Reserving ${quantity}× ${product.name}`, "active");
      await sleep(1500);
      if (abort.signal.aborted) return;

      const reservation = createMockReservation(product, quantity);
      updateTool(toolId, "success", {
        code: reservation.confirmationCode,
        quantity,
        total: reservation.totalPrice,
      });
      updateActivity(actId, "complete");

      setSession((prev) => ({
        ...prev,
        reservation,
        status: "success",
        agentState: "ACTION_COMPLETE",
        metrics: {
          ...prev.metrics,
          taskCompletionRate: 100,
        },
      }));

      addTranscript(
        "kairo",
        `Done. ${quantity} × ${product.name} reserved. Your code is ${reservation.confirmationCode}. Pick up within 30 minutes.`
      );
    },
    [addTranscript, addActivity, updateActivity, addTool, updateTool, setVoiceState]
  );

  const updateReservation = useCallback(
    async (reservation: Reservation, newQuantity: number) => {
      setVoiceState("action", "TOOL_EXECUTION");
      const toolId = addTool(
        "update_reservation",
        "Update Reservation",
        `Updating to ${newQuantity}×`
      );
      await sleep(1000);

      const updated: Reservation = {
        ...reservation,
        quantity: newQuantity,
        totalPrice: reservation.unitPrice * newQuantity,
      };
      updateTool(toolId, "success", { quantity: newQuantity });
      setSession((prev) => ({
        ...prev,
        reservation: updated,
        status: "success",
        agentState: "ACTION_COMPLETE",
      }));
      addTranscript("kairo", `Updated to ${newQuantity} × ${reservation.productName}.`);
    },
    [addTranscript, addTool, updateTool, setVoiceState]
  );

  // ── Safety Escalation ────────────────────────────────────

  const runSafetyEscalation = useCallback(
    async (abort?: AbortController) => {
      setVoiceState("speaking", "ESCALATION");

      const safety: SafetyState = {
        triggered: true,
        reason: "Healthcare-related decision",
        category: "healthcare",
        escalationAvailable: true,
      };

      await sleep(800);
      if (abort?.signal.aborted) return;

      setSession((prev) => ({ ...prev, safetyState: safety }));
      addTranscript(
        "kairo",
        "I can help with product information, but I can't diagnose or recommend treatment. A qualified healthcare professional should help with this."
      );
    },
    [addTranscript, setVoiceState]
  );

  // ── Low Stock / Alternatives ─────────────────────────────

  const runLowStockAlternatives = useCallback(async () => {
    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;

    setSession((prev) => ({
      ...prev,
      status: "listening",
      agentState: "LISTENING",
      products: [],
      activities: [],
      toolHistory: [],
    }));

    addTranscript("user", "Do you have Mango Lassi?");
    setVoiceState("thinking", "UNDERSTANDING");
    await sleep(800);
    if (abort.signal.aborted) return;

    const searchId = addActivity("Searching for Mango Lassi", "active");
    const toolId = addTool("search_products", "Product Search", "Searching catalog");
    setVoiceState("tool_running", "TOOL_EXECUTION");
    await sleep(1200);
    if (abort.signal.aborted) return;

    updateTool(toolId, "success", { result: "not_found" });
    updateActivity(searchId, "complete");

    const altId = addActivity("Finding alternatives", "active");
    const altToolId = addTool("find_alternatives", "Alternative Search", "Finding similar products");
    await sleep(1000);
    if (abort.signal.aborted) return;

    const alternatives = [MOCK_PRODUCTS[0], MOCK_PRODUCTS[1]];
    updateTool(altToolId, "success", { count: 2 });
    updateActivity(altId, "complete");

    setSession((prev) => ({ ...prev, products: alternatives }));
    setVoiceState("speaking", "RESPONDING");
    addTranscript(
      "kairo",
      "Mango Lassi isn't available right now. I found two similar alternatives that match your preference."
    );

    await sleep(2000);
    if (abort.signal.aborted) return;
    setVoiceState("idle", "ACTION_COMPLETE");
  }, [addTranscript, addActivity, updateActivity, addTool, updateTool, setVoiceState]);

  // ── Simulate Listening ───────────────────────────────────

  const startListening = useCallback(() => {
    setVoiceState("listening", "LISTENING");
  }, [setVoiceState]);

  const stopListening = useCallback(() => {
    setVoiceState("idle", "IDLE");
  }, [setVoiceState]);

  return {
    session,
    update,
    setVoiceState,
    addTranscript,
    addActivity,
    updateActivity,
    addTool,
    updateTool,
    setConstraints,
    resetSession,
    startListening,
    stopListening,
    runProductDiscovery,
    runReservation,
    updateReservation,
    runSafetyEscalation: () => runSafetyEscalation(),
    runLowStockAlternatives,
  };
}
