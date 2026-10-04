import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAIRO Demo — Live Product Demonstration",
  description: "Interactive hackathon demo for KAIRO real-time agentic AI voice assistant.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
