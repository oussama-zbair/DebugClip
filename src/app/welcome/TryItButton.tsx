"use client";

import { useState } from "react";

// Creates a real, harmless error on this page so DebugClip has something to show.
// Nothing leaves the site: the failed request goes to our own origin.
export default function TryItButton() {
  const [done, setDone] = useState(false);

  function runDemo() {
    console.error("DebugClip demo error: this is a harmless test");
    fetch("/debugclip-demo-404/", { cache: "no-store" }).catch(() => {});
    setDone(true);
  }

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={runDemo}
        className="btn-primary motion-reduce:transition-none motion-reduce:hover:transform-none focus-visible:ring-2 focus-visible:ring-ds-blue"
      >
        Try it now
      </button>
      <p className="mt-2 text-xs text-ds-textSub">Makes one harmless test error on this page. No data leaves the site.</p>
      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-ds-success">
        {done ? "Done. Now click the DebugClip icon to see what it caught." : ""}
      </p>
    </div>
  );
}
