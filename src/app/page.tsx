"use client";

import { Zap, Chrome, Shield, Code2, Globe, Cpu, ArrowRight, Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const CHROME_STORE_URL = "https://chrome.google.com/webstore/detail/debugclip/YOUR_EXTENSION_ID";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GitHubBanner />
      <Hero />
      <Problem />
      <BeforeAfter />
      <WhatWeCaptureSection />
      <Features />
      <HowItWorks />
      <Demo />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

// ═══════════════════════════════════════════════════════════════
// GITHUB STAR BANNER
// ═══════════════════════════════════════════════════════════════
function GitHubBanner() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-ds-bg/80 border-b border-ds-border/50">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Left: brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>
            <Zap size={12} className="text-white" fill="white" />
          </div>
          <span className="text-sm font-semibold text-ds-text hidden sm:inline">DebugClip</span>
        </div>

        {/* Center: message */}
        <p className="text-xs sm:text-sm text-ds-textSub hidden md:block">
          Open source landing page — <span className="text-ds-text font-medium">give it a ⭐ if it helps you debug faster</span>
        </p>

        {/* Right: GitHub star button */}
        <a
          href="https://github.com/oussama-zbair/debugclip"
          target="_blank"
          rel="noopener"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ds-border bg-ds-surface hover:border-ds-indigo/50 hover:bg-ds-raised/80 transition-all duration-200"
        >
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-ds-textSub group-hover:text-ds-text transition-colors">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span className="text-xs font-medium text-ds-textSub group-hover:text-ds-text transition-colors">Star on GitHub</span>
          <Star size={12} className="text-yellow-400 group-hover:scale-125 transition-transform" fill="currentColor" />
        </a>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-ds-indigo/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-ds-blue/8 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ds-surface border border-ds-border text-sm text-ds-textSub">
            <Zap size={14} className="text-ds-blue" />
            Chrome extension for developers — install in 10 seconds
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Capture errors.{" "}
          <span className="gradient-text">Ask AI. Get fixes.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-ds-textSub max-w-2xl mx-auto mb-10 leading-relaxed">
          DebugClip catches console errors, failed network requests, and CSP violations
          from any tab — then formats them into a clean, structured prompt you can
          paste into Claude or ChatGPT. No more manual copy-pasting from DevTools.
        </motion.p>

        {/* How it works in one line */}
        <motion.div {...fadeUp} transition={{ delay: 0.25, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10 text-sm text-ds-textSub">
          <span className="px-3 py-1.5 rounded-lg bg-ds-surface border border-ds-border">📥 Captures errors</span>
          <ArrowRight size={14} className="text-ds-textMuted" />
          <span className="px-3 py-1.5 rounded-lg bg-ds-surface border border-ds-border">📝 Builds prompt</span>
          <ArrowRight size={14} className="text-ds-textMuted" />
          <span className="px-3 py-1.5 rounded-lg bg-ds-surface border border-ds-border">🚀 Send to AI</span>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener" className="btn-primary">
            <Chrome size={18} />
            Add to Chrome — Free
          </a>
          <a href="#demo" className="btn-ghost">
            ▶ Watch Demo
          </a>
          <a href="#how-it-works" className="btn-ghost">
            How it works
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5 text-sm text-ds-textMuted">
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-ds-success" /> 100% local — no data leaves your browser
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Globe size={14} className="text-ds-blue" /> Works on any website
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Zap size={14} className="text-ds-purple" /> Free forever — Pro for $4
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// THE PROBLEM
// ═══════════════════════════════════════════════════════════════
function Problem() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          The Problem with Manual Debugging
        </h2>
        <p className="text-lg text-ds-textSub max-w-2xl mx-auto">
          Every developer knows the pain. You see an error, open DevTools, copy the
          message, switch to ChatGPT, paste it, add context manually, wait, switch back.
          Repeat 50 times a day.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: "😩", title: "Context switching kills flow", desc: "Jumping between DevTools, your editor, and an AI chat breaks your concentration and wastes minutes every cycle." },
          { icon: "📋", title: "Copy-paste loses context", desc: "Raw error messages without headers, request bodies, or stack traces give AI incomplete information — leading to useless answers." },
          { icon: "⏱️", title: "Manual formatting is tedious", desc: "Structuring error data into a good prompt takes effort. Most developers don't bother, so the AI gives generic responses." },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.6 }}
            className="card text-center">
            <span className="text-4xl mb-4 block">{item.icon}</span>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-ds-textSub leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// WHAT WE CAPTURE — detailed visual grid
// ═══════════════════════════════════════════════════════════════
function WhatWeCaptureSection() {
  const captures = [
    { category: "Console", color: "text-ds-error", bg: "bg-red-500/10", items: [
      { label: "console.error()", desc: "Every error logged by your code or libraries" },
      { label: "console.warn()", desc: "Deprecation notices, misconfigurations" },
      { label: "Uncaught TypeError", desc: "Accessing properties on null/undefined" },
      { label: "Unhandled Promise Rejections", desc: "Async failures without .catch()" },
    ]},
    { category: "Network", color: "text-ds-blue", bg: "bg-blue-500/10", items: [
      { label: "fetch() → 4xx/5xx", desc: "API calls returning error responses" },
      { label: "fetch() → Network Error", desc: "DNS failures, timeouts, CORS blocks" },
      { label: "XMLHttpRequest failures", desc: "Legacy AJAX calls that fail" },
      { label: "Resource load failures", desc: "Broken images, scripts, stylesheets (404/DNS)" },
    ]},
    { category: "Security & Browser", color: "text-ds-purple", bg: "bg-purple-500/10", items: [
      { label: "CSP violations", desc: "Blocked inline scripts, fonts, styles" },
      { label: "Mixed content warnings", desc: "HTTP resources on HTTPS pages" },
      { label: "CORS errors", desc: "Cross-origin blocks with full details" },
      { label: "Deprecated API warnings", desc: "Browser deprecation notices" },
    ]},
  ];

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto" id="captures">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Everything DevTools shows. <span className="gradient-text">Without opening DevTools.</span>
        </h2>
        <p className="text-lg text-ds-textSub max-w-2xl mx-auto">
          DebugClip captures the same errors, warnings, and network failures you see in Chrome DevTools — 
          but presents them in a clean dashboard with one-click AI analysis.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {captures.map((cat, ci) => (
          <motion.div key={ci} {...fadeUp} transition={{ delay: ci * 0.1, duration: 0.5 }}
            className="card space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${cat.bg} ring-2 ring-current ${cat.color}`} />
              <h3 className={`text-lg font-bold ${cat.color}`}>{cat.category}</h3>
            </div>
            <div className="space-y-3">
              {cat.items.map((item, i) => (
                <div key={i} className="group">
                  <code className="text-sm font-mono text-ds-text block mb-0.5 group-hover:text-ds-blue transition-colors">
                    {item.label}
                  </code>
                  <p className="text-xs text-ds-textMuted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stat bar */}
      <motion.div {...fadeUp} transition={{ delay: 0.3 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
        {[
          { num: "12+", label: "Error types captured" },
          { num: "0ms", label: "Performance overhead" },
          { num: "100%", label: "Local processing" },
        ].map((s, i) => (
          <div key={i}>
            <p className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.num}</p>
            <p className="text-sm text-ds-textMuted mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// BEFORE vs AFTER — the pain vs the solution
// ═══════════════════════════════════════════════════════════════
function BeforeAfter() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          The old way vs. the <span className="gradient-text">DebugClip way</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* BEFORE */}
        <motion.div {...fadeUp} className="card border-red-500/20 bg-red-500/[0.02]">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-ds-error font-bold text-sm">✗</span>
            <h3 className="text-lg font-bold text-ds-error">Without DebugClip</h3>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", text: "See error in console → squint at 200-line stack trace" },
              { step: "2", text: "Open ChatGPT in a new tab" },
              { step: "3", text: "Go back to DevTools, copy the error message" },
              { step: "4", text: "Paste it into ChatGPT — no stack trace, no context" },
              { step: "5", text: "AI gives you a generic 'maybe try this' response" },
              { step: "6", text: "Go back to DevTools, copy more context (headers, body...)" },
              { step: "7", text: "Paste again, re-explain the problem" },
              { step: "8", text: "Repeat for each error — lose 5-10 min per bug" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xs font-bold text-ds-error/60 bg-red-500/10 w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                <p className="text-sm text-ds-textSub leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-red-500/10">
            <p className="text-sm text-ds-textMuted">⏱️ <span className="text-ds-error font-semibold">5–10 minutes</span> per error. 50+ errors/day = hours wasted.</p>
          </div>
        </motion.div>

        {/* AFTER */}
        <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="card border-ds-indigo/30 bg-ds-indigo/[0.02]">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>✓</span>
            <h3 className="text-lg font-bold gradient-text">With DebugClip</h3>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", text: "Browse your app — DebugClip runs silently in the background" },
              { step: "2", text: "See the badge count: '3 errors detected'" },
              { step: "3", text: "Click DebugClip — all errors + network failures in one view" },
              { step: "4", text: "Click 'Send to Claude' — structured Markdown prompt compiled" },
              { step: "5", text: "AI gets full stack trace, headers, request body, status code" },
              { step: "6", text: "Get a specific, actionable fix — not a generic answer" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xs font-bold text-white w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>{item.step}</span>
                <p className="text-sm text-ds-textSub leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-ds-indigo/10">
            <p className="text-sm text-ds-textMuted">⚡ <span className="gradient-text font-semibold">Under 10 seconds</span> from error → AI explanation. Zero context switching.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// ═══════════════════════════════════════════════════════════════
// FEATURES
// ═══════════════════════════════════════════════════════════════
function Features() {
  const features = [
    { icon: <Zap size={24} />, title: "One-Click Capture", desc: "Console errors, warnings, unhandled rejections, failed fetch/XHR — all captured automatically without opening DevTools." },
    { icon: <Code2 size={24} />, title: "Structured AI Prompts", desc: "Errors compiled into token-dense Markdown with stack traces, request/response payloads, and headers — optimized for LLMs." },
    { icon: <Globe size={24} />, title: "Works Everywhere", desc: "Localhost, staging, production — any website. No configuration required. Just install and it works." },
    { icon: <Shield size={24} />, title: "Privacy-First", desc: "All processing happens locally in your browser. No data is ever sent to DebugClip servers. BYOK model for API keys." },
    { icon: <Cpu size={24} />, title: "Claude & ChatGPT", desc: "Send your debug context to Claude or ChatGPT with one click. Auto-injection into the LLM input field (Pro)." },
    { icon: <Chrome size={24} />, title: "Native Chrome Extension", desc: "Manifest V3 compliant. Minimal permissions. Runs in the background with zero performance overhead." },
  ];

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto" id="features">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Everything you need to <span className="gradient-text">debug faster</span>
        </h2>
        <p className="text-lg text-ds-textSub">Built by developers, for developers.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }}
            className="card group hover:border-ds-indigo/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-ds-indigo/10 flex items-center justify-center text-ds-blue mb-4 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-base font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-ds-textSub leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// HOW IT WORKS
// ═══════════════════════════════════════════════════════════════
function HowItWorks() {
  const steps = [
    { num: "1", title: "Browse any page", desc: "DebugClip runs silently in the background. No setup needed." },
    { num: "2", title: "Errors are captured", desc: "Console errors, failed API calls, and unhandled exceptions are intercepted automatically." },
    { num: "3", title: "Click DebugClip", desc: "Open the extension popup to see all captured telemetry in a beautiful dashboard." },
    { num: "4", title: "Send to AI", desc: "Select errors, preview the structured prompt, and send to Claude or ChatGPT in one click." },
  ];

  return (
    <section className="px-6 py-24 max-w-4xl mx-auto" id="how-it-works">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
        <p className="text-lg text-ds-textSub">Four steps. Zero configuration.</p>
      </motion.div>

      <div className="space-y-8">
        {steps.map((s, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-bold text-lg text-white"
              style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>
              {s.num}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
              <p className="text-ds-textSub">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// DEMO SECTION
// ═══════════════════════════════════════════════════════════════
function Demo() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto" id="demo">
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">See it in action</h2>
        <p className="text-lg text-ds-textSub">Watch DebugClip capture real errors and compile an AI-ready prompt.</p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ delay: 0.2 }}
        className="relative rounded-2xl border border-ds-border overflow-hidden glow-ring">
        <video
          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          poster="/demo-poster.jpg"
        />
      </motion.div>

      <motion.p {...fadeUp} transition={{ delay: 0.3 }}
        className="text-center text-sm text-ds-textMuted mt-4">
        Live recording — no edits, no simulations. This is DebugClip capturing real errors on real websites.
      </motion.p>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PRICING
// ═══════════════════════════════════════════════════════════════
function Pricing() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto" id="pricing">
      <motion.div {...fadeUp} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for developers. Priced like it.</h2>
        <p className="text-lg text-ds-textSub max-w-xl mx-auto">
          No subscriptions. No hidden fees. Pay once, use forever.
          We believe good dev tools should be accessible to everyone.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Free */}
        <motion.div {...fadeUp} className="card">
          <h3 className="text-xl font-bold mb-1">Free</h3>
          <p className="text-3xl font-extrabold mb-1">$0</p>
          <p className="text-sm text-ds-textMuted mb-5">Forever — no limits</p>
          <ul className="space-y-2.5 mb-6">
            {["Full error & network capture", "Structured AI prompt compiler", "Copy prompt to clipboard", "Claude & ChatGPT support", "Unlimited usage", "Badge error counter"].map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ds-textSub">
                <Check size={16} className="text-ds-success shrink-0 mt-0.5" />{f}
              </li>
            ))}
          </ul>
          <a href={CHROME_STORE_URL} className="btn-ghost w-full text-center">Install Free</a>
        </motion.div>

        {/* Pro */}
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}
          className="card border-ds-indigo/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-xl"
            style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)", color: "white" }}>
            BEST VALUE
          </div>
          <h3 className="text-xl font-bold mb-1">Pro</h3>
          <p className="text-3xl font-extrabold mb-1">$4</p>
          <p className="text-sm text-ds-textMuted mb-5">One-time — lifetime access</p>
          <ul className="space-y-2.5 mb-6">
            {["Everything in Free", "Auto-inject prompt into LLM tab", "Custom prompt templates", "Session history across pages", "LocalStorage snapshot capture", "Priority support & updates"].map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ds-textSub">
                <Check size={16} className="text-ds-blue shrink-0 mt-0.5" />{f}
              </li>
            ))}
          </ul>
          <a href={CHROME_STORE_URL} className="btn-primary w-full text-center">Get Pro — $4</a>
          <p className="text-xs text-ds-textMuted text-center mt-3">Less than a coffee. Saves hours every week.</p>
        </motion.div>

        {/* Support / Donate */}
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}
          className="card border-yellow-500/20 bg-yellow-500/[0.02] flex flex-col">
          <h3 className="text-xl font-bold mb-1">Support the Project</h3>
          <p className="text-3xl font-extrabold mb-1">$1+</p>
          <p className="text-sm text-ds-textMuted mb-5">Buy me a coffee ☕</p>
          <p className="text-sm text-ds-textSub leading-relaxed mb-6 flex-1">
            DebugClip is built by an indie developer. Your donations fund new features,
            and keep the project alive and growing. Every dollar helps.
          </p>
          <ul className="space-y-2.5 mb-6">
            {["Fund future features & updates", "Support indie open-source dev", "Get mentioned in release notes", "Good karma ✨"].map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ds-textSub">
                <Check size={16} className="text-yellow-400 shrink-0 mt-0.5" />{f}
              </li>
            ))}
          </ul>
          <p className="text-xs text-ds-textMuted mb-3 text-center">Pick an amount — every dollar counts:</p>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {["$1", "$3", "$5"].map((amt) => (
              <a key={amt} href={`https://paypal.me/oussamazbair9/${amt.slice(1)}`} target="_blank" rel="noopener"
                className="flex items-center justify-center py-2 rounded-lg text-sm font-bold text-white bg-[#0070ba] hover:bg-[#003087] transition-all hover:-translate-y-0.5">
                {amt}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <a href="https://paypal.me/oussamazbair9" target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0070ba] hover:bg-[#003087] transition-all hover:-translate-y-0.5">
              💙 PayPal (custom)
            </a>
            <a href="https://buymeacoffee.com/oussamazbair" target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2.5 rounded-xl text-xs font-semibold text-ds-bg bg-yellow-400 hover:bg-yellow-300 transition-all hover:-translate-y-0.5">
              ☕ Coffee ($5+)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════════
function FAQ() {
  const faqs = [
    { q: "Does DebugClip send my error data to external servers?", a: "No. All error capture and prompt compilation happens locally in your browser. The only optional network call is license key validation for Pro users. Your page data never leaves your machine." },
    { q: "How do I fix 'TypeError: Cannot read properties of undefined'?", a: "This common React/JS error means you're accessing a property on a null or undefined value. DebugClip captures the full stack trace showing exactly which line and variable caused it — then sends that context to Claude/ChatGPT for an instant explanation and fix." },
    { q: "Does it work on localhost?", a: "Yes. DebugClip works on any website — localhost, staging servers, production apps, even file:// URLs (with permission). No configuration needed." },
    { q: "How do I fix 'CORS error' or 'net::ERR_FAILED'?", a: "Network errors are captured with full request/response details including headers and status codes. DebugClip formats this into a prompt that gives the AI enough context to diagnose your CORS configuration or network issue immediately." },
    { q: "What LLMs are supported?", a: "Currently Claude (claude.ai) and ChatGPT (chatgpt.com). The free tier lets you copy prompts to any AI. The Pro tier auto-injects prompts directly into Claude or ChatGPT's input field." },
    { q: "Is my API key safe?", a: "API keys are stored locally in chrome.storage.local on your device only. They are never transmitted to DebugClip servers — only directly to the LLM provider you choose (Anthropic or OpenAI)." },
    { q: "How do I fix '404 Not Found' API errors?", a: "DebugClip captures the full URL, request method, headers, and response body of failed API calls. The compiled prompt includes all this context so the AI can tell you exactly why your endpoint is returning 404." },
  ];

  return (
    <section className="px-6 py-24 max-w-3xl mx-auto" id="faq">
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently asked questions</h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <motion.details key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.4 }}
            className="card group cursor-pointer">
            <summary className="flex items-center justify-between font-medium text-ds-text list-none">
              {f.q}
              <ArrowRight size={16} className="text-ds-textMuted group-open:rotate-90 transition-transform shrink-0 ml-4" />
            </summary>
            <p className="mt-3 text-sm text-ds-textSub leading-relaxed">{f.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FINAL CTA
// ═══════════════════════════════════════════════════════════════
function CTA() {
  return (
    <section className="px-6 py-24">
      <motion.div {...fadeUp}
        className="max-w-3xl mx-auto text-center rounded-3xl p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(56,132,255,0.1), rgba(124,58,237,0.1))" }}>
        <div className="absolute inset-0 border border-ds-indigo/20 rounded-3xl pointer-events-none" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop wasting time on manual debugging
        </h2>
        <p className="text-lg text-ds-textSub mb-8 max-w-lg mx-auto">
          Join thousands of developers who debug faster with AI.
          Install DebugClip in 10 seconds.
        </p>
        <a href={CHROME_STORE_URL} target="_blank" rel="noopener" className="btn-primary">
          <Chrome size={18} />
          Add to Chrome — It&apos;s Free
        </a>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-ds-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <span className="font-bold text-ds-text">DebugClip</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-ds-textMuted">
          <a href="/privacy/" className="hover:text-ds-text transition-colors">Privacy Policy</a>
          <a href="mailto:support@debugclip.io" className="hover:text-ds-text transition-colors">Support</a>
          <a href="https://twitter.com/debugclip" target="_blank" rel="noopener" className="hover:text-ds-text transition-colors">Twitter</a>
        </div>
        <p className="text-sm text-ds-textMuted">© 2025 DebugClip. All rights reserved.</p>
      </div>
    </footer>
  );
}
