import { LayoutGrid, Layers, GitBranch, Activity, MonitorPlay } from "lucide-react";

const items = [
  {
    icon: LayoutGrid,
    color: "var(--elastic-blue)",
    cardClass: "card-blue",
    title: "Simple building blocks",
    desc: "Triggers → steps (ES|QL, call an agent) → outputs (case, Slack…) — same mental model for every demo",
  },
  {
    icon: Layers,
    color: "var(--elastic-teal)",
    cardClass: "card-teal",
    title: "How it maps in Elastic",
    desc: "Workflows + Agent Builder in Kibana — YAML, Liquid, full execution history",
  },
  {
    icon: GitBranch,
    color: "var(--elastic-pink)",
    cardClass: "card-pink",
    title: "RCA — what’s possible",
    desc: "End-to-end field pattern: alert → investigation → documented case",
  },
  {
    icon: Activity,
    color: "var(--elastic-yellow)",
    cardClass: "",
    title: "SLO automation — what’s possible",
    desc: "Scheduled workflows + APIs — reliability without endless manual setup",
  },
  {
    icon: MonitorPlay,
    color: "var(--elastic-blue)",
    cardClass: "",
    title: "Hands-on lab",
    desc: "Instruqt · Elastic Autonomous Observability — try it yourself",
  },
];

export default function AgendaSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl -translate-y-1/2" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-6">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Roadmap</div>
          <h2 className="text-5xl font-bold text-white">Agenda</h2>
          <p className="text-white/45 text-sm mt-2 max-w-2xl">
            We go from easy-to-grasp pieces to bigger scenarios — with room for organic interruptions and back-and-forth between presenters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 1, 5)} rounded-xl p-4 ${item.cardClass || "card-glass"} flex gap-4 items-center`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold" style={{ color: item.color }}>{i + 1}</span>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
