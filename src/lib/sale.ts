// Black Friday sale config. Everything about the sale lives here.
// To remove the sale: delete this file, src/components/SaleBanner.tsx,
// src/components/useSaleActive.ts, and their usages in src/app/page.tsx.

export const SALE = {
  name: "Black Friday",
  startsAt: "2026-11-24T00:00:00Z",
  endsAt: "2026-12-01T23:59:59Z",
  code: "DEBUGCLIP50",
  percentOff: 50,
  regularPrice: 19,
  salePrice: 9.5,
  endsLabel: "December 1",
  ultimateUrl: "https://www.creem.io/payment/prod_nSm4ho5ypRsaLNDddKd8e",
} as const;

/** True when `now` is within the sale window (start and end inclusive). */
export function isSaleActive(now: Date): boolean {
  const t = now.getTime();
  return t >= Date.parse(SALE.startsAt) && t <= Date.parse(SALE.endsAt);
}

/** Returns the URL with the sale discount code pre-applied (Creem discount_code param). */
export function withSaleCode(url: string): string {
  if (/[?&]discount_code=/.test(url)) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}discount_code=${encodeURIComponent(SALE.code)}`;
}
