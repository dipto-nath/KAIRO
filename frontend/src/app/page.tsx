"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KairoShell } from "@/components/shell/KairoShell";
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
  const router = useRouter();

  const {
    session,
    resetSession,
    runProductDiscovery,
    runReservation,
    updateReservation,
    runSafetyEscalation,
    runLowStockAlternatives,
    addTranscript,
    startSession,
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
      router.push("/conversation");
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "100vh",
            minHeight: 0,
            overflow: "hidden",
          }}
          className="main-layout"
        >
          {/* ── Left: Welcome + Quick Actions ─────────────────── */}
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
            {/* Welcome Section */}
            <div style={{ textAlign: "center", maxWidth: 400 }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-kairo-ink)", marginBottom: "1rem" }}>
                Welcome to KAIRO
              </div>
              <div style={{ color: "var(--color-kairo-subtle)", fontSize: "1.125rem", lineHeight: 1.6 }}>
                Your real-time AI voice assistant for retail. 
                Tap below to start a conversation.
              </div>
            </div>

            {/* Start Conversation Button */}
            <button 
              className="btn-primary"
              onClick={handleStartConversation}
              style={{ padding: "1rem 2.5rem", borderRadius: "12px", fontSize: "1.125rem", minWidth: 280 }}
            >
              Start Conversation
            </button>

            {/* Quick Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%", maxWidth: 320 }}>
              <button
                className="btn-secondary"
                onClick={() => {
                  startSession().then(() => router.push("/conversation"));
                }}
                style={{ textAlign: "left", padding: "1rem 1.25rem", fontSize: "0.9375rem" }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-kairo-ink)" }}>Find a Product</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)" }}>Search by name, category, or preferences</div>
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  startSession().then(() => router.push("/conversation"));
                }}
                style={{ textAlign: "left", padding: "1rem 1.25rem", fontSize: "0.9375rem" }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-kairo-ink)" }}>Reserve an Item</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)" }}>Quick 30-minute hold on any product</div>
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  startSession().then(() => router.push("/conversation"));
                }}
                style={{ textAlign: "left", padding: "1rem 1.25rem", fontSize: "0.9375rem" }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-kairo-ink)" }}>Check Alternatives</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)" }}>Find substitutes when items are out of stock</div>
              </button>
            </div>

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

            {/* Store info footer */}
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1rem",
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

          {/* ── Right: Transcript + Activity ──────── */}
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
              <div style={{ padding: "1rem", color: "var(--color-kairo-muted)", textAlign: "center" }}>
                Conversation will appear here after starting a conversation.
              </div>
            </div>

            {/* KAIRO Activity */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              <PanelHeader label="KAIRO Activity" />
              <div style={{ padding: "0.875rem 1rem" }}>
                <div style={{ color: "var(--color-kairo-muted)", textAlign: "center" }}>Activity will appear here after starting a conversation.</div>
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
      </KairoShell>
    </ClientOnly>
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
