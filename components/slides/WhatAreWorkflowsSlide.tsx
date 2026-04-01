import { GitBranch, Bot, ArrowRight } from "lucide-react";
import ElasticByTheNumbers from "@/components/ElasticByTheNumbers";

export default function WhatAreWorkflowsSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-64 rounded-full opacity-8 blur-3xl -translate-x-1/2" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Setting the scene</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-4">
          Workflows &amp; Agent Builder
        </h2>
        <p className="animate-fade-up-delay-1 text-white/55 text-lg mb-10 max-w-3xl leading-relaxed">
          They solve different problems — but they&apos;re built to work together. You don&apos;t have to choose between{' '}
          <span className="text-white/75">rule-based automation</span> and{' '}
          <span className="text-white/75">agentic AI</span>: one carries the process, the other carries the judgment.
        </p>

        <div className="animate-fade-up-delay-2 grid grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl p-8" style={{ background: "rgba(0,119,204,0.1)", border: "1px solid rgba(0,119,204,0.25)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,119,204,0.25)" }}>
                <GitBranch size={22} style={{ color: "var(--elastic-blue)" }} />
              </div>
              <h3 className="text-white text-xl font-semibold">Elastic Workflows</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Orchestration in Kibana: what runs, in what order, when a trigger fires. Think runbooks as code — alerts, schedules, webhooks, API calls, cases, and integrations — with a full execution trail.
            </p>
            <p className="text-white/45 text-xs italic">
              Best when the steps are known and you want consistency every time.
            </p>
          </div>

          <div className="rounded-xl p-8" style={{ background: "rgba(240,78,152,0.08)", border: "1px solid rgba(240,78,152,0.25)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(240,78,152,0.2)" }}>
                <Bot size={22} style={{ color: "var(--elastic-pink)" }} />
              </div>
              <h3 className="text-white text-xl font-semibold">Agent Builder</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              AI agents that explore your telemetry and knowledge in natural language — useful when the next step isn&apos;t fixed: investigation, summarization, suggesting queries, working with ES|QL and hybrid search.
            </p>
            <p className="text-white/45 text-xs italic">
              Best when the path depends on what the data says.
            </p>
          </div>
        </div>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl px-6 py-5" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.25)" }}>
          <ArrowRight className="hidden sm:block flex-shrink-0 text-white/30" size={20} />
          <p className="text-white/65 text-sm text-center max-w-2xl leading-relaxed">
            Together: Workflows <span className="text-white/90">call agents</span> at the right moment in the flow — so you get predictable automation with AI where reasoning actually helps. Next, we walk through YAML building blocks: triggers, step types, data flow, and resilience.
          </p>
        </div>

        <div className="animate-fade-up-delay-4 mt-8">
          <ElasticByTheNumbers />
        </div>
      </div>
    </div>
  );
}
