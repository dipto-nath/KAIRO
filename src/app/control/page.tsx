"use client";

import { useState, useEffect } from "react";
import { KairoShell } from "@/components/shell/KairoShell";
import { AgentActivity } from "@/components/agent/AgentActivity";
import { LiveTranscript } from "@/components/conversation/LiveTranscript";
import { useSession } from "@/hooks/useSession";
import { DATA_SOURCES, DEMO_SCENARIOS } from "@/data/mock";
import { formatDuration, formatTime } from "@/lib/utils";
import type { AgentState } from "@/types";
import { ClientOnly } from "@/components/ClientOnly";

const AGENT_STATES: AgentState[] = [
  "IDLE",
  "LISTENING",
  "UNDERSTANDING",
  "CLARIFYING",
  "PLANNING",
  "TOOL_EXECUTION",
  "VERIFYING",
  "RESPONDING",
  "ACTION_COMPLETE",
];

export default function ControlPage() {
  const {
    session,
    resetSession,
    runProductDiscovery,
    runSafetyEscalation,
    runLowStockAlternatives,
    addTranscript,
  } = useSession();

  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const runFlow = async (flowId: string) => {
    if (isRunning) return;
    resetSession();
    setIsRunning(true);
    try {
      if (flowId === "golden") {
        await runProductDiscovery(
          "I need a cold drink under ₹70, preferably not too sweet."
        );
      } else if (flowId === "inventory_fail") {
        await runProductDiscovery("Do you have Mango Lassi?");
      } else if (flowId === "safety") {
        addTranscript("user", "What medicine should I take for chest pain?");
        await runSafetyEscalation();
      } else if (flowId === "low_stock") {
        await runLowStockAlternatives();
      }
    } finally {
      setIsRunning(false);
    }
  };

  const currentStateIndex = AGENT_STATES.indexOf(session.agentState);
  const lastUserIntent = session.transcript.filter((t) => t.speaker === "user").slice(-1)[0]?.text ?? "—";

  return (
    <ClientOnly>
    <KairoShell showNav>
      {/* Control Header */}
      <div
        style={{
          padding: "1rem 1.5rem",
          borderBottom: "1px solid var(--color-kairo-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
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
            KAIRO Control
          </div>
          <div
            style={{
              fontSize: "1.0625rem",
              fontWeight: 600,
              color: "var(--color-kairo-offwhite)",
              letterSpacing: "-0.02em",
            }}
          >
            Live Agent Session
          </div>
        </div>

        {/* Demo Controls */}
        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
          <ControlButton
            onClick={() => runFlow("golden")}
            disabled={isRunning}
            label="Replay Golden Flow"
          />
          <ControlButton
            onClick={() => runFlow("low_stock")}
            disabled={isRunning}
            label="Low Stock Demo"
          />
          <ControlButton
            onClick={() => runFlow("safety")}
            disabled={isRunning}
            label="Trigger Safety Flow"
          />
          <ControlButton
            onClick={resetSession}
            disabled={false}
            label="Reset Session"
            variant="ghost"
          />
        </div>
      </div>

      {/* Console Grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "260px 1fr 300px",
          overflow: "hidden",
        }}
        className="control-grid"
      >
        {/* ── Col 1: State Machine + Data Sources ─────── */}
        <div
          style={{
            borderRight: "1px solid var(--color-kairo-border)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <ConsoleSection label="Agent State Machine">
            <StateMachine
              states={AGENT_STATES}
              currentIndex={currentStateIndex}
              currentState={session.agentState}
            />
          </ConsoleSection>

          <ConsoleSection label="Data Sources">
            {DATA_SOURCES.map((ds) => (
              <div
                key={ds.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.375rem 0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-kairo-subtle)",
                  }}
                >
                  {ds.label}
                </span>
                <DataSourceBadge status={ds.status} />
              </div>
            ))}
          </ConsoleSection>

          <ConsoleSection label="Trust & Safety">
            {[
              { label: "Grounded Responses", on: true },
              { label: "Tool Validation", on: true },
              { label: "Action Confirmation", on: true },
              { label: "Human Escalation", on: true },
              { label: "Raw Audio Logging", on: false },
            ].map(({ label, on }) => (
              <TrustRow key={label} label={label} on={on} />
            ))}
          </ConsoleSection>
        </div>

        {/* ── Col 2: Active Session + Tool Monitor ─────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            borderRight: "1px solid var(--color-kairo-border)",
          }}
        >
          <ConsoleSection label="Active Session">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <SessionDetail label="Session ID" value={session.id} mono />
              <SessionDetail label="State" value={session.agentState} />
              <SessionDetail label="Duration" value={formatDuration(elapsed)} mono />
              <SessionDetail
                label="Tools Used"
                value={String(session.metrics.toolCallCount)}
              />
            </div>

            <div style={{ marginTop: "0.5rem" }}>
              <FieldLabel>User Request</FieldLabel>
              <div
                style={{
                  padding: "0.625rem 0.75rem",
                  background: "var(--color-kairo-surface)",
                  border: "1px solid var(--color-kairo-border)",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  color: lastUserIntent === "—" ? "var(--color-kairo-muted)" : "var(--color-kairo-offwhite)",
                  marginTop: "0.25rem",
                  fontStyle: lastUserIntent === "—" ? "italic" : "normal",
                }}
              >
                {lastUserIntent}
              </div>
            </div>

            {session.constraints.length > 0 && (
              <div style={{ marginTop: "0.875rem" }}>
                <FieldLabel>Identified Constraints</FieldLabel>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                    marginTop: "0.375rem",
                  }}
                >
                  {session.constraints.map((c) => (
                    <div
                      key={c.key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.25rem 0.5rem",
                        background: "var(--color-kairo-surface)",
                        border: "1px solid var(--color-kairo-border)",
                        borderRadius: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-kairo-muted)",
                        }}
                      >
                        {c.label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--color-pulse-light)",
                          fontFamily: "monospace",
                        }}
                      >
                        {c.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ConsoleSection>

          {/* Tool Monitor */}
          <ConsoleSection label="Tool Monitor" flex>
            {session.toolHistory.length === 0 && (
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-kairo-muted)",
                  fontStyle: "italic",
                }}
              >
                No tool calls yet.
              </div>
            )}
            {session.toolHistory.map((tool) => (
              <ToolMonitorRow key={tool.id} tool={tool} />
            ))}
          </ConsoleSection>
        </div>

        {/* ── Col 3: Transcript + Performance ─────────── */}
        <div
          style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
        >
          <ConsoleSection label="Session Transcript" noBorderBottom>
            <LiveTranscript entries={session.transcript} maxEntries={8} />
          </ConsoleSection>

          <ConsoleSection label="Performance">
            {[
              {
                label: "Response Latency",
                value:
                  session.metrics.responseLatencyMs > 0
                    ? `${session.metrics.responseLatencyMs} ms`
                    : "—",
              },
              {
                label: "Tool Calls",
                value: String(session.metrics.toolCallCount || 0),
              },
              {
                label: "Task Completion",
                value:
                  session.metrics.taskCompletionRate > 0
                    ? `${session.metrics.taskCompletionRate}%`
                    : "—",
              },
              { label: "Session", value: formatDuration(elapsed) },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.375rem 0",
                  borderBottom: "1px solid var(--color-kairo-border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-kairo-muted)",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--color-kairo-offwhite)",
                    fontFamily: "monospace",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </ConsoleSection>

          {/* Architecture snapshot */}
          <ConsoleSection label="System Architecture">
            <ArchitectureSnapshot />
          </ConsoleSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .control-grid {
            grid-template-columns: 220px 1fr !important;
          }
          .control-grid > *:last-child {
            display: none;
          }
        }
        @media (max-width: 760px) {
          .control-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </KairoShell>
    </ClientOnly>
  );
}

// ── Sub-components ─────────────────────────────────────────

function ConsoleSection({
  label,
  children,
  flex,
  noBorderBottom,
}: {
  label: string;
  children: React.ReactNode;
  flex?: boolean;
  noBorderBottom?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...(flex ? { flex: 1, minHeight: 0 } : {}),
      }}
    >
      <div
        style={{
          padding: "0.625rem 1rem",
          borderBottom: "1px solid var(--color-kairo-border)",
          position: "sticky",
          top: 0,
          background: "var(--color-kairo-ink)",
          zIndex: 1,
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
      <div
        style={{
          padding: "0.875rem 1rem",
          ...(noBorderBottom ? {} : { borderBottom: "1px solid var(--color-kairo-border)" }),
          ...(flex ? { flex: 1, overflowY: "auto" } : {}),
        }}
      >
        {children}
      </div>
    </div>
  );
}

function StateMachine({
  states,
  currentIndex,
  currentState,
}: {
  states: AgentState[];
  currentIndex: number;
  currentState: AgentState;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {states.map((state, i) => {
        const isPast = i < currentIndex;
        const isCurrent = i === currentIndex;
        const isFuture = i > currentIndex;

        return (
          <div key={state} style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 16,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: isCurrent
                    ? "var(--color-signal)"
                    : isPast
                    ? "var(--color-success)"
                    : "var(--color-kairo-border)",
                  boxShadow: isCurrent ? "0 0 8px var(--color-signal)" : "none",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                  margin: "6px 0",
                }}
              />
              {i < states.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 14,
                    background: isPast
                      ? "var(--color-success)"
                      : "var(--color-kairo-border)",
                    transition: "background 0.3s ease",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: isCurrent ? 700 : 400,
                color: isCurrent
                  ? "var(--color-signal)"
                  : isPast
                  ? "var(--color-success)"
                  : "var(--color-kairo-muted)",
                letterSpacing: "0.04em",
                padding: "4px 0",
                transition: "color 0.3s ease",
                fontFamily: isCurrent ? "monospace" : undefined,
              }}
            >
              {state}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function DataSourceBadge({ status }: { status: string }) {
  const color =
    status === "connected"
      ? "var(--color-success)"
      : status === "demo"
      ? "var(--color-warning)"
      : "var(--color-error)";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          display: "block",
        }}
      />
      <span
        style={{
          fontSize: "0.6875rem",
          fontWeight: 600,
          color,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {status === "demo" ? "Demo DB" : status}
      </span>
    </div>
  );
}

function TrustRow({ label, on }: { label: string; on: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.375rem 0",
      }}
    >
      <span style={{ fontSize: "0.75rem", color: "var(--color-kairo-subtle)" }}>
        {label}
      </span>
      <span
        style={{
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: on ? "var(--color-success)" : "var(--color-kairo-muted)",
        }}
      >
        {on ? "ON" : "OFF"}
      </span>
    </div>
  );
}

function SessionDetail({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div
      style={{
        padding: "0.5rem 0.625rem",
        background: "var(--color-kairo-surface)",
        border: "1px solid var(--color-kairo-border)",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--color-kairo-muted)",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "var(--color-kairo-offwhite)",
          fontFamily: mono ? "monospace" : undefined,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.6rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-kairo-muted)",
      }}
    >
      {children}
    </div>
  );
}

function ToolMonitorRow({ tool }: { tool: import("@/types").ToolCall }) {
  const [expanded, setExpanded] = useState(false);
  const statusColor =
    tool.status === "success"
      ? "var(--color-success)"
      : tool.status === "error"
      ? "var(--color-error)"
      : "var(--color-warning)";

  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-kairo-border)",
        paddingBlock: "0.5rem",
        cursor: "pointer",
      }}
      onClick={() => setExpanded((v) => !v)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: statusColor,
              display: "block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.75rem",
              color: "var(--color-kairo-offwhite)",
            }}
          >
            {tool.name}()
          </span>
        </div>
        <span
          style={{
            fontSize: "0.6875rem",
            color: "var(--color-kairo-muted)",
            fontFamily: "monospace",
          }}
        >
          {formatTime(tool.startedAt)}
        </span>
      </div>

      {expanded && tool.output && (
        <div
          style={{
            marginTop: "0.375rem",
            padding: "0.5rem",
            background: "var(--color-kairo-surface)",
            borderRadius: "4px",
            fontSize: "0.6875rem",
            fontFamily: "monospace",
            color: "var(--color-kairo-subtle)",
            lineHeight: 1.6,
          }}
        >
          {Object.entries(tool.output).map(([k, v]) => (
            <div key={k}>
              <span style={{ color: "var(--color-pulse-light)" }}>{k}</span>: {String(v)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ArchitectureSnapshot() {
  const nodes = [
    { id: "customer", label: "CUSTOMER", color: "var(--color-kairo-subtle)" },
    { id: "voice", label: "VOICE INTERFACE", color: "var(--color-pulse)" },
    { id: "agent", label: "REALTIME AI AGENT", color: "var(--color-signal)" },
    { id: "tools", label: "TOOL ORCHESTRATOR", color: "var(--color-warning)" },
    { id: "db", label: "DATABASE", color: "var(--color-kairo-subtle)" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      {nodes.map((node, i) => (
        <div key={node.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              padding: "0.375rem 0.875rem",
              background: "var(--color-kairo-surface)",
              border: `1px solid ${node.color}40`,
              borderRadius: "6px",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: node.color,
            }}
          >
            {node.label}
          </div>
          {i < nodes.length - 1 && (
            <div
              style={{
                width: 1,
                height: 14,
                background: "var(--color-kairo-border)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  disabled,
  variant = "default",
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  variant?: "default" | "ghost";
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "0.4375rem 0.875rem",
        background:
          variant === "ghost" ? "transparent" : "var(--color-kairo-surface)",
        border: `1px solid ${variant === "ghost" ? "var(--color-kairo-border)" : "var(--color-kairo-border)"}`,
        borderRadius: "7px",
        color:
          variant === "ghost" ? "var(--color-kairo-muted)" : "var(--color-kairo-subtle)",
        fontSize: "0.75rem",
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "all 0.15s ease",
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </button>
  );
}
