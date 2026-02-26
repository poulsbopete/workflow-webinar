import { Zap, GitBranch, Activity, Users } from "lucide-react";

const items = [
  {
    icon: Zap,
    color: "var(--elastic-blue)",
    cardClass: "card-blue",
    title: "What are Elastic Workflows?",
    desc: "The new automation layer — YAML-driven, AI-capable, event-triggered orchestration built into Kibana",
  },
  {
    icon: GitBranch,
    color: "var(--elastic-teal)",
    cardClass: "card-teal",
    title: "Demo: Root Cause Analysis Workflow",
    desc: "Alert fires → AI agent investigates → Case auto-created with findings, links, and evidence",
  },
  {
    icon: Activity,
    color: "var(--elastic-pink)",
    cardClass: "card-pink",
    title: "Demo: SLO Automation Workflow",
    desc: "Scheduled workflow discovers services, evaluates health, and creates SLOs automatically — idempotent, every 24h",
  },
  {
    icon: Users,
    color: "var(--elastic-yellow)",
    cardClass: "",
    title: "Why This Matters for You",
    desc: "What changes for SREs, DevOps, and Cloud Engineers already using Elastic — and how to start today",
  },
];

export default function AgendaSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl -translate-y-1/2" style={{ background: "var(--elastic-blue)" }} />

      <div className="animate-fade-up mb-10">
        <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Today&apos;s Webinar</div>
        <h2 className="text-5xl font-bold text-white">Agenda</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`animate-fade-up-delay-${i + 1} rounded-xl p-5 ${item.cardClass || "card-glass"} flex gap-4`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
              >
                <Icon size={20} style={{ color: item.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold" style={{ color: item.color }}>0{i + 1}</span>
                  <h3 className="text-white font-semibold text-base">{item.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
