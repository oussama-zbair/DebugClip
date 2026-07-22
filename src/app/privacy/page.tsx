export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-slate max-w-none space-y-6 text-ds-textSub leading-relaxed">
        <p><strong>Last updated:</strong> July 2025</p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Data Collection</h2>
        <p>
          DebugClip does <strong>not</strong> collect, transmit, or store any personal data. All captured
          telemetry (console errors, network requests, stack traces) is processed entirely within your
          browser and is never sent to DebugClip servers.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Local Storage</h2>
        <p>
          User settings and API keys are stored exclusively in <code>chrome.storage.local</code> on the
          user&#39;s device. API keys are only transmitted directly to the LLM provider (Anthropic or
          OpenAI) when the user explicitly chooses to use AI features.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Network Requests</h2>
        <p>
          The only external network request made by this extension is an optional license key validation
          call to <code>api.debugclip.io</code> when a user enters a Pro license key. This request
          contains only the license key string — no page data, error data, or personal information.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Third-Party Services</h2>
        <p>
          When you click &quot;Send to AI&quot;, DebugClip opens a new tab to Claude.ai or ChatGPT.com and
          (Pro tier only) pastes the compiled error prompt into the input field. The prompt content is
          determined by you and sent directly to the AI provider — DebugClip does not proxy or store it.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Permissions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>activeTab</strong> — Read the current tab&#39;s title for display in the popup header</li>
          <li><strong>storage</strong> — Store settings and API keys locally</li>
          <li><strong>tabs</strong> — Open new tabs for LLM interfaces</li>
          <li><strong>scripting</strong> — Inject prompts into LLM input fields (Pro)</li>
          <li><strong>host_permissions: &lt;all_urls&gt;</strong> — Content script must run on any page the user is debugging</li>
        </ul>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Contact</h2>
        <p>
          For privacy inquiries: <a href="mailto:privacy@debugclip.io" className="text-ds-blue hover:underline">privacy@debugclip.io</a>
        </p>
      </div>
    </main>
  );
}
