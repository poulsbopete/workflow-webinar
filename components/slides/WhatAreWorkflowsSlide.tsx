import { Bell, Brain, Cog, Globe, Clock, Layers, Search } from "lucide-react";

const triggers = [
  { icon: Bell, label: "Alert", color: "var(--elastic-pink)" },
  { icon: Clock, label: "Scheduled", color: "var(--elastic-yellow)" },
  { icon: Globe, label: "Webhook", color: "var(--elastic-teal)" },
];

const steps = [
  { icon: Search, label: "ES|QL & data", color: "var(--elastic-blue)" },
  { icon: Brain, label: "Agent Builder", color: "var(--elastic-blue)" },
  { icon: Cog, label: "Kibana API", color: "var(--elastic-teal)" },
  { icon: Layers, label: "HTTP / external", color: "var(--elastic-pink)" },
];

export default function WhatAreWorkflowsSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-64 rounded-full opacity-8 blur-3xl -translate-x-1/2" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">In Elastic</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          Workflows + Agent Builder
        </h2>
        <p className="animate-fade-up-delay-1 text-white/60 text-base mb-8 max-w-3xl">
          Same building blocks you just saw — native in Kibana. Orchestration stays predictable; agents add reasoning where humans used to context-switch.
        </p>

        <div className="animate-fade-up-delay-1 grid grid-cols-3 gap-6 mb-8">
          <div className="card-glass rounded-xl p-5">
            <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Triggers</div>
            <div className="space-y-2">
              {triggers.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon size={14} style={{ color: t.color }} />
                    <span className="text-white/70 text-sm">{t.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-blue rounded-xl p-5">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--elastic-blue)" }}>Steps</div>
            <div className="space-y-2">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon size={14} style={{ color: s.color }} />
                    <span className="text-white/70 text-sm">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-teal rounded-xl p-5">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--elastic-teal)" }}>Outputs &amp; ops</div>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                Cases, comments, alert links
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                Slack, webhooks, tickets
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                YAML + Liquid — versioned
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                Full execution history per run
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 grid grid-cols-3 gap-4">
          {[
            { label: "Readable automation", sub: "Complex flows in YAML — not a pile of one-off scripts" },
            { label: "Agentic AI in the loop", sub: "Agents use your telemetry; Workflows carry the handoffs" },
            { label: "Built for practitioners", sub: "SREs & platform teams — meet people where they are, then expand" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--elastic-blue)" }} />
              <div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-white/45 text-xs mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
