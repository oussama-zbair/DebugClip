import type { Metadata } from "next";
import { Suspense } from "react";
import { Zap } from "lucide-react";
import GoodbyeForm from "./GoodbyeForm";

export const metadata: Metadata = {
  title: "Sorry to see you go | DebugClip",
  description: "Tell us why you removed DebugClip.",
  robots: { index: false, follow: false },
};

export default function Goodbye() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-16 sm:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-ds-indigo/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-ds-purple/10 blur-[80px]" />
      </div>

      <div className="relative w-full max-w-3xl animate-fade-in motion-reduce:animate-none">
        <header className="text-center mb-10">
          <div
            className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3884ff, #7c3aed)" }}
            aria-hidden="true"
          >
            <Zap size={26} className="text-white" fill="white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Sorry to see you go</h1>
          <p className="text-base text-ds-textSub max-w-md mx-auto">
            One tap tells us what went wrong. It takes under a minute and everything is optional except the reason.
          </p>
        </header>

        <Suspense fallback={<p className="text-center text-sm text-ds-textSub">Loading...</p>}>
          <GoodbyeForm />
        </Suspense>
      </div>
    </main>
  );
}
