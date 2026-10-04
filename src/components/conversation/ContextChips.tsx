"use client";

import type { ContextConstraint } from "@/types";

interface ContextChipsProps {
  constraints: ContextConstraint[];
}

export function ContextChips({ constraints }: ContextChipsProps) {
  if (constraints.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-kairo-muted)",
        }}
      >
        Current Request
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
        {constraints.map((c) => (
          <span
            key={c.key}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              padding: "0.25rem 0.625rem",
              background: "color-mix(in srgb, var(--color-pulse) 8%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--color-pulse) 22%, transparent)",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-pulse-light)",
              letterSpacing: "0.04em",
              animation: "fade-up 0.3s ease forwards",
            }}
          >
            {c.icon && (
              <span style={{ fontSize: "0.7rem" }}>{c.icon}</span>
            )}
            {c.value}
          </span>
        ))}
      </div>
    </div>
  );
}
