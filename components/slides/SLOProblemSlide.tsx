import { Clock, AlertOctagon, Repeat, BarChart2 } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    color: "var(--elastic-teal)",
    stat: "Hours",
    label: "To set up SLOs for a new service",
    desc: "Manual creation through UI: choose indicator, set targets, configure time window — for every service",
  },
  {
    icon: AlertOctagon,
    color: "var(--elastic-yellow)",
    stat: "Drifts",
    label: "SLOs fall out of date as services change",
    desc: "Services are renamed, split, or deprecated — SLO definitions lag behind the actual architecture",
  },
  {
    icon: Repeat,
    color: "var(--elastic-pink)",
    stat: "Ad Hoc",
    label: "No consistency across teams",
    desc: "One team uses 99% targets, another uses 95% — no organization-wide standards enforced",
  },
  {
    icon: BarChart2,
    color: "var(--elastic-blue)",
    stat: "Blind",
    label: "New deployments have no SLO coverage",
    desc: "Developers ship new services with no reliability targets until someone manually creates them",
  },
];

export default function SLOProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(0,191,179,0.15)", color: "var(--elastic-teal)", border: "1px solid rgba(0,191,179,0.3)" }}>
            Demo 2
          </div>
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">SLO Management</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-3">
          SLO Management is Toil
        </h2>
        <p className="animate-fade-up-delay-1 text-white/55 text-lg mb-10 max-w-3xl">
          Service Level Objectives are critical to reliability culture — but manually maintaining them across dozens of services is unsustainable.
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

        <div className="animate-fade-up-delay-5 mt-8 rounded-xl p-5 flex items-center gap-4" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.2)" }}>
          <BarChart2 size={20} style={{ color: "var(--elastic-teal)" }} className="flex-shrink-0" />
          <p className="text-white/70 text-sm">
            <strong className="text-white">The goal:</strong> Every service that appears in your APM data should automatically have SLOs — availability, latency, error rate, and synthetics — without any human intervention.
          </p>
        </div>
      </div>
    </div>
  );
}
