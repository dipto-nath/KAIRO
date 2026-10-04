"use client";

import type { SafetyState } from "@/types";

interface SafetyEscalationProps {
  safety: SafetyState;
  onConnectStaff?: () => void;
  onContinue?: () => void;
  onDismiss?: () => void;
}

export function SafetyEscalation({
  safety,
  onConnectStaff,
  onContinue,
  onDismiss,
}: SafetyEscalationProps) {
  return (
    <div
      style={{
        background: "var(--color-kairo-charcoal)",
        border:
          "1px solid color-mix(in srgb, var(--color-warning) 30%, transparent)",
        borderRadius: "16px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        animation: "fade-up 0.4s ease forwards",
      }}
      role="alert"
      aria-live="assertive"
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            background:
              "color-mix(in srgb, var(--color-warning) 12%, transparent)",
            border: "1px solid color-mix(in srgb, var(--color-warning) 35%, transparent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            flexShrink: 0,
          }}
        >
          ⚠
        </div>
        <div>
          <div
            style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-warning)",
              marginBottom: "0.25rem",
            }}
          >
            Safety Handoff
          </div>
          <div
            style={{
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--color-kairo-offwhite)",
              lineHeight: 1.5,
            }}
          >
            I can help with product information, but I can&apos;t diagnose or
            recommend treatment.
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              color: "var(--color-kairo-subtle)",
              marginTop: "0.375rem",
              lineHeight: 1.5,
            }}
          >
            A qualified healthcare professional should help with this.
          </div>
        </div>
      </div>

      {/* Reason */}
      <div
        style={{
          padding: "0.75rem",
          background: "var(--color-kairo-surface)",
          border: "1px solid var(--color-kairo-border)",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontSize: "0.75rem", color: "var(--color-kairo-muted)" }}
        >
          Reason
        </span>
        <span
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--color-kairo-subtle)",
          }}
        >
          {safety.reason}
        </span>
      </div>

      {/* Actions */}
      {safety.escalationAvailable && (
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            className="btn-primary"
            style={{ flex: 1 }}
            onClick={onConnectStaff}
          >
            Connect to Professional
          </button>
          <button
            className="btn-ghost"
            onClick={onContinue}
          >
            General Info
          </button>
        </div>
      )}

      {onDismiss && (
        <button
          className="btn-ghost"
          style={{ alignSelf: "center", fontSize: "0.75rem" }}
          onClick={onDismiss}
        >
          Dismiss
        </button>
      )}

      {/* Trust signal */}
      <div
        style={{
          padding: "0.625rem",
          background: "color-mix(in srgb, var(--color-success) 6%, transparent)",
          border: "1px solid color-mix(in srgb, var(--color-success) 18%, transparent)",
          borderRadius: "8px",
          fontSize: "0.75rem",
          color: "var(--color-kairo-subtle)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        KAIRO is designed to know when to stop acting autonomously. Your safety
        always comes first.
      </div>
    </div>
  );
}

// ── Human Handoff Card ─────────────────────────────────────

export function HumanHandoff({ onConnect }: { onConnect?: () => void }) {
  return (
    <div
      style={{
        padding: "1rem",
        background: "var(--color-kairo-surface)",
        border: "1px solid var(--color-kairo-border)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        animation: "fade-up 0.3s ease forwards",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-kairo-subtle)",
            marginBottom: "0.25rem",
          }}
        >
          Human Assistance Available
        </div>
        <div
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-kairo-muted)",
          }}
        >
          Estimated response · ~2 minutes
        </div>
      </div>
      <button
        className="btn-secondary"
        style={{ fontSize: "0.8125rem", flexShrink: 0 }}
        onClick={onConnect}
      >
        Connect to Staff
      </button>
    </div>
  );
}
