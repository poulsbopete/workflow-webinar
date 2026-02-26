import { Bell, Brain, Cog, Globe, Clock, Layers } from "lucide-react";

const triggers = [
  { icon: Bell, label: "Alert Fired", color: "var(--elastic-pink)" },
  { icon: Clock, label: "Scheduled", color: "var(--elastic-yellow)" },
  { icon: Globe, label: "Webhook", color: "var(--elastic-teal)" },
];

const steps = [
  { icon: Brain, label: "AI Agent", color: "var(--elastic-blue)" },
  { icon: Cog, label: "Kibana API", color: "var(--elastic-teal)" },
  { icon: Layers, label: "HTTP Call", color: "var(--elastic-pink)" },
];

export default function WhatAreWorkflowsSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-64 rounded-full opacity-8 blur-3xl -translate-x-1/2" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Introduction</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-3">
          What are Elastic Workflows?
        </h2>
        <p className="animate-fade-up-delay-1 text-white/60 text-lg mb-10 max-w-3xl">
          A native automation engine built into Kibana — connecting alerts, AI agents, and APIs into repeatable, auditable processes.
        </p>

        <div className="animate-fade-up-delay-1 grid grid-cols-3 gap-6 mb-10">
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
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--elastic-blue)" }}>Step Types</div>
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
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--elastic-teal)" }}>Defined as</div>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                YAML — version controlled
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                Liquid templating
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--elastic-teal)" }} />
                Kibana UI or API
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 grid grid-cols-3 gap-4">
          {[
            { label: "No Code Required", sub: "Define complex automations in readable YAML" },
            { label: "AI-Native", sub: "Agent Builder integration for intelligent steps" },
            { label: "Fully Auditable", sub: "Every execution logged with full step history" },
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
