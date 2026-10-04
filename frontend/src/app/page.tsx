"use client";

import { useState } from "react";
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
import { SafetyEscalation, HumanHandoff } from "@/components/safety/SafetyEscalation";
import { useSession } from "@/hooks/useSession";
import { MOCK_INVENTORY, MOCK_STORE, DEMO_SCENARIOS } from "@/data/mock";
import type { Product } from "@/types";
import { ClientOnly } from "@/components/ClientOnly";

export default function HomePage() {
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

  // Quick tap suggestion state
  const lastKairo = session.transcript.filter((t) => t.speaker === "kairo").slice(-1)[0];
  const showCarbOptions =
    lastKairo?.text.includes("carbonated or non-carbonated") &&
    session.status === "idle";

  const handleStartConversation = async () => {
    try {
      await startSession();
      startListening();
    } catch (error) {
      console.error("Failed to start session:", error);
    }
  };

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

  const isActive = session.status !== "idle";
  const hasProducts = session.products.length > 0;
  const hasReservation = !!session.reservation;
  const hasSafety = !!session.safetyState?.triggered;

  return (
    <ClientOnly>
      <KairoShell showNav>
      {/* ── Hero / Landing (if idle and no transcript) ─── */}
      {!isActive && session.transcript.length === 0 && (
        <LandingHero
          onStart={handleStartConversation}
          onSafety={handleSafetyDemo}
          onLowStock={handleLowStock}
        />
      )}

      {/* ── Main Voice Experience ─────────────────────── */}
      {(isActive || session.transcript.length > 0) && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr min(360px, 38vw)",
            gap: "0",
            flex: 1,
            minHeight: 0,
            overflow: "hidden",
          }}
          className="main-layout"
        >
          {/* ── Left: Voice + Context ───────────────────── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 2rem 1.5rem",
              gap: "1.5rem",
              borderRight: "1px solid var(--color-kairo-border)",
              overflowY: "auto",
            }}
          >
            {/* Voice Core */}
            <VoiceCore state={session.status} size={180} audioStream={audioStream} />
            <WaveformBars state={session.status} width={280} height={40} barCount={28} />

            {/* Voice Controls */}
            {session.status === 'idle' && (
              <button 
                className="btn-primary"
                onClick={() => startListening()}
                style={{ padding: "0.5rem 1.5rem", borderRadius: "20px", marginTop: "-0.5rem" }}
              >
                Tap to Speak
              </button>
            )}
            {session.status === 'listening' && (
              <button 
                className="btn-secondary"
                onClick={() => stopListening()}
                style={{ padding: "0.5rem 1.5rem", borderRadius: "20px", marginTop: "-0.5rem", background: "var(--color-signal)" }}
              >
                Done Speaking
              </button>
            )}

            {/* Context Chips */}
            {session.constraints.length > 0 && (
              <div style={{ width: "100%", maxWidth: 440 }}>
                <ContextChips constraints={session.constraints} />
              </div>
            )}

            {/* Quick Options (carbonated / non-carbonated) */}
            {showCarbOptions && (
              <div style={{ display: "flex", gap: "0.625rem" }}>
                {["Carbonated", "Non-carbonated"].map((opt) => (
                  <button
                    key={opt}
                    className="btn-secondary"
                    style={{ fontSize: "0.875rem" }}
                    onClick={() => handleCarbOption(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Safety Escalation */}
            {hasSafety && session.safetyState && (
              <div style={{ width: "100%", maxWidth: 480 }}>
                <SafetyEscalation
                  safety={session.safetyState}
                  onConnectStaff={() => alert("Connecting to staff...")}
                  onContinue={() => {}}
                  onDismiss={resetSession}
                />
                <div style={{ marginTop: "0.75rem" }}>
                  <HumanHandoff />
                </div>
              </div>
            )}

            {/* Reservation UI */}
            {showReservationFor && !hasReservation && (
              <div style={{ width: "100%", maxWidth: 480 }}>
                <ReservationSummary
                  productName={showReservationFor.name}
                  productEmoji={showReservationFor.imageEmoji}
                  unitPrice={showReservationFor.price}
                  quantity={1}
                  storeName={MOCK_STORE.name}
                  onConfirm={handleConfirmReservation}
                  onCancel={() => setShowReservationFor(null)}
                />
              </div>
            )}

            {/* Reservation Success */}
            {hasReservation && session.reservation && (
              <div style={{ width: "100%", maxWidth: 480 }}>
                <ReservationSuccess
                  reservation={session.reservation}
                  onDone={resetSession}
                  onUpdate={handleUpdateReservation}
                />
              </div>
            )}

            {/* Products */}
            {hasProducts && !hasReservation && !showReservationFor && !hasSafety && (
              <div style={{ width: "100%", maxWidth: 480 }}>
                <div
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-kairo-muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {session.products.length === 1 ? "Found" : `Found ${session.products.length} options`}
                </div>
                <ProductGrid
                  products={session.products}
                  inventoryMap={MOCK_INVENTORY}
                  onReserve={handleReserve}
                />
              </div>
            )}

            {/* Text input */}
            {!isSimulating && (
              <form
                onSubmit={handleTextSubmit}
                style={{
                  width: "100%",
                  maxWidth: 480,
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Or type your request..."
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    background: "var(--color-kairo-surface)",
                    border: "1px solid var(--color-kairo-border)",
                    borderRadius: "8px",
                    color: "var(--color-kairo-offwhite)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "0.75rem 1.25rem" }}
                  disabled={!inputText.trim()}
                >
                  Send
                </button>
              </form>
            )}

            {/* Reset */}
            <button
              className="btn-ghost"
              style={{ fontSize: "0.8125rem" }}
              onClick={resetSession}
            >
              New conversation
            </button>
          </div>

          {/* ── Right Panel: Transcript + Activity ──────── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Conversation Transcript */}
            <div
              style={{
                flex: "0 0 auto",
                borderBottom: "1px solid var(--color-kairo-border)",
              }}
            >
              <PanelHeader label="Conversation" />
              <LiveTranscript entries={session.transcript} />
            </div>

            {/* KAIRO Activity */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              <PanelHeader label="KAIRO Activity" />
              <div style={{ padding: "0.875rem 1rem" }}>
                <AgentActivity
                  steps={session.activities}
                  tools={session.toolHistory}
                />
              </div>
            </div>

            {/* Store Info */}
            <div
              style={{
                padding: "0.75rem 1rem",
                borderTop: "1px solid var(--color-kairo-border)",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-success)", boxShadow: "0 0 6px var(--color-success)", display: "block", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", color: "var(--color-kairo-muted)" }}>
                Store #042 · {MOCK_STORE.name} · Open now
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .main-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </KairoShell>
    </ClientOnly>
  );
}

// ── Landing Hero ───────────────────────────────────────────

function LandingHero({
  onStart,
  onSafety,
  onLowStock,
}: {
  onStart: () => void;
  onSafety: () => void;
  onLowStock: () => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        gap: "0",
        textAlign: "center",
      }}
    >
      {/* Central voice core placeholder (idle) */}
      <VoiceCore state="idle" size={200} />

      <div style={{ marginTop: "2rem", maxWidth: 440 }}>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--color-kairo-offwhite)",
            margin: "0 0 0.75rem",
            lineHeight: 1.1,
          }}
        >
          Talk naturally.
          <br />
          <span style={{ color: "var(--color-signal)" }}>Get things done.</span>
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-kairo-subtle)",
            margin: "0 0 2rem",
            lineHeight: 1.6,
          }}
        >
          KAIRO understands what you need and helps get the task done. Speak
          naturally — I&apos;ll handle the rest.
        </p>

        <button
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "0.875rem 2rem", width: "100%", maxWidth: 280 }}
          onClick={onStart}
          aria-label="Start voice conversation with KAIRO"
        >
          Start Conversation
        </button>
      </div>

      {/* Quick actions */}
      <div style={{ marginTop: "2.5rem", maxWidth: 480, width: "100%" }}>
        <div
          style={{
            fontSize: "0.625rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-kairo-muted)",
            marginBottom: "0.875rem",
          }}
        >
          Popular requests
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            {
              label: "Find a cold drink",
              sub: "Under ₹70, low sugar",
              action: onStart,
            },
            {
              label: "Check alternatives",
              sub: "Item not available",
              action: onLowStock,
            },
            {
              label: "Reserve an item",
              sub: "Quick 30-min hold",
              action: onStart,
            },
            {
              label: "Safety demo",
              sub: "Healthcare escalation",
              action: onSafety,
            },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              style={{
                padding: "0.875rem",
                background: "var(--color-kairo-charcoal)",
                border: "1px solid var(--color-kairo-border)",
                borderRadius: "10px",
                textAlign: "left",
                cursor: "pointer",
                transition: "border-color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-kairo-muted)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-kairo-border)")
              }
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-kairo-offwhite)",
                  marginBottom: "0.125rem",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-kairo-muted)",
                }}
              >
                {item.sub}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Store info footer */}
      <div
        style={{
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.625rem 1rem",
          background: "var(--color-kairo-charcoal)",
          border: "1px solid var(--color-kairo-border)",
          borderRadius: "8px",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--color-success)",
            boxShadow: "0 0 6px var(--color-success)",
            display: "block",
          }}
        />
        <span
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-kairo-subtle)",
          }}
        >
          Store #042 · Hatiara Central · Open now
        </span>
      </div>
    </div>
  );
}

function PanelHeader({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "0.75rem 1rem 0.5rem",
        borderBottom: "1px solid var(--color-kairo-border)",
      }}
    >
      <span
        style={{
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-kairo-muted)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
