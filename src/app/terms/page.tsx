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

        <h2 className="text-xl font-semibold text-ds-text mt-8">3. Free and Pro Tiers</h2>
        <p>
          DebugClip offers a Free tier with core functionality and a paid Pro tier with
          additional features. Pro licenses are one-time purchases granting lifetime access
          to Pro features. Licenses are non-transferable and limited to one device per key
          unless otherwise specified.
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
          Pro license purchases are eligible for a full refund within 14 days of purchase
          if the product does not function as described. Contact support to request a refund.
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
          For questions about these Terms: <a href="mailto:oussamazbair9@gmail.com" className="text-ds-blue hover:underline">oussamazbair9@gmail.com</a>
        </p>
      </div>
    </main>
  );
}
