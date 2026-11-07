import { API_BASE } from "./site";

export const REASON_VALUES = [
  "did_not_work_on_my_sites",
  "too_many_permissions",
  "found_something_better",
  "not_using_ai_for_debugging",
  "too_expensive",
  "other",
] as const;

export type Reason = (typeof REASON_VALUES)[number];

export interface FeedbackContext {
  version?: string;
  days?: number;
}

export interface FeedbackPayload extends FeedbackContext {
  reason: Reason;
  detail: string;
  comment: string;
  email: string;
  turnstileToken: string;
  website: string;
}

const VERSION_RE = /^\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const DAYS_RE = /^\d{1,4}$/;

// Reads v and d from the uninstall URL. Anything that does not look right is dropped,
// so a tampered URL only means "no context", never a blocked submission.
export function parseContext(search: string): FeedbackContext {
  const params = new URLSearchParams(search);
  const ctx: FeedbackContext = {};
  const v = params.get("v");
  if (v && VERSION_RE.test(v)) ctx.version = v;
  const d = params.get("d");
  if (d && DAYS_RE.test(d)) {
    const n = Number(d);
    if (Number.isInteger(n) && n >= 0 && n <= 3650) ctx.days = n;
  }
  return ctx;
}

// reachedServer tells the caller whether the Turnstile token may have been spent.
export type SubmitResult = { ok: true } | { ok: false; message: string; reachedServer: boolean };

export const MESSAGES = {
  offline: "You seem to be offline. Your answers are still here, try again when you are back online.",
  rateLimited: "You have already sent a few responses. Please try again a little later.",
  verify: "We could not verify the request. Please try again.",
  generic: "Something went wrong on our side. Please try again.",
} as const;

export async function submitFeedback(payload: FeedbackPayload, apiBase: string = API_BASE): Promise<SubmitResult> {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return { ok: false, message: MESSAGES.offline, reachedServer: false };
  }
  let res: Response;
  try {
    res = await fetch(`${apiBase}/api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // fetch only rejects on network failure (offline, DNS, blocked)
    return { ok: false, message: MESSAGES.offline, reachedServer: false };
  }
  if (res.ok) return { ok: true };
  if (res.status === 429) return { ok: false, message: MESSAGES.rateLimited, reachedServer: true };
  if (res.status === 403 || res.status === 503) return { ok: false, message: MESSAGES.verify, reachedServer: true };
  return { ok: false, message: MESSAGES.generic, reachedServer: true };
}
