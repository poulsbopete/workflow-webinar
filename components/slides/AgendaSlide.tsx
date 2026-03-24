import { Zap, GitBranch, Activity, MonitorPlay } from "lucide-react";

const items = [
  {
    icon: Zap,
    color: "var(--elastic-blue)",
    cardClass: "card-blue",
    title: "Elastic Workflows (fast)",
    desc: "Triggers, step types, YAML in Kibana — enough context for the demos",
  },
  {
    icon: GitBranch,
    color: "var(--elastic-teal)",
    cardClass: "card-teal",
    title: "RCA workflow",
    desc: "Alert → Agent Builder → case with AI reasoning and observability context",
  },
  {
    icon: Activity,
    color: "var(--elastic-pink)",
    cardClass: "card-pink",
    title: "SLO automation",
    desc: "Scheduled workflows + SLO API — idempotent coverage across services",
  },
  {
    icon: MonitorPlay,
    color: "var(--elastic-yellow)",
    cardClass: "",
    title: "Hands-on: Autonomous Observability",
    desc: "Instruqt lab — same patterns, including SLOs created with Elastic Workflows",
  },
];

export default function AgendaSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl -translate-y-1/2" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-10">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Today</div>
          <h2 className="text-5xl font-bold text-white">Agenda</h2>
          <p className="text-white/45 text-sm mt-2 max-w-xl">Short deck — we spend time on demos and the lab, not slide bullets.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 1, 5)} rounded-xl p-5 ${item.cardClass || "card-glass"} flex gap-4`}
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
    </div>
  );
}
