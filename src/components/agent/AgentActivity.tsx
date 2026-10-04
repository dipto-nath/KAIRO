"use client";

import type { ActivityStep, ToolCall } from "@/types";

interface AgentActivityProps {
  steps: ActivityStep[];
  tools: ToolCall[];
}

export function AgentActivity({ steps, tools }: AgentActivityProps) {
  const hasContent = steps.length > 0 || tools.length > 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      {!hasContent && (
        <div
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-kairo-muted)",
            padding: "0.5rem 0",
          }}
        >
          Agent activity will appear here.
        </div>
      )}

      {/* Activity Steps */}
      {steps.map((step) => (
        <ActivityStepRow key={step.id} step={step} />
      ))}

      {/* Tool Execution Cards */}
      {tools.length > 0 && (
        <div style={{ marginTop: steps.length > 0 ? "0.75rem" : 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {tools.map((tool) => (
            <ToolExecutionCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}

function ActivityStepRow({ step }: { step: ActivityStep }) {
  const statusIcon =
    step.status === "complete"
      ? "✓"
      : step.status === "active"
      ? "→"
      : step.status === "error"
      ? "✗"
      : "○";

  const color =
    step.status === "complete"
      ? "var(--color-success)"
      : step.status === "active"
      ? "var(--color-kairo-offwhite)"
      : step.status === "error"
      ? "var(--color-error)"
      : "var(--color-kairo-muted)";

  return (
    <div
      className="activity-step"
      style={{
        color,
        animation: "tool-enter 0.3s ease forwards",
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "0.7rem",
          minWidth: "1rem",
          fontWeight: step.status === "active" ? 700 : 400,
        }}
      >
        {statusIcon}
      </span>
      <span>{step.label}</span>
      {step.status === "active" && (
        <span
          style={{
            display: "inline-block",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--color-kairo-offwhite)",
            animation: "fade-in 0.5s ease infinite alternate",
            marginLeft: "0.25rem",
          }}
        />
      )}
    </div>
  );
}

function ToolExecutionCard({ tool }: { tool: ToolCall }) {
  const statusColor =
    tool.status === "success"
      ? "var(--color-success)"
      : tool.status === "error"
      ? "var(--color-error)"
      : tool.status === "running"
      ? "var(--color-warning)"
      : "var(--color-kairo-muted)";

  const statusLabel =
    tool.status === "success"
      ? "Complete"
      : tool.status === "error"
      ? "Failed"
      : "Running...";

  const outputEntries = tool.output
    ? Object.entries(tool.output).slice(0, 2)
    : [];

  return (
    <div
      style={{
        padding: "0.625rem 0.875rem",
        background: "var(--color-kairo-surface)",
        border: "1px solid var(--color-kairo-border)",
        borderLeft: `2px solid ${statusColor}`,
        borderRadius: "6px",
        animation: "tool-enter 0.3s ease forwards",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-kairo-offwhite)",
            fontFamily: "monospace",
          }}
        >
          {tool.name}
        </span>
        <span
          style={{
            fontSize: "0.625rem",
            fontWeight: 600,
            color: statusColor,
            letterSpacing: "0.04em",
          }}
        >
          {statusLabel}
        </span>
      </div>

      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--color-kairo-subtle)",
          marginTop: "0.25rem",
        }}
      >
        {tool.description}
      </div>

      {outputEntries.length > 0 && (
        <div
          style={{
            marginTop: "0.375rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {outputEntries.map(([k, v]) => (
            <span
              key={k}
              style={{
                fontSize: "0.6875rem",
                color: statusColor,
                fontFamily: "monospace",
              }}
            >
              {k}: {String(v)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
