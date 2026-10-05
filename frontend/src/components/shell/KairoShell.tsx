"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/icons";

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
        background: "var(--color-kairo-cream)",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          borderBottom: "1px solid var(--color-kairo-border)",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <img src="/logo.png" alt="KAIRO Logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: "cover" }} />
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "-0.03em",
              color: "var(--color-kairo-ink)",
            }}
          >
            KAIRO
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {showNav && (
            <nav style={{ display: "flex", gap: "0.5rem" }}>
              <Link href="/conversation" className="btn-ghost">
                Assistant
              </Link>
              <Link href="/demo" className="btn-ghost">
                Demo
              </Link>
            </nav>
          )}
          {rightSlot}
        </div>
      </header>

      {/* Main content usually handled by children, but wrapped directly if needed */}
      {children}
    </div>
  );
}
