"use client";

import { Zap, Check, Copy, ArrowRight, Shield, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ThankYou() {
  const [copied, setCopied] = useState(false);

  // In production, the key would come from a URL param or Creem webhook
  // For now, this page just instructs the user
  const sampleKey = "DC-XXXX-XXXX-XXXX";

  function handleCopy() {
    navigator.clipboard.writeText(sampleKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
          style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}
        >
          <Check size={36} className="text-white" strokeWidth={3} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-ds-blue via-ds-indigo to-ds-purple bg-clip-text text-transparent">
            DebugClip Pro
          </span>
        </h1>
        <p className="text-lg text-ds-textSub mb-8">
          Thank you for your purchase! You now have lifetime access to all Pro features.
        </p>

        {/* License key card */}
        <div className="bg-ds-surface border border-ds-border rounded-2xl p-6 mb-8 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={16} className="text-ds-indigo" />
            <span className="text-sm font-semibold text-ds-text">Your License Key</span>
          </div>
          <p className="text-xs text-ds-textMuted mb-3">
            Check your email for the license key. Then enter it in DebugClip → Settings → License.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-ds-bg border border-ds-border rounded-xl px-4 py-3 font-mono text-sm text-ds-indigo tracking-wider">
              Check your email 📧
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-ds-surface border border-ds-border rounded-2xl p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-ds-text mb-4">How to activate:</h3>
          <div className="space-y-4">
            {[
              { num: "1", text: "Check your email for the license key (DC-XXXX-XXXX-XXXX)" },
              { num: "2", text: "Open DebugClip extension → Settings tab" },
              { num: "3", text: "Paste your key and click 'Activate'" },
              { num: "4", text: "Pro features unlock instantly — enjoy!" },
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

        {/* Pro features unlocked */}
        <div className="bg-ds-surface border border-ds-indigo/30 rounded-2xl p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-ds-text mb-3 flex items-center gap-2">
            <Shield size={14} className="text-ds-success" />
            What you&apos;ve unlocked:
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Custom prompt templates",
              "Session history",
              "Smart filtering",
              "LocalStorage snapshots",
              "Priority support",
              "All future Pro updates",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-ds-textSub">
                <Check size={12} className="text-ds-success shrink-0" />{f}
              </div>
            ))}
          </div>
        </div>

        {/* Support note */}
        <p className="text-xs text-ds-textMuted">
          <Mail size={12} className="inline mr-1" />
          Need help? Email <a href="mailto:oussamazbair9@gmail.com" className="text-ds-blue hover:underline">oussamazbair9@gmail.com</a>
        </p>
      </motion.div>
    </main>
  );
}
