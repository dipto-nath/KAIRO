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
import { SafetyEscalation } from "@/components/safety/SafetyEscalation";
import { useSession } from "@/hooks/useSession";
import { MOCK_INVENTORY, MOCK_STORE, DEMO_SCENARIOS } from "@/data/mock";
import type { Product, DemoScenarioId } from "@/types";
import { ClientOnly } from "@/components/ClientOnly";

export default function DemoPage() {
  const {
    session,
    resetSession,
    runProductDiscovery,
    runReservation,
    updateReservation,
    runSafetyEscalation,
    runLowStockAlternatives,
    addTranscript,
  audioStream,
  } = useSession();

  const [activeScenario, setActiveScenario] = useState<DemoScenarioId | null>(null);
  const [showReservationFor, setShowReservationFor] = useState<Product | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const runScenario = async (id: DemoScenarioId) => {
    if (isRunning) return;
    resetSession();
    setActiveScenario(id);
    setShowReservationFor(null);
    setIsRunning(true);

    try {
      if (id === "product_discovery") {
        await runProductDiscovery(
          "I need a cold drink under ₹70, preferably not too sweet."
        );
      } else if (id === "low_stock") {
        await runLowStockAlternatives();
      } else if (id === "reservation") {
        await runProductDiscovery("Reserve one Strawberry Milk please.");
      } else if (id === "safety_escalation") {
        addTranscript("user", "What medicine should I take for chest pain?");
        await runSafetyEscalation();
      }
    } finally {
      setIsRunning(false);
    }
  };

  const handleReserve = (product: Product) => setShowReservationFor(product);
  const handleConfirm = (qty: number) => {
    if (!showReservationFor) return;
    setShowReservationFor(null);
    setIsRunning(true);
    runReservation(showReservationFor, qty).finally(() => setIsRunning(false));
  };

  const hasProducts = session.products.length > 0;
  const hasReservation = !!session.reservation;
  const hasSafety = !!session.safetyState?.triggered;

  return (
    <ClientOnly>
    <KairoShell showNav>
      {/* Demo Header */}
      <div
        style={{
          padding: "1rem 1.5rem",
          borderBottom: "1px solid var(--color-kairo-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-signal)",
              marginBottom: "0.125rem",
            }}
          >
            Live Product Demonstration
          </div>
          <div
            style={{
              fontSize: "1.0625rem",
              fontWeight: 600,
              color: "var(--color-kairo-offwhite)",
              letterSpacing: "-0.02em",
            }}
          >
            Smart Product Discovery + Reservation
          </div>
        </div>

        {/* Scenario Picker */}
        <div
          style={{
            display: "flex",
            gap: "0.375rem",
            flexWrap: "wrap",
          }}
        >
          {DEMO_SCENARIOS.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => runScenario(scenario.id)}
              disabled={isRunning}
              style={{
                padding: "0.5rem 0.875rem",
                background:
                  activeScenario === scenario.id
                    ? "var(--color-signal)"
                    : "var(--color-kairo-surface)",
                border: `1px solid ${
                  activeScenario === scenario.id
                    ? "var(--color-signal)"
                    : "var(--color-kairo-border)"
                }`,
                borderRadius: "7px",
                color:
                  activeScenario === scenario.id
                    ? "white"
                    : "var(--color-kairo-subtle)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                cursor: isRunning ? "not-allowed" : "pointer",
                opacity: isRunning && activeScenario !== scenario.id ? 0.5 : 1,
                transition: "all 0.15s ease",
              }}
            >
              {scenario.label}
            </button>
          ))}

          <button
            onClick={resetSession}
            style={{
              padding: "0.5rem 0.875rem",
              background: "transparent",
              border: "1px solid var(--color-kairo-border)",
              borderRadius: "7px",
              color: "var(--color-kairo-muted)",
              fontSize: "0.8125rem",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Main Demo Canvas */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          overflow: "hidden",
        }}
        className="demo-layout"
      >
        {/* Center: Voice Experience */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2.5rem 2rem",
            gap: "1.5rem",
            overflowY: "auto",
            borderRight: "1px solid var(--color-kairo-border)",
          }}
        >
          <VoiceCore state={session.status} size={200} audioStream={audioStream} />
          <WaveformBars state={session.status} width={300} height={44} barCount={30} />

          {/* Active scenario label */}
          {activeScenario && (
            <div
              style={{
                padding: "0.375rem 0.875rem",
                background: "var(--color-kairo-surface)",
                border: "1px solid var(--color-kairo-border)",
                borderRadius: "6px",
                fontSize: "0.75rem",
                color: "var(--color-kairo-subtle)",
              }}
            >
              Scenario:{" "}
              <strong style={{ color: "var(--color-kairo-offwhite)" }}>
                {DEMO_SCENARIOS.find((s) => s.id === activeScenario)?.label}
              </strong>
            </div>
          )}

          {session.constraints.length > 0 && (
            <div style={{ width: "100%", maxWidth: 480 }}>
              <ContextChips constraints={session.constraints} />
            </div>
          )}

          {/* Safety */}
          {hasSafety && session.safetyState && (
            <div style={{ width: "100%", maxWidth: 480 }}>
              <SafetyEscalation
                safety={session.safetyState}
                onConnectStaff={() => {}}
                onContinue={() => {}}
                onDismiss={resetSession}
              />
            </div>
          )}

          {/* Reservation pending */}
          {showReservationFor && !hasReservation && (
            <div style={{ width: "100%", maxWidth: 480 }}>
              <ReservationSummary
                productName={showReservationFor.name}
                productEmoji={showReservationFor.imageEmoji}
                unitPrice={showReservationFor.price}
                quantity={1}
                storeName={MOCK_STORE.name}
                onConfirm={handleConfirm}
                onCancel={() => setShowReservationFor(null)}
              />
            </div>
          )}

          {/* Reservation success */}
          {hasReservation && session.reservation && (
            <div style={{ width: "100%", maxWidth: 480 }}>
              <ReservationSuccess
                reservation={session.reservation}
                onDone={resetSession}
                onUpdate={(qty) =>
                  session.reservation && updateReservation(session.reservation, qty)
                }
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
                {session.products.length} result{session.products.length !== 1 ? "s" : ""} found
              </div>
              <ProductGrid
                products={session.products}
                inventoryMap={MOCK_INVENTORY}
                onReserve={handleReserve}
              />
            </div>
          )}

          {/* Idle state prompt */}
          {!activeScenario && (
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  color: "var(--color-kairo-muted)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                }}
              >
                Select a demo scenario above to see KAIRO in action.
              </p>
            </div>
          )}
        </div>

        {/* Right: Transcript + Activity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <SectionHeader label="Conversation" />
          <div
            style={{ flex: "0 0 auto", borderBottom: "1px solid var(--color-kairo-border)" }}
          >
            <LiveTranscript entries={session.transcript} />
          </div>

          <SectionHeader label="Agent Activity" />
          <div style={{ flex: 1, overflowY: "auto", padding: "0.875rem 1rem" }}>
            <AgentActivity
              steps={session.activities}
              tools={session.toolHistory}
            />
          </div>

          {/* Metrics bar */}
          <div
            style={{
              padding: "0.75rem 1rem",
              borderTop: "1px solid var(--color-kairo-border)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.5rem",
            }}
          >
            <MetricItem
              label="Latency"
              value={
                session.metrics.responseLatencyMs > 0
                  ? `${session.metrics.responseLatencyMs}ms`
                  : "—"
              }
            />
            <MetricItem
              label="Tools"
              value={String(session.metrics.toolCallCount || "—")}
            />
            <MetricItem
              label="Complete"
              value={
                session.metrics.taskCompletionRate > 0
                  ? `${session.metrics.taskCompletionRate}%`
                  : "—"
              }
            />
          </div>
        </div>
      </div>

      {/* "Why KAIRO" section */}
      <WhyKairo />

      <style>{`
        @media (max-width: 900px) {
          .demo-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </KairoShell>
    </ClientOnly>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "0.625rem 1rem",
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

function MetricItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-kairo-offwhite)" }}>
        {value}
      </div>
      <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-kairo-muted)" }}>
        {label}
      </div>
    </div>
  );
}

function WhyKairo() {
  const features = [
    {
      label: "Natural Voice",
      desc: "Speak normally. No commands to learn.",
      icon: "◎",
    },
    {
      label: "Agentic Action",
      desc: "Uses real tools and completes tasks.",
      icon: "⟳",
    },
    {
      label: "Live Context",
      desc: "Remembers the full conversation.",
      icon: "▣",
    },
    {
      label: "Grounded",
      desc: "Facts come from connected systems.",
      icon: "◈",
    },
    {
      label: "Responsible",
      desc: "Sensitive requests are escalated safely.",
      icon: "⊕",
    },
  ];

  return (
    <div
      style={{
        borderTop: "1px solid var(--color-kairo-border)",
        padding: "2rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <div
        style={{
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-kairo-muted)",
        }}
      >
        Why KAIRO
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
        }}
      >
        {features.map((f) => (
          <div
            key={f.label}
            style={{
              padding: "0.875rem",
              background: "var(--color-kairo-charcoal)",
              border: "1px solid var(--color-kairo-border)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                fontSize: "1.125rem",
                color: "var(--color-signal)",
                marginBottom: "0.375rem",
                fontFamily: "monospace",
              }}
            >
              {f.icon}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--color-kairo-offwhite)",
                marginBottom: "0.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              {f.label}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--color-kairo-muted)",
                lineHeight: 1.5,
              }}
            >
              {f.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Multi-vertical future */}
      <div style={{ marginTop: "0.5rem" }}>
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
          Built for more than retail
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[
            {
              label: "Retail",
              items: ["Products", "Inventory", "Reservation"],
              active: true,
            },
            {
              label: "Pharmacy",
              items: ["Availability", "Pharmacist", "Safe Escalation"],
              active: false,
            },
            {
              label: "Healthcare",
              items: ["Appointments", "Navigation", "Human Handoff"],
              active: false,
            },
          ].map((v) => (
            <div
              key={v.label}
              style={{
                padding: "0.875rem",
                background: v.active
                  ? "color-mix(in srgb, var(--color-signal) 8%, transparent)"
                  : "var(--color-kairo-charcoal)",
                border: `1px solid ${v.active ? "color-mix(in srgb, var(--color-signal) 25%, transparent)" : "var(--color-kairo-border)"}`,
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: v.active ? "var(--color-signal)" : "var(--color-kairo-subtle)",
                  marginBottom: "0.375rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                {v.label}
                {v.active && (
                  <span
                    style={{
                      fontSize: "0.5625rem",
                      background: "var(--color-signal)",
                      color: "white",
                      padding: "0.0625rem 0.375rem",
                      borderRadius: "4px",
                      fontWeight: 700,
                    }}
                  >
                    LIVE
                  </span>
                )}
              </div>
              {v.items.map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--color-kairo-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  · {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
