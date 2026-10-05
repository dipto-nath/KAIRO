"use client";

import { useState } from "react";
import { KairoShell } from "@/components/shell/KairoShell";
import { useDemoSession } from "@/hooks/useDemoSession";
import { DEMO_SCENARIOS, MOCK_PRODUCTS } from "@/data/mock";
import { DemoScenarioId } from "@/types";
import { ClientOnly } from "@/components/ClientOnly";
import { ScenarioCard } from "@/components/demo/ScenarioCard";
import { LiveTranscript } from "@/components/demo/LiveTranscript";
import { SCENARIO_METRICS } from "@/data/demo-metrics";
import { ProductGrid } from "@/components/products/ProductCard";
import { ReservationSummary } from "@/components/reservation/ReservationFlow";
import { 
  ArrowRightIcon, SearchIcon, PackageIcon, TicketIcon, 
  ShieldAlertIcon, PlayIcon, RotateCcwIcon, AlertTriangleIcon, 
  UserCheckIcon, CodeIcon, ChevronDownIcon, ZapIcon, 
  DatabaseIcon, WrenchIcon, ListIcon, StoreIcon, PillIcon, HeartPulseIcon
} from "lucide-react";
import Link from "next/link";

const SCENARIOS = [
  {
    id: "product_discovery" as DemoScenarioId,
    icon: SearchIcon,
    title: "Product Discovery",
    subtitle: "Natural language search with constraints",
    duration: "~8s",
    tags: ["Filtering", "Ranking", "Availability"],
  },
  {
    id: "low_stock" as DemoScenarioId,
    icon: PackageIcon,
    title: "Low Stock Alternatives",
    subtitle: "Proactive substitution when items unavailable",
    duration: "~6s",
    tags: ["Inventory", "Substitution", "Reasoning"],
  },
  {
    id: "reservation" as DemoScenarioId,
    icon: TicketIcon,
    title: "Reservation Flow",
    subtitle: "End-to-end hold with quantity confirmation",
    duration: "~10s",
    tags: ["Confirmation", "Inventory Lock", "Receipt"],
  },
  {
    id: "safety_escalation" as DemoScenarioId,
    icon: ShieldAlertIcon,
    title: "Safety Escalation",
    subtitle: "Guardrails + human handoff for medical queries",
    duration: "~7s",
    tags: ["Guardrails", "Escalation", "Compliance"],
  },
];

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 400 200" style={{ width: '100%', height: 'auto', flex: 1 }}>
      <rect x="50" y="50" width="80" height="100" rx="8" fill="var(--color-pulse-ghost)" stroke="var(--color-pulse)" strokeWidth="2" />
      <text x="90" y="105" textAnchor="middle" fill="var(--color-kairo-ink)" fontSize="14" fontWeight="600">User Input</text>
      
      <path d="M130 100 L200 100" stroke="var(--color-kairo-muted)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
      
      <rect x="200" y="20" width="150" height="160" rx="8" fill="var(--color-kairo-surface)" stroke="var(--color-signal)" strokeWidth="2" />
      <text x="275" y="45" textAnchor="middle" fill="var(--color-signal)" fontSize="14" fontWeight="600">KAIRO Core</text>
      
      <rect x="215" y="60" width="120" height="30" rx="4" fill="var(--color-kairo-cream)" />
      <text x="275" y="80" textAnchor="middle" fill="var(--color-kairo-ink)" fontSize="12">Reasoning Engine</text>
      
      <rect x="215" y="100" width="120" height="30" rx="4" fill="var(--color-kairo-cream)" />
      <text x="275" y="120" textAnchor="middle" fill="var(--color-kairo-ink)" fontSize="12">Tool Integration</text>
      
      <rect x="215" y="140" width="120" height="30" rx="4" fill="var(--color-kairo-cream)" />
      <text x="275" y="160" textAnchor="middle" fill="var(--color-kairo-ink)" fontSize="12">Safety Guardrails</text>
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-kairo-muted)" />
        </marker>
      </defs>
    </svg>
  );
}

export default function DemoPage() {
  const [activeScenarioId, setActiveScenarioId] = useState<DemoScenarioId>("product_discovery");
  const { session, isRunning, runScenario, resetSession } = useDemoSession(activeScenarioId);
  const metrics = SCENARIO_METRICS[activeScenarioId];
  const [expanded, setExpanded] = useState(false);

  return (
    <ClientOnly>
      <KairoShell showNav>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "var(--space-3xl) var(--space-xl)", width: "100%" }}>
          
          {/* Hero */}
          <header style={{ textAlign: "center", marginBottom: "var(--space-3xl)", paddingBottom: "var(--space-2xl)", borderBottom: "1px solid var(--color-kairo-border)" }}>
            <div className="animate-fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "var(--color-pulse-ghost)", border: "1px solid var(--color-pulse-light)", borderRadius: "var(--radius-full)", marginBottom: "var(--space-lg)", color: "var(--color-pulse)", fontWeight: 500, fontSize: "0.875rem" }}>
              <span className="pulse-ring" style={{ width: 8, height: 8 }} />
              <span>Interactive Demo</span>
            </div>
            <h1 className="text-display animate-fade-up" style={{ animationDelay: "0.1s", marginBottom: "var(--space-md)", color: "var(--color-kairo-ink)" }}>
              See KAIRO in Action
            </h1>
            <p className="text-body-lg animate-fade-up" style={{ animationDelay: "0.15s", maxWidth: "560px", margin: "0 auto var(--space-xl)" }}>
              Four real scenarios. Real latency. Real agentic reasoning. Pick a scenario to watch the full conversation unfold — or jump to the technical breakdown.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/conversation" className="btn-primary">
                Try It Yourself
                <ArrowRightIcon size={20} />
              </Link>
              <button onClick={() => document.getElementById("scenarios")?.scrollIntoView({ behavior: "smooth" })} className="btn-ghost">
                Watch Scenarios
              </button>
            </div>
          </header>

          {/* Scenario Selector */}
          <section id="scenarios" aria-labelledby="scenarios-heading">
            <h2 id="scenarios-heading" className="text-label animate-fade-up" style={{ marginBottom: "var(--space-lg)" }}>Choose a Scenario</h2>
            <div className="scenario-selector" role="tablist" aria-label="Demo scenarios">
              {SCENARIOS.map((scenario, i) => (
                <ScenarioCard key={scenario.id} scenario={scenario} activeId={activeScenarioId} setActiveId={(id) => { setActiveScenarioId(id); resetSession(); }} index={i} />
              ))}
            </div>
          </section>

          {/* Live Playback */}
          <section aria-labelledby="playback-heading" style={{ marginTop: "var(--space-3xl)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-lg)", flexWrap: "wrap", gap: "var(--space-md)" }}>
              <h2 id="playback-heading" className="text-heading" style={{ margin: 0 }}>Live Playback</h2>
              <div style={{ display: "flex", gap: "var(--space-sm)" }}>
                <button onClick={() => runScenario(activeScenarioId)} disabled={isRunning} className={isRunning ? "btn-ghost" : "btn-primary"} style={{ minWidth: "140px" }}>
                  {isRunning ? (
                    <><span className="pulse-ring" style={{ width: 8, height: 8, marginRight: 8 }} /> Running…</>
                  ) : (
                    <><PlayIcon size={16} /> Run Scenario</>
                  )}
                </button>
                <button onClick={resetSession} disabled={session.transcript.length === 0 && !session.products?.length} className="btn-ghost">
                  <RotateCcwIcon size={16} /> Reset
                </button>
              </div>
            </div>

            <div style={{ background: "var(--color-kairo-surface)", border: "1px solid var(--color-kairo-border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ padding: "var(--space-lg)", maxHeight: "400px", overflowY: "auto" }}>
                <LiveTranscript transcript={session.transcript} isStreaming={isRunning} className="demo-transcript" />
                {session.transcript.length === 0 && !isRunning && (
                  <div style={{ textAlign: "center", padding: "var(--space-2xl)", color: "var(--color-kairo-subtle)" }}>
                    <PlayIcon size={48} style={{ marginBottom: "var(--space-md)", opacity: 0.4 }} />
                    <p style={{ margin: 0, fontSize: "1rem" }}>Click "Run Scenario" to watch the conversation unfold</p>
                  </div>
                )}
              </div>

              {session.products && session.products.length > 0 && (
                <div style={{ borderTop: "1px solid var(--color-kairo-border)", padding: "var(--space-md) var(--space-lg) var(--space-lg)", background: "rgba(0,0,0,0.01)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-md)" }}>
                    <h3 style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-kairo-muted)", margin: 0 }}>
                      Products Found ({session.products.length})
                    </h3>
                    <span className="chip" style={{ background: "var(--color-success-ghost)", color: "var(--color-success)" }}>In Stock</span>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-md)", overflowX: "auto", paddingBottom: "var(--space-sm)" }}>
                     <ProductGrid products={session.products} inventoryMap={{}} onReserve={() => {}} />
                  </div>
                </div>
              )}

              {session.safetyState?.triggered && (
                <div style={{ borderTop: "1px solid var(--color-kairo-border)", padding: "var(--space-md) var(--space-lg)", background: "var(--color-warning-ghost)", borderLeft: "4px solid var(--color-warning)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-md)" }}>
                    <AlertTriangleIcon size={20} style={{ color: "var(--color-warning)", flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-warning-dim)", margin: "0 0 0.25rem" }}>Safety Escalation Triggered</h4>
                      <p style={{ fontSize: "0.8125rem", color: "var(--color-warning-dim)", margin: 0 }}>{session.safetyState.reason}. {session.safetyState.escalationAvailable && "Human handoff available."}</p>
                    </div>
                    {session.safetyState.escalationAvailable && (
                      <button className="btn-ghost" style={{ padding: "0.375rem 0.75rem", fontSize: "0.8125rem" }}>
                        <UserCheckIcon size={14} /> Escalate to Human
                      </button>
                    )}
                  </div>
                </div>
              )}

              {session.reservation && (
                <div style={{ borderTop: "1px solid var(--color-kairo-border)", padding: "var(--space-lg)", background: "var(--color-pulse-ghost)" }}>
                  <ReservationSummary productName={session.reservation.productName} productEmoji="🛍️" unitPrice={session.reservation.unitPrice} quantity={session.reservation.quantity} storeName={session.reservation.storeName} onConfirm={() => {}} onCancel={() => {}} />
                </div>
              )}
            </div>
          </section>

          {/* Technical Deep-Dive */}
          <section style={{ marginTop: "var(--space-3xl)" }}>
            <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-lg)", background: "var(--color-kairo-surface)", border: "1px solid var(--color-kairo-border)", borderRadius: "var(--radius-lg)", cursor: "pointer", textAlign: "left", transition: "all 0.15s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
                <CodeIcon size={20} style={{ color: "var(--color-pulse)" }} />
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-kairo-ink)", margin: 0 }}>Technical Breakdown</h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)", margin: "0.125rem 0 0" }}>Latency, token usage, tool calls & reasoning trace</p>
                </div>
              </div>
              <ChevronDownIcon size={20} style={{ color: "var(--color-kairo-muted)", transition: "transform 0.2s ease", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>

            {expanded && (
              <div style={{ marginTop: "var(--space-md)", animation: "fade-up 0.3s ease forwards" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
                  {[
                    { label: "Total Latency", value: metrics.latency, unit: "ms", icon: ZapIcon },
                    { label: "LLM Tokens", value: metrics.tokens, unit: "", icon: DatabaseIcon },
                    { label: "Tool Calls", value: metrics.tools, unit: "", icon: WrenchIcon },
                    { label: "Steps", value: metrics.steps, unit: "", icon: ListIcon },
                  ].map((m) => (
                    <div key={m.label} style={{ padding: "var(--space-md)", background: "white", border: "1px solid var(--color-kairo-border)", borderRadius: "var(--radius-md)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.25rem" }}>
                        <m.icon size={14} style={{ color: "var(--color-kairo-muted)" }} />
                        <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-kairo-muted)" }}>{m.label}</span>
                      </div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-kairo-ink)", lineHeight: 1 }}>
                        {m.value}<span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--color-kairo-muted)" }}>{m.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "var(--color-kairo-ink)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                  <div style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--color-kairo-border)" }}>
                    <h4 style={{ margin: 0, fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-kairo-subtle)" }}>Agent Reasoning Trace</h4>
                  </div>
                  <pre style={{ margin: 0, padding: "var(--space-lg)", overflowX: "auto", fontSize: "0.75rem", lineHeight: 1.6 }}>
                    <code style={{ color: "#e5e7eb" }}>{metrics.reasoningTrace}</code>
                  </pre>
                </div>
              </div>
            )}
          </section>

          {/* Architecture & Verticals */}
          <section style={{ marginTop: "var(--space-3xl)" }}>
            <header style={{ marginBottom: "var(--space-xl)" }}>
              <h2 className="text-label" style={{ marginBottom: "var(--space-md)" }}>Architecture & Extensibility</h2>
              <p className="text-body-lg" style={{ maxWidth: "560px" }}>
                KAIRO's agentic core is vertical-agnostic. The same reasoning engine powers retail, pharmacy, and healthcare — swap tools, not architecture.
              </p>
            </header>
            <div className="architecture-verticals">
              <div className="animate-fade-up">
                <div style={{ background: "var(--color-kairo-surface)", border: "1px solid var(--color-kairo-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-xl)", minHeight: "280px", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-kairo-ink)", margin: "0 0 var(--space-lg)" }}>Agentic Loop</h3>
                  <ArchitectureDiagram />
                </div>
              </div>
              {[
                { label: "Retail", active: true, items: ["Product Discovery", "Inventory Sync", "Reservation Engine", "Loyalty Integration"], icon: StoreIcon },
                { label: "Pharmacy", active: false, items: ["Drug Availability", "Pharmacist Escalation", "Interaction Checks", "Prescription Flow"], icon: PillIcon },
                { label: "Healthcare", active: false, items: ["Appointment Booking", "Wayfinding", "Clinical Handoff", "Insurance Verify"], icon: HeartPulseIcon },
              ].map((v, i) => (
                <div key={v.label} className="animate-fade-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                  <div style={{ padding: "var(--space-lg)", background: "var(--color-kairo-surface)", border: `1px solid ${v.active ? "var(--color-signal)" : "var(--color-kairo-border)"}`, borderRadius: "var(--radius-lg)", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "var(--space-md)" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: v.active ? "var(--color-signal)" : "var(--color-pulse-ghost)", display: "flex", alignItems: "center", justifyContent: "center", color: v.active ? "white" : "var(--color-pulse)" }}>
                        <v.icon size={18} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-kairo-ink)" }}>
                          {v.label} {v.active && <span className="chip" style={{ fontSize: "0.5625rem", padding: "0.0625rem 0.375rem", marginLeft: "0.375rem", background: "var(--color-signal)", color: "white" }}>LIVE</span>}
                        </h4>
                      </div>
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      {v.items.map((item) => (
                        <li key={item} style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: v.active ? "var(--color-signal)" : "var(--color-kairo-muted)", flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <footer style={{ marginTop: "var(--space-4xl)", paddingTop: "var(--space-2xl)", borderTop: "1px solid var(--color-kairo-border)", textAlign: "center" }}>
            <div style={{ maxWidth: "480px", margin: "0 auto" }}>
              <h3 className="text-heading" style={{ marginBottom: "var(--space-md)" }}>Ready to Build?</h3>
              <p className="text-body" style={{ marginBottom: "var(--space-xl)", color: "var(--color-kairo-muted)" }}>
                Start a real conversation with KAIRO. No simulation — live inventory, real reservations, actual safety guardrails.
              </p>
              <Link href="/conversation" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.0625rem" }}>
                Launch Assistant
                <ArrowRightIcon size={20} style={{ marginLeft: "0.5rem" }} />
              </Link>
              <p style={{ marginTop: "var(--space-lg)", fontSize: "0.8125rem", color: "var(--color-kairo-subtle)" }}>
                Or <Link href="/docs" style={{ color: "var(--color-pulse)", textDecoration: "underline" }}>read the docs</Link> to integrate KAIRO into your stack.
              </p>
            </div>
          </footer>
        </div>
      </KairoShell>
    </ClientOnly>
  );
}
