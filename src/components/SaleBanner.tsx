"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SALE, isSaleActive, withSaleCode } from "@/lib/sale";

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
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
        <p className="flex-1 text-sm leading-snug text-center sm:text-left">
          {SALE.name}: {SALE.percentOff}% off DebugClip Ultimate, ${SALE.salePrice.toFixed(2)} lifetime
          (regularly ${SALE.regularPrice}). Ends {SALE.endsLabel}.
        </p>
        <a
          href={withSaleCode(SALE.ultimateUrl)}
          target="_blank"
          rel="noopener"
          className="shrink-0 px-3 py-1.5 rounded-lg bg-white text-ds-bg text-xs font-semibold hover:bg-ds-text focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blue focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
        >
          Get the deal
        </a>
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
