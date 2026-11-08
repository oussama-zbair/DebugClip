import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support | DebugClip",
  description: "Get help with DebugClip. Email questions, bug reports and license requests to support.",
  alternates: { canonical: "https://debugclip.online/support/" },
};

const linkClass = "text-ds-blue hover:underline";

export default function Support() {
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("DebugClip support")}`;

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <div className="space-y-6 text-ds-textSub leading-relaxed text-sm">
        <p>Questions, bug reports and license help are welcome by email.</p>
        <p>
          <a
            href={mailto}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ds-border text-ds-blue hover:border-ds-blue/50 hover:bg-ds-surface transition-all text-sm font-medium"
          >
            📧 {SUPPORT_EMAIL}
          </a>
        </p>
        <p>Messages are read and answered by the developer.</p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">What to include in a bug report</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your browser and version (Chrome or Edge)</li>
          <li>The DebugClip version, shown in the extension popup</li>
          <li>The site where it happened, or a short description if it is private</li>
          <li>What you did and what you expected to happen</li>
          <li>Any error text you saw</li>
        </ul>
        <p>Please do not send passwords or API keys.</p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">License help</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Write from the email address you used at purchase</li>
          <li>Include your license key if you have it</li>
        </ul>

        <nav aria-label="Related pages" className="flex flex-wrap items-center gap-6 pt-6 mt-8 border-t border-ds-border">
          <a href="/privacy/" className={linkClass}>Privacy Policy</a>
          <a href="/terms/" className={linkClass}>Terms</a>
          <a href="/" className={linkClass}>Home</a>
        </nav>
      </div>
    </main>
  );
}
