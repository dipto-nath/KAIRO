"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { KairoShell } from "@/components/shell/KairoShell";
import { VoiceCore } from "@/components/voice/VoiceCore";
import { WaveformBars } from "@/components/voice/WaveformBars";
import { LiveTranscript } from "@/components/conversation/LiveTranscript";
import { ContextChips } from "@/components/conversation/ContextChips";
import { AgentActivity } from "@/components/agent/AgentActivity";
import { ProductGrid } from "@/components/products/ProductCard";
import {
  ReservationSummary,
  ReservationSuccess,
} from "@/components/reservation/ReservationFlow";
import { SafetyEscalation } from "@/components/safety/SafetyEscalation";
import { useSession } from "@/hooks/useSession";
import { MOCK_INVENTORY, MOCK_STORE, DEMO_SCENARIOS } from "@/data/mock";
import type { Product } from "@/types";
import { ClientOnly } from "@/components/ClientOnly";

export default function ConversationPage() {
  const router = useRouter();
  const {
    session,
    resetSession,
    runProductDiscovery,
    runReservation,
    updateReservation,
    runSafetyEscalation,
    runLowStockAlternatives,
    startListening,
    stopListening,
    addTranscript,
    startSession,
    audioStream,
  } = useSession();

  const [showReservationFor, setShowReservationFor] = useState<Product | null>(null);
  const [inputText, setInputText] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    // Auto-start session and listening when page loads
    const initConversation = async () => {
      try {
        await startSession();
        startListening();
      } catch (error) {
        console.error("Failed to start session:", error);
      }
    };
    initConversation();

    // Cleanup on unmount
    return () => {
      stopListening();
    };
  }, [startSession, startListening, stopListening]);

  // Quick tap suggestion state
  const lastKairo = session.transcript.filter((t) => t.speaker === "kairo").slice(-1)[0];
  const showCarbOptions =
    lastKairo?.text.includes("carbonated or non-carbonated") &&
    session.status === "idle";

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText("");
    setIsSimulating(true);
    runProductDiscovery(text).finally(() => setIsSimulating(false));
  };

  const handleReserve = (product: Product) => {
    setShowReservationFor(product);
  };

  const handleConfirmReservation = (qty: number) => {
    if (!showReservationFor) return;
    setShowReservationFor(null);
    runReservation(showReservationFor, qty);
  };

  const handleUpdateReservation = (qty: number) => {
    if (!session.reservation) return;
    updateReservation(session.reservation, qty);
  };

  const handleSafetyDemo = () => {
    setIsSimulating(true);
    addTranscript("user", "What medicine should I take for chest pain?");
    runSafetyEscalation();
    setIsSimulating(false);
  };

  const handleLowStock = () => {
    setIsSimulating(true);
    runLowStockAlternatives().finally(() => setIsSimulating(false));
  };

  const handleCarbOption = (val: string) => {
    if (isSimulating) return;
    setIsSimulating(true);
    addTranscript("user", val);
    const lastUserText = session.transcript.filter((t) => t.speaker === "user").slice(-2)[0]?.text ?? "";
    runProductDiscovery(`${lastUserText} ${val}`).finally(() =>
      setIsSimulating(false)
    );
  };

  const handleEndConversation = () => {
    stopListening();
    router.push("/");
  };

  const isActive = session.status !== "idle";
  const hasProducts = session.products.length > 0;
  const hasReservation = !!session.reservation;
  const hasSafety = !!session.safetyState?.triggered;

  return (
    <ClientOnly>
    <KairoShell showNav>
      {/* Conversation Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          borderBottom: "1px solid var(--color-kairo-border)",
          flexShrink: 0,
        }}
      >
        <button
          onClick={handleEndConversation}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            background: "var(--color-kairo-surface)",
            border: "1px solid var(--color-kairo-border)",
            borderRadius: "8px",
            color: "var(--color-kairo-ink)",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span>End Conversation</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 0.75rem",
              background: "var(--color-kairo-surface)",
              border: "1px solid var(--color-kairo-border)",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: isActive ? "var(--color-pulse)" : "var(--color-kairo-muted)",
                boxShadow: isActive ? "0 0 6px var(--color-pulse)" : "none",
                display: "block",
                transition: "all 0.3s ease",
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--color-kairo-subtle)",
                letterSpacing: "0.02em",
              }}
            >
              {isActive ? "Listening..." : "Ready"}
            </span>
          </div>
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            padding: "1.5rem",
            overflow: "hidden",
          }}
        >
          {/* Left Panel - Voice Interface */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              overflow: "hidden",
            }}
          >
            {/* Voice Core */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <VoiceCore state={session.status} size={280} audioStream={audioStream} />
            </div>

            {/* Waveform Bars */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <WaveformBars state={session.status} barCount={48} height={60} width={320} />
            </div>

            {/* Live Transcript */}
            <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-kairo-muted)",
                }}
              >
                Conversation
              </div>
              <LiveTranscript entries={session.transcript} maxEntries={20} />
            </div>
          </div>

          {/* Right Panel - Context & Actions */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              overflow: "auto",
            }}
          >
            {/* Context Chips */}
            <ContextChips constraints={session.constraints} />

            {/* Agent Activity */}
            <AgentActivity
              steps={session.activities}
              tools={session.toolHistory}
            />

            {/* Products */}
            {hasProducts && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-kairo-muted)",
                  }}
                >
                  Products Found ({session.products.length})
                </div>
                <ProductGrid
                  products={session.products}
                  onReserve={handleReserve}
                />
              </div>
            )}

            {/* Reservation */}
            {showReservationFor && (
              <ReservationSummary
                productName={showReservationFor.name}
                productEmoji={showReservationFor.imageEmoji}
                unitPrice={showReservationFor.price}
                quantity={1}
                storeName={MOCK_STORE.name}
                onConfirm={handleConfirmReservation}
                onCancel={() => setShowReservationFor(null)}
              />
            )}

            {hasReservation && session.reservation && (
              <ReservationSuccess
                reservation={session.reservation}
                onUpdate={handleUpdateReservation}
                onDone={() => {
                  // Close the reservation view and go back to products
                }}
              />
            )}

            {/* Safety Escalation */}
            {hasSafety && session.safetyState && (
              <SafetyEscalation
                safety={session.safetyState}
                onConnectStaff={() => {
                  addTranscript("kairo", "I'll connect you with a human assistant right away.");
                }}
              />
            )}

            {/* Demo Scenarios */}
            <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid var(--color-kairo-border)" }}>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-kairo-muted)",
                }}
              >
                Try a Scenario
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {DEMO_SCENARIOS.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setIsSimulating(true);
                      resetSession();
                      if (scenario.id === "product_discovery") {
                        runProductDiscovery("I need a cold drink under ₹70, preferably not too sweet.");
                      } else if (scenario.id === "low_stock") {
                        runLowStockAlternatives();
                      } else if (scenario.id === "reservation") {
                        runProductDiscovery("Reserve one Strawberry Milk please.");
                      } else if (scenario.id === "safety_escalation") {
                        addTranscript("user", "What medicine should I take for chest pain?");
                        runSafetyEscalation();
                      }
                      setIsSimulating(false);
                    }}
                    style={{
                      padding: "0.75rem 1rem",
                      background: "var(--color-kairo-surface)",
                      border: "1px solid var(--color-kairo-border)",
                      borderRadius: "8px",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ fontWeight: 600, color: "var(--color-kairo-ink)" }}>
                      {scenario.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-kairo-muted)" }}>
                      {scenario.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input */}
            <form onSubmit={handleTextSubmit} style={{ marginTop: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    background: "var(--color-kairo-surface)",
                    border: "1px solid var(--color-kairo-border)",
                    borderRadius: "8px",
                    color: "var(--color-kairo-ink)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                  disabled={isSimulating}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "var(--color-signal)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    border: "none",
                    borderRadius: "8px",
                    cursor: isSimulating ? "not-allowed" : "pointer",
                    opacity: isSimulating ? 0.6 : 1,
                    minHeight: "48px",
                  }}
                  disabled={isSimulating || !inputText.trim()}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </KairoShell>
    </ClientOnly>
  );
}
