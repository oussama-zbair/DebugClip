"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SALE, isSaleActive } from "@/lib/sale";
import CopyCodeButton from "./CopyCodeButton";

const DISMISS_KEY = "debugclip-sale-dismissed";

export default function SaleBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Storage unavailable: treat as not dismissed.
    }
    setVisible(isSaleActive(new Date()) && !dismissed);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore: banner is hidden for this page view anyway.
    }
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={`${SALE.name} offer`}
      className="border-b border-white/10 text-white"
      style={{ background: "linear-gradient(135deg, #1e1b4b, #4c1d95)" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-start sm:items-center gap-3">
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-3 gap-y-2">
          <p className="text-sm leading-snug">
            {SALE.name}: {SALE.percentOff}% off DebugClip Ultimate, ${SALE.salePrice.toFixed(2)} lifetime
            (regularly ${SALE.regularPrice}). Ends {SALE.endsLabel}.{" "}
            <code className="ml-0.5 inline-block rounded-md border border-white/25 bg-white/10 px-1.5 py-0.5 font-mono text-xs font-semibold tracking-wide">
              {SALE.code}
            </code>
          </p>
          <div className="self-start">
            <CopyCodeButton code={SALE.code} href={SALE.ultimateUrl} label="Copy code and buy" variant="banner" />
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss offer"
          className="shrink-0 p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blue"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
