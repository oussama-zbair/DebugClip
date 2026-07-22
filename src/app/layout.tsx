import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DebugSnap | AI Debugging Copilot for Chrome DevTools",
  description:
    "Stop manually copy-pasting console errors. DebugSnap captures stack traces, network failures, and exceptions — then sends them to Claude or ChatGPT as a structured prompt in one click.",
  keywords: "Chrome extension, debug tools, AI debugging, automated error capture, web development, Claude, ChatGPT, DevTools, console errors, network monitor",
  authors: [{ name: "DebugSnap" }],
  openGraph: {
    title: "DebugSnap — AI-Powered Debugging Copilot",
    description: "Capture browser errors and get AI fixes in one click.",
    url: "https://debugsnap.io",
    siteName: "DebugSnap",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@debugsnap" },
  themeColor: "#020617",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
