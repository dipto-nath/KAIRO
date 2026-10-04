"use client";

import { useRef, useEffect } from "react";
import type { VoiceState } from "@/types";

interface WaveformBarProps {
  state: VoiceState;
  barCount?: number;
  height?: number;
  width?: number;
}

export function WaveformBars({
  state,
  barCount = 32,
  height = 48,
  width = 240,
}: WaveformBarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const phaseRef = useRef(0);

  const isActive = state === "listening" || state === "speaking";
  const isBusy = state === "thinking" || state === "tool_running" || state === "action";

  const activeColor =
    state === "listening"
      ? "var(--color-pulse)"
      : state === "speaking"
      ? "var(--color-pulse-light)"
      : state === "thinking" || state === "tool_running" || state === "action"
      ? "var(--color-signal)"
      : state === "success"
      ? "var(--color-success)"
      : state === "error"
      ? "var(--color-error)"
      : "var(--color-kairo-muted)";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const barW = W / barCount - 2;
    const gap = 2;

    function getColor(): string {
      // Resolve CSS var to an actual color string we can use in canvas
      // Use a lookup since CSS vars are resolved per-element
      const map: Record<VoiceState, string> = {
        idle: "#4a4a58",
        listening: "#00b8cc",
        thinking: "#e8450a",
        tool_running: "#f59e0b",
        speaking: "#33d4e8",
        action: "#e8450a",
        success: "#22c55e",
        error: "#ef4444",
      };
      return map[state];
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      const color = getColor();
      const alpha = isActive ? 0.85 : isBusy ? 0.6 : 0.25;

      for (let i = 0; i < barCount; i++) {
        let barHeight: number;

        if (isActive) {
          const wave1 = Math.sin(i * 0.4 + phaseRef.current * 0.08) * 0.5;
          const wave2 = Math.sin(i * 0.9 + phaseRef.current * 0.12) * 0.3;
          const rand = (Math.random() - 0.5) * 0.2;
          barHeight = H * (0.15 + (wave1 + wave2 + rand + 1) * 0.35);
        } else if (isBusy) {
          const wave = Math.sin(i * 0.5 + phaseRef.current * 0.05) * 0.5 + 0.5;
          barHeight = H * (0.1 + wave * 0.3);
        } else {
          barHeight = H * (0.08 + Math.sin(i * 0.6) * 0.04);
        }

        const x = i * (barW + gap);
        const y = (H - barHeight) / 2;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, barHeight, barW / 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      phaseRef.current += 1;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [state, barCount, isActive, isBusy]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ display: "block" }}
      />
    </div>
  );
}
