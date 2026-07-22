import type { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | DebugSnap",
  defaultTitle: "DebugSnap | AI Debugging Copilot for Chrome DevTools",
  description:
    "Stop manually copy-pasting console errors. DebugSnap automatically captures stack traces, network failures, and unhandled exceptions — then sends them to Claude or ChatGPT as a structured prompt in one click.",
  canonical: "https://debugsnap.io",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://debugsnap.io",
    siteName: "DebugSnap",
    title: "DebugSnap — AI-Powered Debugging Copilot",
    description:
      "Capture browser errors, compile AI-ready prompts, and get instant fixes. The Chrome extension every developer needs.",
    images: [
      {
        url: "https://debugsnap.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "DebugSnap — AI Debugging Copilot",
      },
    ],
  },
  twitter: {
    handle: "@debugsnap",
    site: "@debugsnap",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "keywords", content: "Chrome extension, debug tools, AI debugging, automated error capture, web development, Claude integration, ChatGPT debugging, network monitor, console errors, stack trace, developer tools, DevTools extension" },
    { name: "author", content: "DebugSnap" },
    { name: "theme-color", content: "#020617" },
  ],
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/icon-192.png", sizes: "192x192" },
  ],
};

export default SEO;
