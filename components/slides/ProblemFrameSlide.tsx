import { Clock, Repeat, Sparkles, Link2 } from "lucide-react";
import ElasticByTheNumbers from "@/components/ElasticByTheNumbers";

export default function ProblemFrameSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full opacity-8 blur-3xl -translate-y-1/2" style={{ background: "var(--elastic-pink)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Why we&apos;re here</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-4">
          Reach outcomes faster
        </h2>
        <p className="animate-fade-up-delay-1 text-white/60 text-lg max-w-3xl mb-10 leading-relaxed">
          Observability teams still spend hours on tedious, manual, repetitive work — triaging the same alerts, stitching context across tools, and maintaining reliability guardrails by hand.
        </p>

        <div className="animate-fade-up-delay-2 grid grid-cols-2 gap-5 mb-8">
          <div className="rounded-xl p-6 card-glass flex gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(240,78,152,0.15)", border: "1px solid rgba(240,78,152,0.3)" }}>
              <Repeat size={20} style={{ color: "var(--elastic-pink)" }} />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Automate the repetitive</div>
              <p className="text-white/50 text-sm leading-relaxed">
                <strong className="text-white/70">Workflows</strong> turn repeatable steps into orchestration in Kibana — triggers, steps, and outputs you can version, test, and audit.
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 card-glass flex gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,119,204,0.15)", border: "1px solid rgba(0,119,204,0.3)" }}>
              <Sparkles size={20} style={{ color: "var(--elastic-blue)" }} />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Apply agentic AI where it helps</div>
              <p className="text-white/50 text-sm leading-relaxed">
                <strong className="text-white/70">Agent Builder</strong> is the natural partner: agents reason over your data inside the same automation loop — not a bolt-on.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up-delay-3 rounded-xl px-6 py-4 flex flex-wrap items-center gap-3" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.25)" }}>
          <Link2 size={18} style={{ color: "var(--elastic-teal)" }} className="flex-shrink-0" />
          <p className="text-white/65 text-sm">
            <span className="font-semibold text-white">Workflows + Agent Builder</span> are symbiotic: orchestration carries the runbook; agents carry the judgment. Together they close the gap from signal to action.
          </p>
        </div>

        <div className="animate-fade-up-delay-4 mt-8">
          <ElasticByTheNumbers />
        </div>

        <div className="animate-fade-up-delay-5 mt-6 flex items-center gap-2 text-white/35 text-xs">
          <Clock size={12} />
          <span>We&apos;ll start with simple building blocks, then show what&apos;s possible end-to-end.</span>
        </div>
      </div>
    </div>
  );
}
