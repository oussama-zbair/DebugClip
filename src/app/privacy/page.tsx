"use client";

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-slate max-w-none space-y-6 text-ds-textSub leading-relaxed">
        <p><strong>Last updated:</strong> November 2026</p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Data Collection</h2>
        <p>
          DebugClip does <strong>not</strong> collect, transmit, or store any personal data. All captured
          telemetry (console errors, network requests, stack traces) is processed entirely within your
          browser and is never sent to DebugClip servers. The one exception is feedback you choose to send
          from our goodbye page, described under Feedback and Uninstall below.
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
          call to <code>api.debugclip.online</code> when a user enters a Pro license key. This request
          contains only the license key string. No page data, error data, or personal information.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Third-Party Services</h2>
        <p>
          When you click &quot;Send to AI&quot;, DebugClip opens a new tab to Claude.ai or ChatGPT.com and
          (Pro tier only) pastes the compiled error prompt into the input field. The prompt content is
          determined by you and sent directly to the AI provider. DebugClip does not proxy or store it.
        </p>
        <p>
          The feedback form on our website (see below) uses{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-ds-blue hover:underline">
            Cloudflare Turnstile
          </a>{" "}
          to keep bots and abuse out. Turnstile runs a quick check in your browser instead of a puzzle. It loads
          only on the feedback page, after you pick a reason.
        </p>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Feedback and Uninstall</h2>
        <p>
          When you remove the extension, your browser opens our goodbye page. The address of that page carries
          only two things: the extension version and the number of whole days it was installed. No user ID,
          license key, plan, browsing data or device identifier is included.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Feedback is optional. You can close the page and nothing is sent.</li>
          <li>If you do send it, we store the reason you picked, your answers, the version and the days installed.</li>
          <li>Email is optional and is only used to reply to you about your feedback.</li>
          <li>To limit abuse we keep a salted, one-way hash of your IP address with each response. We never store the IP itself.</li>
          <li>Feedback is deleted after 90 days at most.</li>
        </ul>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Permissions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>activeTab</strong>: Read the current tab&#39;s title for display in the popup header</li>
          <li><strong>storage</strong>: Store settings and API keys locally</li>
          <li><strong>tabs</strong>: Open new tabs for LLM interfaces</li>
          <li><strong>scripting</strong>: Inject prompts into LLM input fields (Pro)</li>
          <li><strong>host_permissions: &lt;all_urls&gt;</strong>: Content script must run on any page the user is debugging</li>
        </ul>

        <h2 className="text-xl font-semibold text-ds-text mt-8">Contact</h2>
        <p>
          For privacy questions, or to have your feedback deleted sooner:{" "}
          <a
            href="mailto:support@debugclip.online"
            className="text-ds-blue hover:underline"
          >
            support@debugclip.online
          </a>
        </p>
      </div>
    </main>
  );
}
