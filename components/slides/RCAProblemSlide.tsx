import { Clock, Users, AlertTriangle, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    color: "var(--elastic-pink)",
    stat: "45 min",
    label: "Avg. time to identify root cause",
    desc: "Engineers context-switch between dashboards, logs, and traces manually",
  },
  {
    icon: Users,
    color: "var(--elastic-yellow)",
    stat: "3–5",
    label: "People pulled into every incident",
    desc: "On-call → senior SRE → team lead — all losing focus time",
  },
  {
    icon: AlertTriangle,
    color: "var(--elastic-blue)",
    stat: "60%",
    label: "Incidents lack structured documentation",
    desc: "Findings live in Slack threads, not searchable case systems",
  },
  {
    icon: TrendingDown,
    color: "var(--elastic-teal)",
    stat: "Repeat",
    label: "Same issues recur without learning",
    desc: "No feedback loop from past incidents into future alerts",
  },
];

export default function RCAProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-pink)" }} />

      <div className="max-w-5xl w-full">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(240,78,152,0.15)", color: "var(--elastic-pink)", border: "1px solid rgba(240,78,152,0.3)" }}>
            Demo 1
          </div>
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Root Cause Analysis</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-3">
          The Problem with Incident Response
        </h2>
        <p className="animate-fade-up-delay-1 text-white/55 text-lg mb-10 max-w-3xl">
          When an alert fires at 2am, your SREs become detectives — manually correlating signals across dozens of dashboards under pressure.
        </p>

        <div className="grid grid-cols-4 gap-4">
          {painPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className={`animate-fade-up-delay-${i + 2} card-glass rounded-xl p-5`}>
                <div className="mb-3">
                  <Icon size={20} style={{ color: p.color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: p.color }}>{p.stat}</div>
                <div className="text-white text-sm font-semibold mb-2">{p.label}</div>
                <div className="text-white/40 text-xs leading-relaxed">{p.desc}</div>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up-delay-5 mt-8 rounded-xl p-5 flex items-center gap-4" style={{ background: "rgba(240,78,152,0.08)", border: "1px solid rgba(240,78,152,0.2)" }}>
          <AlertTriangle size={20} style={{ color: "var(--elastic-pink)" }} className="flex-shrink-0" />
          <p className="text-white/70 text-sm">
            <strong className="text-white">The irony:</strong> All the data needed to answer &quot;why did this break?&quot; already exists in Elastic — it just requires human intervention to connect the dots.
          </p>
        </div>
      </div>
    </div>
  );
}
