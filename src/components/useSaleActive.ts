"use client";

import { useEffect, useState } from "react";
import { isSaleActive } from "@/lib/sale";

/**
 * False on the server and on first client render (keeps the static HTML and
 * hydration identical), then true after mount if the sale window is open.
 */
export function useSaleActive(): boolean {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(isSaleActive(new Date()));
  }, []);
  return active;
}
