import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DebugClip | Chrome Extension for AI-Powered Debugging",
  description:
    "DebugClip is a Chrome extension that captures console errors, network failures, and CSP violations from any website, then sends structured debug prompts to AI assistants like Claude, ChatGPT, or Gemini in one click. Free to install.",
  keywords: "Chrome extension, debug tools, AI debugging, browser errors, console errors, network failures, DevTools, web development",
  authors: [{ name: "DebugClip" }],
  openGraph: {
    title: "DebugClip — Chrome Extension for AI-Powered Debugging",
    description: "Capture browser errors and get AI fixes in one click. Free Chrome extension for developers.",
    url: "https://debugclip.online",
    siteName: "DebugClip",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@debugclip" },
  themeColor: "#020617",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="google-site-verification" content="smnDBzAe2xr6lPttYqeD_opsYGWIbuGlnem6zyXp2G8" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "DebugClip",
          "description": "Chrome extension that captures browser console errors, network failures, and CSP violations, then formats them into structured prompts for AI assistants.",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Chrome, Edge",
          "offers": [
            { "@type": "Offer", "price": "0", "priceCurrency": "USD", "name": "Free" },
            { "@type": "Offer", "price": "4", "priceCurrency": "USD", "name": "Pro Lifetime" },
            { "@type": "Offer", "price": "19", "priceCurrency": "USD", "name": "Ultimate Lifetime" }
          ],
          "url": "https://debugclip.online",
          "downloadUrl": "https://chromewebstore.google.com/detail/mkkbdlmfhnogenmnffaanalbbbbmcfoe",
          "softwareVersion": "0.2.2",
          "author": { "@type": "Person", "name": "Oussama Zbair" }
        })}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
