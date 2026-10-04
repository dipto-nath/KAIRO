"use client";

import Link from "next/link";
import { MOCK_STORE } from "@/data/mock";

interface KairoShellProps {
  children: React.ReactNode;
  showNav?: boolean;
  rightSlot?: React.ReactNode;
}

export function KairoShell({ children, showNav = false, rightSlot }: KairoShellProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--color-kairo-ink)",
      }}
    >
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
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
          }}
        >
          <KairoLogo size={28} />
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.0625rem",
                letterSpacing: "-0.03em",
                color: "var(--color-kairo-offwhite)",
                lineHeight: 1,
              }}
            >
              KAIRO
            </div>
            <div
              style={{
                fontSize: "0.5625rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-kairo-subtle)",
                lineHeight: 1,
                marginTop: "2px",
              }}
            >
              Real-Time Agentic AI
            </div>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {showNav && (
            <nav style={{ display: "flex", gap: "0.25rem" }}>
              {[
                { href: "/", label: "Assistant" },
                { href: "/demo", label: "Demo" },
                { href: "/control", label: "Control" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--color-kairo-subtle)",
                    textDecoration: "none",
                    padding: "0.375rem 0.75rem",
                    borderRadius: "6px",
                    transition: "all 0.15s ease",
                  }}
                  className="nav-link"
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}

          {rightSlot}

          <StoreTag />
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </main>
    </div>
  );
}

export function KairoLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KAIRO logo"
    >
      {/* Outer ring */}
      <circle cx="16" cy="16" r="14" stroke="#e8450a" strokeWidth="1.5" opacity="0.3" />
      {/* Main circle */}
      <circle cx="16" cy="16" r="10" stroke="#e8450a" strokeWidth="1.5" />
      {/* Signal path — three dots forming routing motif */}
      <circle cx="16" cy="16" r="2.5" fill="#e8450a" />
      <circle cx="9" cy="16" r="1.5" fill="#e8450a" opacity="0.6" />
      <circle cx="23" cy="16" r="1.5" fill="#e8450a" opacity="0.6" />
      {/* Connection lines */}
      <line x1="11.5" y1="16" x2="13.5" y2="16" stroke="#e8450a" strokeWidth="1" opacity="0.4" />
      <line x1="18.5" y1="16" x2="20.5" y2="16" stroke="#e8450a" strokeWidth="1" opacity="0.4" />
      {/* Vertical pulse marks */}
      <line x1="16" y1="6" x2="16" y2="9" stroke="#00b8cc" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="16" y1="23" x2="16" y2="26" stroke="#00b8cc" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function StoreTag() {
  return (
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
          background: "var(--color-success)",
          boxShadow: "0 0 6px var(--color-success)",
          flexShrink: 0,
          display: "block",
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
        Store #{MOCK_STORE.id.replace("store_0", "")} · {MOCK_STORE.name}
      </span>
    </div>
  );
}
