"use client";

import { useEffect, useRef } from "react";
import type { TranscriptEntry } from "@/types";

interface LiveTranscriptProps {
  entries: TranscriptEntry[];
  maxEntries?: number;
}

export function LiveTranscript({ entries, maxEntries = 6 }: LiveTranscriptProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const visible = entries.slice(-maxEntries);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [entries]);

  if (entries.length === 0) {
    return (
      <div
        style={{
          padding: "2rem 1rem",
          textAlign: "center",
          color: "var(--color-kairo-muted)",
          fontSize: "0.8125rem",
        }}
      >
        Conversation will appear here.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.875rem",
        overflowY: "auto",
        padding: "1rem",
        maxHeight: "320px",
      }}
      role="log"
      aria-label="Conversation transcript"
      aria-live="polite"
    >
      {visible.map((entry) => (
        <ConversationTurn key={entry.id} entry={entry} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

function ConversationTurn({ entry }: { entry: TranscriptEntry }) {
  const isUser = entry.speaker === "user";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        alignItems: isUser ? "flex-end" : "flex-start",
        animation: "fade-up 0.35s ease forwards",
      }}
    >
      <div
        style={{
          fontSize: "0.625rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: isUser ? "var(--color-kairo-muted)" : "var(--color-pulse-dim)",
          paddingInline: "0.25rem",
        }}
      >
        {isUser ? "YOU" : "KAIRO"}
      </div>
      <div
        className={isUser ? "transcript-user" : "transcript-kairo"}
        style={{
          fontSize: "0.9375rem",
          lineHeight: 1.55,
        }}
      >
        {entry.text}
      </div>
    </div>
  );
}
