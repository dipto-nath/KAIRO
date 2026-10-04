"use client";

import { useState } from "react";
import type { Reservation } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ReservationSummaryProps {
  productName: string;
  productEmoji: string;
  unitPrice: number;
  quantity: number;
  storeName: string;
  onConfirm: (qty: number) => void;
  onCancel: () => void;
}

export function ReservationSummary({
  productName,
  productEmoji,
  unitPrice,
  quantity: initialQty,
  storeName,
  onConfirm,
  onCancel,
}: ReservationSummaryProps) {
  const [qty, setQty] = useState(initialQty);
  const total = unitPrice * qty;

  return (
    <div
      style={{
        background: "var(--color-kairo-charcoal)",
        border: "1px solid var(--color-kairo-border)",
        borderRadius: "16px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        animation: "fade-up 0.4s ease forwards",
      }}
    >
      {/* Header */}
      <div>
        <div
          style={{
            fontSize: "0.625rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-kairo-muted)",
            marginBottom: "0.5rem",
          }}
        >
          KAIRO
        </div>
        <div
          style={{
            fontSize: "1.0625rem",
            fontWeight: 500,
            color: "var(--color-kairo-offwhite)",
            lineHeight: 1.4,
          }}
        >
          You&apos;re reserving:
        </div>
      </div>

      {/* Product row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "0.875rem",
          background: "var(--color-kairo-surface)",
          border: "1px solid var(--color-kairo-border)",
          borderRadius: "10px",
        }}
      >
        <div style={{ fontSize: "2rem" }}>{productEmoji}</div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: "var(--color-kairo-offwhite)",
            }}
          >
            {qty} × {productName}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--color-kairo-subtle)",
              marginTop: "0.125rem",
            }}
          >
            {formatPrice(unitPrice)} each
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            style={{
              width: 28,
              height: 28,
              borderRadius: "6px",
              background: "var(--color-kairo-border)",
              border: "none",
              color: "var(--color-kairo-offwhite)",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-kairo-offwhite)",
              minWidth: "1.5rem",
              textAlign: "center",
            }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty(Math.min(10, qty + 1))}
            style={{
              width: 28,
              height: 28,
              borderRadius: "6px",
              background: "var(--color-kairo-border)",
              border: "none",
              color: "var(--color-kairo-offwhite)",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Summary */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <SummaryRow label="Total" value={formatPrice(total)} strong />
        <SummaryRow label="Store" value={storeName} />
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button
          className="btn-primary"
          style={{ flex: 1 }}
          onClick={() => onConfirm(qty)}
        >
          Confirm Reservation
        </button>
        <button
          className="btn-ghost"
          onClick={onCancel}
          aria-label="Cancel reservation"
        >
          Cancel
        </button>
      </div>

      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--color-kairo-muted)",
          textAlign: "center",
          margin: 0,
        }}
      >
        You can also say &ldquo;Yes&rdquo; or &ldquo;Cancel&rdquo; by voice.
      </p>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: strong ? "0.875rem" : "0.8125rem",
          fontWeight: 500,
          color: "var(--color-kairo-subtle)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: strong ? "1rem" : "0.875rem",
          fontWeight: strong ? 700 : 500,
          color: strong ? "var(--color-kairo-offwhite)" : "var(--color-kairo-subtle)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Reservation Success ────────────────────────────────────

interface ReservationSuccessProps {
  reservation: Reservation;
  onDone: () => void;
  onUpdate: (qty: number) => void;
}

export function ReservationSuccess({
  reservation,
  onDone,
  onUpdate,
}: ReservationSuccessProps) {
  const remaining = Math.max(
    0,
    Math.floor(
      (reservation.expiresAt.getTime() - Date.now()) / 60000
    )
  );

  return (
    <div
      style={{
        background: "var(--color-kairo-charcoal)",
        border: "1px solid color-mix(in srgb, var(--color-success) 25%, transparent)",
        borderRadius: "16px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        animation: "fade-up 0.5s ease forwards",
      }}
    >
      {/* Success indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "color-mix(in srgb, var(--color-success) 15%, transparent)",
            border: "1.5px solid var(--color-success)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-success)",
            fontSize: "1.1rem",
            fontWeight: 700,
          }}
        >
          ✓
        </div>
        <div>
          <div
            style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-success)",
            }}
          >
            Reservation Confirmed
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "var(--color-kairo-offwhite)",
              letterSpacing: "0.02em",
              fontFamily: "monospace",
            }}
          >
            {reservation.confirmationCode}
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        style={{
          padding: "1rem",
          background: "var(--color-kairo-surface)",
          border: "1px solid var(--color-kairo-border)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
        }}
      >
        <DetailRow label="Item" value={`${reservation.quantity} × ${reservation.productName}`} />
        <DetailRow label="Total" value={formatPrice(reservation.totalPrice)} />
        <DetailRow label="Pickup" value={`Store #${reservation.storeId.replace("store_0", "")}`} />
        <DetailRow
          label="Expires"
          value={`in ${remaining} minutes`}
          valueColor="var(--color-warning)"
        />
      </div>

      {/* Update quantity */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {[1, 2, 3].filter((n) => n !== reservation.quantity).map((n) => (
          <button
            key={n}
            className="btn-ghost"
            style={{ fontSize: "0.8125rem", padding: "0.375rem 0.875rem" }}
            onClick={() => onUpdate(n)}
          >
            Change to {n}
          </button>
        ))}
      </div>

      <button className="btn-secondary" onClick={onDone}>
        Done
      </button>
    </div>
  );
}

function DetailRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)" }}>
        {label}
      </span>
      <span
        style={{
          fontSize: "0.875rem",
          fontWeight: 600,
          color: valueColor ?? "var(--color-kairo-offwhite)",
        }}
      >
        {value}
      </span>
    </div>
  );
}
