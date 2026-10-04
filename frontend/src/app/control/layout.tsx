import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAIRO Control — Agent Console",
  description: "Real-time agent console showing tool execution, state machine, and system status.",
};

export default function ControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
