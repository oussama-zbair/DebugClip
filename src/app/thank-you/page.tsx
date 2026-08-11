"use client";

import { Zap, Check, Copy, Shield, Mail, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const API_URL = "https://debugclip-api.debugclip.workers.dev/api/license/lookup";

export default function ThankYou() {
  const [licenseKey, setLicenseKey] = useState<string | null>(null);
  const [tier, setTier] = useState<string>("pro");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Try to get checkout_id from URL params (Creem may pass it)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkoutId = params.get("checkout_id") || params.get("session_id");
    if (checkoutId) {
      fetchKey({ checkout_id: checkoutId });
    }
  }, []);

  async function fetchKey(body: { checkout_id?: string; email?: string }) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json() as { success: boolean; key?: string; tier?: string; error?: string };
      if (data.success && data.key) {
        setLicenseKey(data.key);
        setTier(data.tier || "pro");
      } else {
        setError(data.error || "Key not found yet. It may take a minute to process.");
      }
    } catch {
      setError("Could not connect to server. Please try again.");
    }
    setLoading(false);
  }

  function handleEmailLookup() {
    if (!email.trim()) return;
    fetchKey({ email: email.trim().toLowerCase() });
  }

  function handleCopy() {
    if (!licenseKey) return;
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const tierLabel = tier === "ultimate" ? "Ultimate" : "Pro";

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-ds-indigo/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-ds-purple/8 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-lg w-full text-center"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
          style={{ background: tier === "ultimate" ? "linear-gradient(135deg, #7c3aed, #a855f7)" : "linear-gradient(135deg, #3884ff, #7c3aed)" }}
        >
          <Check size={36} className="text-white" strokeWidth={3} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-ds-blue via-ds-indigo to-ds-purple bg-clip-text text-transparent">
            DebugClip {tierLabel}
          </span>
        </h1>
        <p className="text-lg text-ds-textSub mb-8">
          Thank you for your purchase! You now have lifetime access to all {tierLabel} features.
        </p>

        {/* License key card */}
        <div className="bg-ds-surface border border-ds-border rounded-2xl p-6 mb-8 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={16} className="text-ds-indigo" />
            <span className="text-sm font-semibold text-ds-text">Your License Key</span>
          </div>

          {licenseKey ? (
            <>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-ds-bg border border-ds-indigo/30 rounded-xl px-4 py-3 font-mono text-sm text-ds-indigo tracking-wider select-all">
                  {licenseKey}
                </div>
                <button onClick={handleCopy}
                  className="px-4 py-3 rounded-xl bg-ds-indigo/10 border border-ds-indigo/30 text-ds-indigo hover:bg-ds-indigo/20 transition-colors">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-xs text-ds-success mt-2 flex items-center gap-1">
                <Check size={11} /> Key generated. A copy was also sent to your email.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs text-ds-textMuted mb-3">
                Enter the email you used to purchase to retrieve your key.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleEmailLookup()}
                  placeholder="your@email.com"
                  className="flex-1 bg-ds-bg border border-ds-border rounded-xl px-4 py-3 text-sm text-ds-text placeholder:text-ds-textMuted focus:outline-none focus:border-ds-indigo/50"
                />
                <button onClick={handleEmailLookup} disabled={loading || !email.trim()}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-50 transition-all"
                  style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>
                  {loading ? <RefreshCw size={16} className="animate-spin" /> : "Get Key"}
                </button>
              </div>
              {error && (
                <p className="text-xs text-ds-error mt-2">{error}</p>
              )}
              <p className="text-xs text-ds-textMuted mt-3">
                Your key was also sent to your email. If you just purchased, it may take a minute to arrive.
              </p>
            </>
          )}
        </div>

        {/* Steps */}
        <div className="bg-ds-surface border border-ds-border rounded-2xl p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-ds-text mb-4">How to activate:</h3>
          <div className="space-y-4">
            {[
              { num: "1", text: "Copy your license key above" },
              { num: "2", text: "Open DebugClip extension in your browser" },
              { num: "3", text: "Go to Settings and paste your key" },
              { num: "4", text: `Click Activate. ${tierLabel} features unlock instantly!` },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-lg text-xs font-bold text-white flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}>
                  {step.num}
                </span>
                <p className="text-sm text-ds-textSub">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features unlocked */}
        <div className="bg-ds-surface border border-ds-indigo/30 rounded-2xl p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-ds-text mb-3 flex items-center gap-2">
            <Shield size={14} className="text-ds-success" />
            What you have unlocked:
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {(tier === "ultimate" ? [
              "Everything in Pro",
              "AI answers in popup (BYOK)",
              "6 AI providers",
              "Syntax-highlighted responses",
              "Multi-tab capture (soon)",
              "All future Ultimate updates",
            ] : [
              "Send to 7 LLMs",
              "Auto-inject prompts",
              "Session history",
              "Smart filtering",
              "11 prompt templates",
              "All future Pro updates",
            ]).map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-ds-textSub">
                <Check size={12} className="text-ds-success shrink-0" />{f}
              </div>
            ))}
          </div>
        </div>

        {/* Support note */}
        <p className="text-xs text-ds-textMuted">
          <Mail size={12} className="inline mr-1" />
          Need help? Contact <a href="mailto:oussama.zbair9@gmail.com" className="text-ds-blue hover:underline">oussama.zbair9@gmail.com</a>
        </p>
      </motion.div>
    </main>
  );
}
