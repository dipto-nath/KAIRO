"use client";

import { VoicePoweredOrb } from "@/components/ui/voice-powered-orb";
import type { VoiceState } from "@/types";

interface VoiceCoreProps {
  state: VoiceState;
  size?: number;
  /** Audio stream from useSession for visualization */
  audioStream?: MediaStream | null;
}

// Color map per state (We'll map these colors to hue for the orb roughly)
const STATE_CONFIG: Record<
  VoiceState,
  { hue: number; label: string }
> = {
  idle: {
    hue: 0,
    label: "Ready when you are.",
  },
  listening: {
    hue: 180,
    label: "Listening...",
  },
  thinking: {
    hue: 30,
    label: "Understanding your request...",
  },
  tool_running: {
    hue: 45,
    label: "Checking live data...",
  },
  speaking: {
    hue: 190,
    label: "KAIRO is responding...",
  },
  action: {
    hue: 20,
    label: "Completing action...",
  },
  success: {
    hue: 120,
    label: "Done.",
  },
  error: {
    hue: -10,
    label: "Something went wrong.",
  },
};

export function VoiceCore({ state, size = 200, audioStream = null }: VoiceCoreProps) {
  const config = STATE_CONFIG[state];

  // Only enable voice control when listening
  const enableVoiceControl = state === "listening";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        userSelect: "none",
      }}
      role="status"
      aria-label={config.label}
    >
      <div style={{ position: "relative", width: size, height: size }}>
        <VoicePoweredOrb
          enableVoiceControl={enableVoiceControl}
          hue={config.hue}
          externalStream={audioStream}
        />
      </div>

      {/* State Label */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "1.0625rem",
            fontWeight: 500,
            color: "var(--color-kairo-offwhite)",
            letterSpacing: "-0.01em",
            transition: "color 0.3s ease",
          }}
        >
          {config.label}
        </div>
      </div>
    </div>
  );
}
