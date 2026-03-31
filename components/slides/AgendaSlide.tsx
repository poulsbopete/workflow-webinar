import { Layers, LayoutList, GitBranch, Activity, MonitorPlay, Library } from "lucide-react";

const items = [
  {
    icon: Layers,
    color: "var(--elastic-blue)",
    cardClass: "card-blue",
    title: "Workflows & Agent Builder",
    desc: "Set the scene: orchestration vs. agents — how they complement each other before we open the engine",
  },
  {
    icon: LayoutList,
    color: "var(--elastic-teal)",
    cardClass: "card-teal",
    title: "Foundations (enablement slides)",
    desc: "Triggers, step types, data flow, error handling — same narrative as partner technical enablement",
  },
  {
    icon: GitBranch,
    color: "var(--elastic-pink)",
    cardClass: "card-pink",
    title: "RCA — field pattern",
    desc: "Alert → investigation → case with Agent Builder in the loop",
  },
  {
    icon: Activity,
    color: "var(--elastic-yellow)",
    cardClass: "",
    title: "SLO automation — field pattern",
    desc: "Scheduled workflows + Observability APIs for reliable coverage",
  },
  {
    icon: Library,
    color: "var(--elastic-blue)",
    cardClass: "",
    title: "Library & resources",
    desc: "Workflow library, docs, and partner PDF references",
  },
  {
    icon: MonitorPlay,
    color: "var(--elastic-teal)",
    cardClass: "",
    title: "Hands-on lab",
    desc: "Instruqt · Elastic Autonomous Observability",
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
          <p className="text-white/60 text-sm mt-3 max-w-3xl leading-relaxed">
            Learn with us how to create rule-based automation and AI Agents to automate routine and complex tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 1, 5)} rounded-xl p-3.5 ${item.cardClass || "card-glass"} flex gap-3 items-center`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                >
                  <Icon size={16} style={{ color: item.color }} />
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
