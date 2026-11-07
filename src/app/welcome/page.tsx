import type { Metadata } from "next";
import { Zap } from "lucide-react";
import TryItButton from "./TryItButton";

export const metadata: Metadata = {
  title: "Welcome to DebugClip",
  description: "DebugClip is installed. Three quick steps to catch your first error.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "Pin it",
    text: "Click the puzzle icon in your toolbar, then the pin next to DebugClip.",
  },
  {
    title: "Open any page with errors",
    text: "Your app, a staging site, anything. DebugClip starts capturing as soon as the page loads.",
  },
  {
    title: "Click the DebugClip icon",
    text: "You will see the errors and a ready-to-paste prompt.",
  },
];

export default function Welcome() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-16 sm:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-ds-indigo/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-ds-purple/10 blur-[80px]" />
      </div>

      <div className="relative w-full max-w-lg animate-fade-in motion-reduce:animate-none">
        <header className="text-center mb-10">
          <div
            className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}
            aria-hidden="true"
          >
            <Zap size={26} className="text-white" fill="white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            <span className="gradient-text">DebugClip</span> is installed
          </h1>
          <p className="text-base sm:text-lg text-ds-textSub">
            Three small steps and you will have your first error ready for AI.
          </p>
        </header>

        <ol className="bg-ds-surface border border-ds-border rounded-2xl p-5 sm:p-6 space-y-5 mb-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex items-start gap-4">
              <span
                className="w-8 h-8 rounded-lg text-sm font-bold text-white flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h2 className="text-base font-semibold text-ds-text">{step.title}</h2>
                <p className="text-sm text-ds-textSub mt-1 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <TryItButton />

        <p className="mt-12 text-center text-sm text-ds-textSub">
          Free covers the basics. Want more later?{" "}
          <a
            href="/#pricing"
            className="text-ds-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-blue rounded"
          >
            See Pro
          </a>
        </p>
      </div>
    </main>
  );
}
