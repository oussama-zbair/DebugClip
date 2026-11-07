"use client";

import { Check, Heart } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { MESSAGES, parseContext, submitFeedback, type FeedbackContext, type Reason } from "@/lib/feedback";
import { SUPPORT_EMAIL } from "@/lib/site";
import { loadTurnstile, resetTurnstile } from "@/lib/turnstile";
import { COMMENT_MAX, DETAIL_MAX, EMAIL_MAX, REASONS } from "./reasons";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

type Status = "idle" | "sending" | "done" | "error";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ds-bg";
const fieldClass =
  "w-full bg-ds-bg border border-ds-raised rounded-xl px-4 py-3 text-sm text-ds-text placeholder:text-ds-textSub " +
  "focus:outline-none focus-visible:border-ds-blue focus-visible:ring-2 focus-visible:ring-ds-blue/60";

export default function GoodbyeForm() {
  const [context, setContext] = useState<FeedbackContext>({});
  const [reason, setReason] = useState<Reason | null>(null);
  const [detail, setDetail] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const [turnstileFailed, setTurnstileFailed] = useState(false);

  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const widgetHost = useRef<HTMLDivElement | null>(null);
  const widgetId = useRef<string | null>(null);
  const thanksHeading = useRef<HTMLHeadingElement | null>(null);

  // v and d come from the uninstall URL. Read on the client only, never displayed.
  useEffect(() => {
    setContext(parseContext(window.location.search));
  }, []);

  useEffect(() => {
    if (status === "done") thanksHeading.current?.focus();
  }, [status]);

  const ensureTurnstile = useCallback(async () => {
    if (widgetId.current || !widgetHost.current) return;
    if (!SITE_KEY) {
      setTurnstileFailed(true);
      setStatus("error");
      setErrorMessage(MESSAGES.generic);
      return;
    }
    try {
      const api = await loadTurnstile();
      if (widgetId.current || !widgetHost.current) return;
      setTurnstileFailed(false);
      widgetId.current = api.render(widgetHost.current, {
        sitekey: SITE_KEY,
        appearance: "interaction-only",
        "refresh-expired": "auto",
        callback: (t) => {
          setToken(t);
          setTurnstileFailed(false);
        },
        "expired-callback": () => setToken(""),
        "error-callback": () => {
          setToken("");
          setTurnstileFailed(true);
          setStatus("error");
          setErrorMessage(MESSAGES.verify);
        },
      });
    } catch {
      setTurnstileFailed(true);
      setStatus("error");
      setErrorMessage(typeof navigator !== "undefined" && navigator.onLine === false ? MESSAGES.offline : MESSAGES.verify);
    }
  }, []);

  function choose(value: Reason) {
    if (value !== reason) setDetail("");
    setReason(value);
    void ensureTurnstile();
  }

  function onCardKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = REASONS.length - 1;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === -1) return;
    e.preventDefault();
    choose(REASONS[next].value);
    cardRefs.current[next]?.focus();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!reason || status === "sending") return;
    if (!token) {
      // Verification is not ready (blocked, offline, or failed). Try loading it again.
      widgetId.current = null;
      if (widgetHost.current) widgetHost.current.innerHTML = "";
      await ensureTurnstile();
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    const result = await submitFeedback({
      reason,
      detail,
      comment,
      email,
      website,
      turnstileToken: token,
      ...context,
    });
    if (result.ok) {
      setStatus("done");
      return;
    }
    setStatus("error");
    setErrorMessage(result.message);
    // A Turnstile token is single use. Once the server has seen it, get a fresh one before
    // the retry. If the request never got out (offline), keep it so the retry works as soon
    // as the connection is back. A spent token at worst yields a 403, which resets it then.
    if (result.reachedServer) {
      setToken("");
      resetTurnstile(widgetId.current);
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="text-center bg-ds-surface border border-ds-border rounded-2xl p-8">
        <div
          className="mx-auto mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}
          aria-hidden="true"
        >
          <Heart size={22} className="text-white" />
        </div>
        <h2 ref={thanksHeading} tabIndex={-1} className="text-2xl font-bold text-ds-text mb-2 focus:outline-none">
          Thank you
        </h2>
        <p className="text-ds-textSub">That helps us more than you might think. Take care.</p>
        <a href="/" className={`inline-block mt-6 text-sm text-ds-blue hover:underline rounded ${focusRing}`}>
          Back to debugclip.online
        </a>
      </div>
    );
  }

  const selected = REASONS.find((r) => r.value === reason) || null;
  const focusIndex = Math.max(0, REASONS.findIndex((r) => r.value === reason));
  const waitingForCheck = !!reason && !token && !turnstileFailed && status !== "sending";
  const submitDisabled = !SITE_KEY || !reason || status === "sending" || waitingForCheck;
  const submitLabel = status === "sending" ? "Sending..." : waitingForCheck ? "Checking..." : "Send feedback";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <fieldset className="space-y-3">
        <legend id="reason-heading" className="text-sm font-semibold text-ds-text mb-3">
          Why did you remove DebugClip?
        </legend>
        <div
          role="radiogroup"
          aria-labelledby="reason-heading"
          aria-required="true"
          className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {REASONS.map((r, i) => {
            const checked = r.value === reason;
            const Icon = r.icon;
            return (
              <button
                key={r.value}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                role="radio"
                aria-checked={checked}
                tabIndex={i === focusIndex ? 0 : -1}
                onClick={() => choose(r.value)}
                onKeyDown={(e) => onCardKeyDown(e, i)}
                className={`relative flex items-center gap-3 text-left rounded-xl px-4 py-4 min-h-[64px] border transition-colors motion-reduce:transition-none ${focusRing} ${
                  checked
                    ? "border-ds-indigo bg-ds-indigo/15 text-ds-text"
                    : "border-ds-raised bg-ds-surface text-ds-textSub hover:border-ds-indigo/60 hover:text-ds-text"
                }`}
              >
                <span
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${checked ? "text-white" : "bg-ds-raised text-ds-blue"}`}
                  style={checked ? { background: "linear-gradient(135deg, #3884ff, #7c3aed)" } : undefined}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium leading-snug pr-5">{r.label}</span>
                {checked && (
                  <Check size={16} className="absolute top-3 right-3 text-ds-blue" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite">
        {selected && (
          <div>
            <label htmlFor="detail" className="block text-sm font-semibold text-ds-text mb-2">
              {selected.followUpLabel} <span className="font-normal text-ds-textSub">(optional)</span>
            </label>
            <input
              id="detail"
              name="detail"
              type="text"
              value={detail}
              maxLength={DETAIL_MAX}
              onChange={(e) => setDetail(e.target.value)}
              placeholder={selected.followUpPlaceholder}
              className={fieldClass}
            />
          </div>
        )}
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-semibold text-ds-text mb-2">
          Anything else? <span className="font-normal text-ds-textSub">(optional)</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          value={comment}
          maxLength={COMMENT_MAX}
          onChange={(e) => setComment(e.target.value)}
          aria-describedby="comment-count"
          className={`${fieldClass} resize-y`}
        />
        <p id="comment-count" className="mt-1 text-right text-xs text-ds-textSub">
          {comment.length}/{COMMENT_MAX}
        </p>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ds-text mb-2">
          Email <span className="font-normal text-ds-textSub">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          maxLength={EMAIL_MAX}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-note"
          className={fieldClass}
        />
        <p id="email-note" className="mt-2 text-xs text-ds-textSub">
          Only used to reply to you about this feedback.
        </p>
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div ref={widgetHost} />

      <div role="alert" aria-live="assertive" className="min-h-0">
        {status === "error" && errorMessage && (
          <p className="rounded-xl border border-ds-error/40 bg-ds-error/10 px-4 py-3 text-sm text-ds-error">
            {errorMessage}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={submitDisabled}
          className={`btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none motion-reduce:transition-none motion-reduce:hover:transform-none ${focusRing}`}
        >
          {submitLabel}
        </button>
        {!reason && <p className="text-xs text-ds-textSub">Pick a reason above to send.</p>}
      </div>

      <p className="text-xs text-ds-textSub border-t border-ds-border pt-5">
        You can also write to us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={`text-ds-blue hover:underline rounded ${focusRing}`}>
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}

