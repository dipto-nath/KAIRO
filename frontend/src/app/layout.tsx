import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAIRO — Real-Time Agentic AI Voice Assistant",
  description:
    "Talk naturally. Get things done. KAIRO is a real-time, voice-first agentic AI service assistant.",
  keywords: ["voice AI", "agentic AI", "convenience store", "real-time assistant"],
  openGraph: {
    title: "KAIRO",
    description: "Talk naturally. Get things done.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
