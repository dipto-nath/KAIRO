"use client";

import type { Product, InventoryItem } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  inventory?: InventoryItem;
  onReserve?: (product: Product) => void;
  onSelect?: (product: Product) => void;
  compact?: boolean;
}

export function ProductCard({
  product,
  inventory,
  onReserve,
  onSelect,
  compact = false,
}: ProductCardProps) {
  const invStatus = inventory?.status ?? "available";
  const qty = inventory?.quantity ?? 0;

  const invColor =
    invStatus === "available"
      ? "var(--color-success)"
      : invStatus === "low_stock"
      ? "var(--color-warning)"
      : "var(--color-error)";

  const invLabel =
    invStatus === "out_of_stock"
      ? "Unavailable"
      : invStatus === "low_stock"
      ? `${qty} left`
      : `${qty} available`;

  return (
    <div
      style={{
        background: "var(--color-kairo-charcoal)",
        border: `1px solid ${product.isRecommended ? "color-mix(in srgb, var(--color-signal) 35%, transparent)" : "var(--color-kairo-border)"}`,
        borderRadius: "12px",
        padding: compact ? "0.875rem" : "1.125rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.625rem",
        position: "relative",
        cursor: onSelect ? "pointer" : "default",
        transition: "border-color 0.15s ease, transform 0.15s ease",
        animation: "fade-up 0.4s ease forwards",
      }}
      onClick={() => onSelect?.(product)}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.(product)}
    >
      {/* Recommended badge */}
      {product.isRecommended && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "1rem",
            background: "var(--color-signal)",
            color: "white",
            fontSize: "0.5625rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.125rem 0.5rem",
            borderRadius: "0 0 4px 4px",
          }}
        >
          Best Match
        </div>
      )}

      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
          marginTop: product.isRecommended ? "0.5rem" : 0,
        }}
      >
        {/* Emoji image placeholder */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "10px",
            background: "var(--color-kairo-surface)",
            border: "1px solid var(--color-kairo-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            flexShrink: 0,
          }}
        >
          {product.imageEmoji}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: "var(--color-kairo-offwhite)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </div>
          {!compact && (
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--color-kairo-subtle)",
                marginTop: "0.125rem",
                lineHeight: 1.4,
              }}
            >
              {product.description}
            </div>
          )}
        </div>

        <div
          style={{
            fontSize: "1.0625rem",
            fontWeight: 700,
            color: "var(--color-kairo-offwhite)",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          {formatPrice(product.price)}
        </div>
      </div>

      {/* Attributes */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
        {product.attributes.slice(0, 3).map((attr) => (
          <span
            key={attr}
            style={{
              padding: "0.125rem 0.5rem",
              background: "var(--color-kairo-surface)",
              border: "1px solid var(--color-kairo-border)",
              borderRadius: "4px",
              fontSize: "0.6875rem",
              fontWeight: 500,
              color: "var(--color-kairo-subtle)",
            }}
          >
            {attr}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          paddingTop: "0.25rem",
          borderTop: "1px solid var(--color-kairo-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.125rem",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: invColor,
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: invColor,
                display: "inline-block",
              }}
            />
            {invLabel}
          </span>
          <span
            style={{
              fontSize: "0.6875rem",
              color: "var(--color-kairo-muted)",
            }}
          >
            {product.section} · {product.aisle}
          </span>
        </div>

        {onReserve && invStatus !== "out_of_stock" && (
          <button
            className="btn-primary"
            style={{ padding: "0.375rem 1rem", fontSize: "0.8125rem", minHeight: 36 }}
            onClick={(e) => {
              e.stopPropagation();
              onReserve(product);
            }}
          >
            Reserve
          </button>
        )}
      </div>

      {/* Match reasons (recommended only) */}
      {product.isRecommended && product.matchReasons && !compact && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25rem",
            paddingTop: "0.25rem",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              color: "var(--color-signal)",
              fontWeight: 600,
            }}
          >
            Why this matches:
          </span>
          {product.matchReasons.map((r) => (
            <span
              key={r}
              style={{
                fontSize: "0.6875rem",
                color: "var(--color-kairo-subtle)",
              }}
            >
              · {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

interface ProductGridProps {
  products: Product[];
  inventoryMap?: Record<string, InventoryItem>;
  onReserve?: (product: Product) => void;
  onSelect?: (product: Product) => void;
}

export function ProductGrid({
  products,
  inventoryMap = {},
  onReserve,
  onSelect,
}: ProductGridProps) {
  if (products.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inventory={inventoryMap[product.id]}
          onReserve={onReserve}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
