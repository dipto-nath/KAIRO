"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { KairoShell } from "@/components/shell/KairoShell";
import { useSession } from "@/hooks/useSession";
import { ClientOnly } from "@/components/ClientOnly";
import {
  KairoMark,
  ArrowRightIcon,
  StatusDot,
  ShieldIcon,
  ZapIcon,
  PulseRing,
} from "@/components/ui/icons";

export default function HomePage() {
  const router = useRouter();
  const { session, resetSession, startSession } = useSession();

  const handleStartConversation = async () => {
    try {
      await startSession();
      router.push("/conversation");
    } catch (error) {
      console.error("Failed to start session:", error);
    }
  };

  return (
    <ClientOnly>
      <KairoShell showNav>
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-4xl) var(--space-xl)",
            maxWidth: "720px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {session.status === "idle" ? (
            <div style={{ textAlign: "center", maxWidth: "560px" }}>
              {/* Logo mark - subtle, animated */}
              <img
                src="/logo.png"
                alt="KAIRO Logo"
                className="animate-fade-up"
                style={{
                  width: 80,
                  height: 80,
                  margin: "0 auto var(--space-xl)",
                  borderRadius: "var(--radius-lg)",
                  objectFit: "cover",
                  display: "block",
                  boxShadow: "var(--shadow-lg)",
                }}
              />

              <h1
                className="text-display animate-fade-up"
                style={{
                  animationDelay: "0.1s",
                  marginBottom: "var(--space-md)",
                  color: "var(--color-kairo-ink)",
                }}
              >
                Real-Time AI for Retail
              </h1>

              <p
                className="text-body-lg animate-fade-up"
                style={{
                  animationDelay: "0.2s",
                  marginBottom: "var(--space-2xl)",
                  maxWidth: "480px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Talk to your store. Get instant product discovery, reservations,
                and safety‑guided recommendations—powered by agentic AI that runs
                on the edge.
              </p>

              {/* Primary CTA */}
              <button
                onClick={handleStartConversation}
                className="btn-primary animate-fade-up"
                style={{
                  animationDelay: "0.3s",
                  padding: "1rem 2rem",
                  fontSize: "1.0625rem",
                }}
              >
                Start Conversation
                <ArrowRightIcon size={20} style={{ marginLeft: "0.5rem" }} />
              </button>

              {/* Trust signals - minimal */}
              <div
                className="animate-fade-up"
                style={{
                  animationDelay: "0.4s",
                  marginTop: "var(--space-2xl)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--space-xl)",
                  color: "var(--color-kairo-muted)",
                  fontSize: "0.875rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <StatusDot status="online" size={6} />
                  <span>Live at Store #042</span>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "1.25rem",
                    background: "var(--color-kairo-border)",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <ShieldIcon size={14} />
                  <span>Safety‑first</span>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "1.25rem",
                    background: "var(--color-kairo-border)",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <ZapIcon size={14} />
                  <span>Sub‑second latency</span>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", maxWidth: "560px" }}>
              <div
                className="animate-fade-up"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: "var(--color-pulse-ghost)",
                  border: "1px solid var(--color-pulse-light)",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "var(--space-lg)",
                  color: "var(--color-pulse)",
                }}
              >
                <PulseRing size={8} />
                <span style={{ fontWeight: 500 }}>Session active</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.125rem 0.5rem",
                    background: "var(--color-pulse)",
                    color: "white",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  {session.products.length} products
                </span>
              </div>

              <h1
                className="text-heading animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Continue where you left off
              </h1>

              <p
                className="text-body animate-fade-up"
                style={{
                  animationDelay: "0.15s",
                  marginBottom: "var(--space-xl)",
                  color: "var(--color-kairo-muted)",
                }}
              >
                Your conversation is waiting. Pick up right where you left off.
              </p>

              <Link
                href="/conversation"
                className="btn-primary animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Open Conversation
                <ArrowRightIcon size={20} style={{ marginLeft: "0.5rem" }} />
              </Link>

              <div style={{ marginTop: "var(--space-lg)" }}>
                <button
                  onClick={resetSession}
                  className="btn-ghost"
                >
                  Start Fresh
                </button>
              </div>
            </div>
          )}
        </main>
        
        {/* Footer */}
        <footer
          style={{
            padding: "var(--space-xl) var(--space-xl)",
            borderTop: "1px solid var(--color-kairo-border)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-kairo-subtle)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            KAIRO · Real-Time Agentic AI for Retail ·{" "}
            <a
              href="/privacy"
              style={{
                color: "var(--color-kairo-muted)",
                textDecoration: "underline",
              }}
            >
              Privacy
            </a>{" "}
            ·{" "}
            <a
              href="/terms"
              style={{
                color: "var(--color-kairo-muted)",
                textDecoration: "underline",
              }}
            >
              Terms
            </a>
          </p>
        </footer>
      </KairoShell>
    </ClientOnly>
  );
}
