import { TranscriptEntry } from "@/types";

interface LiveTranscriptProps {
  transcript: TranscriptEntry[];
  isStreaming?: boolean;
  className?: string;
}

export function LiveTranscript({ transcript, isStreaming, className }: LiveTranscriptProps) {
  return (
    <div className={className} aria-live="polite">
      {transcript.map((entry, i) => (
        <div key={i} style={{
          display: "flex",
          gap: "var(--space-md)",
          marginBottom: "var(--space-md)",
          padding: "var(--space-sm)",
          background: entry.speaker === "user" ? "var(--color-kairo-surface)" : "transparent",
          borderRadius: "var(--radius-md)"
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: entry.speaker === "user" ? "var(--color-kairo-border)" : "var(--color-pulse-ghost)",
            color: entry.speaker === "user" ? "var(--color-kairo-ink)" : "var(--color-pulse)",
            fontWeight: 600, fontSize: "0.75rem", flexShrink: 0
          }}>
            {entry.speaker === "user" ? "U" : "K"}
          </div>
          <div style={{ flex: 1, paddingTop: "0.25rem" }}>
            <div style={{ fontWeight: 600, fontSize: "0.75rem", color: "var(--color-kairo-muted)", marginBottom: "0.125rem" }}>
              {entry.speaker === "user" ? "User" : "KAIRO"}
            </div>
            <p style={{ margin: 0, color: "var(--color-kairo-ink)" }}>{entry.text}</p>
          </div>
        </div>
      ))}
      {isStreaming && (
        <div style={{ display: "flex", gap: "var(--space-md)", padding: "var(--space-sm)" }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "var(--color-pulse-ghost)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>
            <span className="pulse-ring" />
          </div>
          <div style={{ paddingTop: "0.25rem" }}>
            <div style={{ width: 40, height: 12, background: "var(--color-kairo-border)", borderRadius: "var(--radius-sm)", opacity: 0.5 }} />
          </div>
        </div>
      )}
    </div>
  );
}
