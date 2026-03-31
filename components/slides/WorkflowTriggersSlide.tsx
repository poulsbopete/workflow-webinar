import { MousePointer, Clock, Bell, Webhook } from "lucide-react";

const triggers = [
  {
    icon: MousePointer,
    color: "var(--elastic-blue)",
    title: "Manual",
    desc: "Explicit run from Kibana or API — on-demand tasks, testing, ad-hoc investigations.",
    snippet: "triggers:\n  - type: manual",
  },
  {
    icon: Clock,
    color: "var(--elastic-yellow)",
    title: "Scheduled",
    desc: "Intervals or cron — reports, cleanup, health checks, recurring enrichment.",
    snippet: "triggers:\n  - type: scheduled\n    interval: 1h",
  },
  {
    icon: Bell,
    color: "var(--elastic-pink)",
    title: "Alert",
    desc: "Fires from Kibana alerting rules with full alert context — SIEM, O11Y, custom rules.",
    snippet: "triggers:\n  - type: alert",
  },
  {
    icon: Webhook,
    color: "var(--elastic-teal)",
    title: "Webhook",
    desc: "External HTTP callbacks — CI/CD, cross-platform events, integrations.",
    snippet: "triggers:\n  - type: webhook\n    path: /my-hook",
  },
];

export default function WorkflowTriggersSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-1">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Core concepts · Source: partner enablement</div>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-2">
          Triggers: how workflows start
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-sm mb-8">
          Four primary ways to kick off automation — pick the one that matches the signal.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {triggers.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 2, 5)} rounded-xl p-5 card-glass flex gap-4`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${t.color}18`, border: `1px solid ${t.color}40` }}>
                  <Icon size={20} style={{ color: t.color }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-1">{t.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-3">{t.desc}</p>
                  <pre className="text-[10px] leading-relaxed text-white/45 font-mono whitespace-pre-wrap rounded-lg p-3" style={{ background: "#0D1117" }}>{t.snippet}</pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
