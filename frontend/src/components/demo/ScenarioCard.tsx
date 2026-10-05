import { DemoScenarioId } from "@/types";
import { LucideIcon } from "lucide-react";

interface ScenarioCardProps {
  scenario: {
    id: DemoScenarioId;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    duration: string;
    tags: string[];
  };
  activeId: DemoScenarioId;
  setActiveId: (id: DemoScenarioId) => void;
  index: number;
}

export function ScenarioCard({ scenario, activeId, setActiveId, index }: ScenarioCardProps) {
  return (
    <button
      role="tab"
      aria-selected={activeId === scenario.id}
      aria-controls={`panel-${scenario.id}`}
      id={`tab-${scenario.id}`}
      onClick={() => setActiveId(scenario.id)}
      className="scenario-card animate-fade-up"
      style={{
        animationDelay: `${0.1 + index * 0.05}s`,
        background: activeId === scenario.id ? "var(--color-kairo-surface)" : "transparent",
        border: `2px solid ${activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-border)"}`,
      }}
      onMouseEnter={(e) => {
        if (activeId !== scenario.id) {
          e.currentTarget.style.borderColor = "var(--color-signal)";
          e.currentTarget.style.background = "var(--color-signal-ghost)";
        }
      }}
      onMouseLeave={(e) => {
        if (activeId !== scenario.id) {
          e.currentTarget.style.borderColor = "var(--color-kairo-border)";
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
        <div
          style={{
            width: 40, height: 40, flexShrink: 0,
            borderRadius: "var(--radius-md)",
            background: activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-surface)",
            border: `1px solid ${activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-border)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: activeId === scenario.id ? "white" : "var(--color-pulse)",
          }}
        >
          <scenario.icon size={20} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-ink)", margin: "0 0 0.125rem" }}>
            {scenario.title}
          </h3>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-kairo-muted)", margin: 0, lineHeight: 1.4 }}>
            {scenario.subtitle}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "var(--space-sm)", borderTop: "1px solid var(--color-kairo-border)" }}>
        <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-subtle)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {scenario.duration}
        </span>
        <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
          {scenario.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "0.625rem", fontWeight: 500, padding: "0.125rem 0.5rem", background: activeId === scenario.id ? "var(--color-signal-ghost)" : "var(--color-kairo-surface)", border: `1px solid ${activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-border)"}`, borderRadius: "var(--radius-full)", color: activeId === scenario.id ? "var(--color-signal)" : "var(--color-kairo-muted)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
