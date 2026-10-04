"use client";

import { useEffect, useRef } from "react";
import type { VoiceState } from "@/types";

interface VoiceCoreProps {
  state: VoiceState;
  size?: number;
}

// Color map per state
const STATE_CONFIG: Record<
  VoiceState,
  { color: string; label: string; pulseColor: string; rings: number }
> = {
  idle: {
    color: "#4a4a58",
    pulseColor: "transparent",
    label: "Ready when you are.",
    rings: 0,
  },
  listening: {
    color: "#00b8cc",
    pulseColor: "#00b8cc",
    label: "Listening...",
    rings: 2,
  },
  thinking: {
    color: "#e8450a",
    pulseColor: "#e8450a",
    label: "Understanding your request...",
    rings: 1,
  },
  tool_running: {
    color: "#f59e0b",
    pulseColor: "#f59e0b",
    label: "Checking live data...",
    rings: 1,
  },
  speaking: {
    color: "#33d4e8",
    pulseColor: "#00b8cc",
    label: "KAIRO is responding...",
    rings: 2,
  },
  action: {
    color: "#e8450a",
    pulseColor: "#e8450a",
    label: "Completing action...",
    rings: 1,
  },
  success: {
    color: "#22c55e",
    pulseColor: "#22c55e",
    label: "Done.",
    rings: 1,
  },
  error: {
    color: "#ef4444",
    pulseColor: "#ef4444",
    label: "Something went wrong.",
    rings: 0,
  },
};

export function VoiceCore({ state, size = 200 }: VoiceCoreProps) {
  const config = STATE_CONFIG[state];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const phaseRef = useRef(0);

  // Waveform animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const radius = (size / 2) * 0.82;

    const isActive = state === "listening" || state === "speaking";
    const isBusy = state === "thinking" || state === "tool_running" || state === "action";
    const isSuccess = state === "success";

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Outer decorative ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 28, 0, Math.PI * 2);
      ctx.strokeStyle = `${config.color}18`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Middle ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 14, 0, Math.PI * 2);
      ctx.strokeStyle = `${config.color}28`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (isActive) {
        // Animated waveform ring
        const segments = 120;
        const amp = 8 + Math.sin(phaseRef.current * 0.5) * 4;
        ctx.beginPath();
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2 - Math.PI / 2;
          const wave = Math.sin(i * 0.3 + phaseRef.current) * amp * Math.random() * 0.6 + amp * 0.4;
          const r = radius + wave;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      if (isBusy) {
        // Rotating arc
        ctx.beginPath();
        ctx.arc(
          cx,
          cy,
          radius + 6,
          phaseRef.current * 0.03,
          phaseRef.current * 0.03 + Math.PI * 1.3
        );
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      if (isSuccess) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius + 6, 0, Math.PI * 2);
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6 + Math.sin(phaseRef.current * 0.05) * 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Inner main circle
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, `${config.color}22`);
      gradient.addColorStop(0.7, `${config.color}0a`);
      gradient.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Main circle border
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = config.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.7;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = config.color;
      ctx.fill();

      // Tick marks (12 marks like a dial)
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const isMain = i % 3 === 0;
        const innerR = radius - (isMain ? 10 : 6);
        const outerR = radius - 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
        ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR);
        ctx.strokeStyle = config.color;
        ctx.lineWidth = isMain ? 1.5 : 0.75;
        ctx.globalAlpha = isMain ? 0.5 : 0.25;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      phaseRef.current += 1;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [state, size, config.color]);

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
      {/* Canvas-based voice ring */}
      <div style={{ position: "relative", width: size, height: size }}>
        {/* Pulse rings */}
        {config.rings > 0 && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: `1px solid ${config.pulseColor}`,
                animation: "pulse-ring 2s ease-out infinite",
                opacity: 0,
              }}
            />
            {config.rings > 1 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: `1px solid ${config.pulseColor}`,
                  animation: "pulse-ring 2s ease-out infinite 0.8s",
                  opacity: 0,
                }}
              />
            )}
          </>
        )}

        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          style={{ display: "block" }}
        />
      </div>

      {/* State Label */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "1.0625rem",
            fontWeight: 500,
            color: config.color,
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
