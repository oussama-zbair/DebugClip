"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Check, Copy } from "lucide-react";

type Variant = "banner" | "card";
type Status = "idle" | "copied" | "failed";

interface Props {
  /** Discount code placed on the clipboard. */
  code: string;
  /** Checkout URL (must not contain the code). */
  href: string;
  /** Idle button text. */
  label: string;
  /** "banner": compact white pill. "card": full width gradient button. */
  variant?: Variant;
}

const REDIRECT_DELAY_MS = 900;

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fall through to the legacy path.
  }
  let area: HTMLTextAreaElement | null = null;
  try {
    area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.setAttribute("aria-hidden", "true");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.left = "-9999px";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    area.setSelectionRange(0, text.length);
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    if (area && area.parentNode) area.parentNode.removeChild(area);
  }
}

export default function CopyCodeButton({ code, href, label, variant = "card" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const busy = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const onClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      const modified = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0;
      if (modified) {
        // Let the browser open the link; still try to copy in the background.
        void copyText(code);
        return;
      }
      event.preventDefault();
      if (busy.current) return;
      busy.current = true;
      void copyText(code).then((ok) => {
        if (!ok) {
          setStatus("failed");
          busy.current = false;
          return;
        }
        setStatus("copied");
        timer.current = setTimeout(() => {
          window.location.assign(href);
        }, REDIRECT_DELAY_MS);
      });
    },
    [code, href],
  );

  const isBanner = variant === "banner";
  const announcement =
    status === "copied"
      ? `Code ${code} copied. Opening checkout.`
      : status === "failed"
        ? `Could not copy the code. Copy ${code} and paste it at checkout.`
        : "";

  const focusRing = isBanner
    ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blue focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
    : "focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ds-bg";

  const status_ = (
    <span role="status" aria-live="polite" className="sr-only">
      {announcement}
    </span>
  );

  if (status === "failed") {
    const linkClass = isBanner
      ? `inline-flex items-center px-3 py-1.5 rounded-lg bg-white text-ds-bg text-xs font-semibold hover:bg-ds-text ${focusRing}`
      : `btn-primary w-full text-center ${focusRing}`;
    return (
      <div className={isBanner ? "flex flex-wrap items-center gap-2" : "flex flex-col gap-3"}>
        {status_}
        <p className={isBanner ? "text-xs leading-snug" : "text-sm text-ds-textSub leading-snug"}>
          Copy this code and paste it at checkout:{" "}
          <code className="select-all rounded px-1.5 py-0.5 font-mono font-semibold bg-white/10 border border-white/20 text-current">
            {code}
          </code>
        </p>
        <a
          href={href}
          className={linkClass}
          style={isBanner ? undefined : { background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
        >
          Continue to checkout
        </a>
      </div>
    );
  }

  const copied = status === "copied";
  const Icon = copied ? Check : Copy;
  const text = copied ? "Code copied, opening checkout" : label;

  if (isBanner) {
    return (
      <>
        {status_}
        <a
          href={href}
          onClick={onClick}
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-300 motion-reduce:transition-none ${
            copied ? "bg-emerald-200 text-emerald-950" : "bg-white text-ds-bg hover:bg-ds-text"
          } ${focusRing}`}
        >
          <Icon size={14} aria-hidden="true" className="shrink-0" />
          <span>{text}</span>
        </a>
      </>
    );
  }

  return (
    <>
      {status_}
      <a
        href={href}
        onClick={onClick}
        className={`btn-primary relative overflow-hidden w-full text-center inline-flex items-center justify-center gap-2 ${focusRing}`}
        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 bg-emerald-600 transition-opacity duration-300 motion-reduce:transition-none ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="relative inline-flex items-center justify-center gap-2">
          <Icon size={16} aria-hidden="true" className="shrink-0" />
          <span>{text}</span>
        </span>
      </a>
    </>
  );
}
