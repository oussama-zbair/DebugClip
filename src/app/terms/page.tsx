"use client";

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-6 text-ds-textSub leading-relaxed text-sm">
        <p><strong className="text-ds-text">Last updated:</strong> July 2026</p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">1. Acceptance of Terms</h2>
        <p>
          By installing or using DebugClip (&quot;the Extension&quot;), you agree to these Terms of Service.
          If you do not agree, do not install or use the Extension.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">2. Description of Service</h2>
        <p>
          DebugClip is a Chrome browser extension that captures console errors, network failures,
          and other browser telemetry from web pages, then formats them into structured prompts
          for use with AI assistants (Claude, ChatGPT). All data processing occurs locally
          in the user&apos;s browser.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">3. Free, Pro, and Ultimate Tiers</h2>
        <p>
          DebugClip offers three tiers:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong className="text-ds-text">Free</strong> — Core error capture and viewing. Prompt preview is blurred; copy and send features are locked.</li>
          <li><strong className="text-ds-text">Pro ($4 one-time)</strong> — Lifetime access to unlimited copy and send to all LLMs, session history, smart filtering, custom templates, and LocalStorage snapshots.</li>
          <li><strong className="text-ds-text">Ultimate ($19 one-time)</strong> — Everything in Pro, plus AI answers directly inside the popup using your own API keys (BYOK), support for 4 AI providers (OpenAI, Anthropic, Google, DeepSeek), and future features including MCP server for AI agents.</li>
        </ul>
        <p className="mt-2">
          Pro and Ultimate licenses are one-time purchases granting lifetime access. Licenses are non-transferable and limited to one device per key unless otherwise specified.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">4. Privacy</h2>
        <p>
          DebugClip does not collect, transmit, or store any user browsing data, error data,
          or personal information on external servers. The only external network request is
          an optional license key validation call that transmits only the license key string.
          See our <a href="/privacy/" className="text-ds-blue hover:underline">Privacy Policy</a> for full details.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">5. Refund Policy</h2>
        <p>
          Due to the digital nature of license keys, all sales are generally final once a
          license key has been delivered and activated. If you experience a technical issue
          that prevents the product from functioning as described, please contact our support
          within 7 days of purchase and we will do our best to resolve the issue or consider a
          case-by-case exception.
        </p>
        <p className="mt-2">
          For refund requests or technical issues, please use your Creem order page to contact us directly:
        </p>
        <p className="mt-2">
          <a
            href="https://www.creem.io/orders"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ds-border text-ds-blue hover:border-ds-blue/50 hover:bg-ds-surface transition-all text-sm font-medium"
          >
            📋 View Orders on Creem
          </a>
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">6. Limitations of Liability</h2>
        <p>
          DebugClip is provided &quot;as is&quot; without warranty of any kind. The developer is not
          liable for any damages arising from the use or inability to use the Extension,
          including but not limited to data loss, service interruptions, or compatibility issues.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">7. Prohibited Use</h2>
        <p>
          You may not reverse-engineer, decompile, or redistribute the Extension source code.
          You may not share, resell, or transfer Pro license keys to unauthorized parties.
          You may not use the Extension for any illegal purpose.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">8. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Extension after
          changes constitutes acceptance of the revised Terms. Material changes will be
          communicated via the Extension or website.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">9. Contact</h2>
        <p>
          For questions about these Terms:{" "}
          <a
            href="mailto:oussama.zbair9@gmail.com"
            className="text-ds-blue hover:underline"
          >
            Contact Support
          </a>
        </p>
      </div>
    </main>
  );
}
