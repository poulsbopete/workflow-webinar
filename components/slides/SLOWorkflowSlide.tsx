import { Clock, Search, Activity, Trash2, PlusCircle, Shield, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Clock,
    color: "var(--elastic-teal)",
    bg: "rgba(0,191,179,0.12)",
    border: "rgba(0,191,179,0.3)",
    step: "Trigger",
    title: "Every 24 Hours (+ Manual)",
    desc: "Scheduled trigger ensures SLOs stay in sync — also supports manual runs on demand",
  },
  {
    icon: Search,
    color: "var(--elastic-blue)",
    bg: "rgba(0,119,204,0.12)",
    border: "rgba(0,119,204,0.3)",
    step: "Step 1",
    title: "Discover All Services",
    desc: "Queries APM data to get the current list of active services in your environment",
  },
  {
    icon: Activity,
    color: "var(--elastic-yellow)",
    bg: "rgba(254,197,20,0.12)",
    border: "rgba(254,197,20,0.3)",
    step: "Step 2",
    title: "Evaluate Health Metrics",
    desc: "Checks error rates, latency percentiles, and throughput to assess service health",
  },
  {
    icon: Trash2,
    color: "var(--elastic-pink)",
    bg: "rgba(240,78,152,0.12)",
    border: "rgba(240,78,152,0.3)",
    step: "Steps 3–7",
    title: "Delete Stale SLOs",
    desc: "Removes existing SLOs by stable ID before recreating — prevents duplicates on re-runs",
  },
  {
    icon: PlusCircle,
    color: "var(--elastic-teal)",
    bg: "rgba(0,191,179,0.12)",
    border: "rgba(0,191,179,0.3)",
    step: "Steps 8–12",
    title: "Create 5 Standard SLOs",
    desc: "Availability (95%), Error Rate (95%), Latency (85% under 2s), Synthetics Availability, Synthetics Latency",
  },
  {
    icon: Shield,
    color: "var(--elastic-blue)",
    bg: "rgba(0,119,204,0.12)",
    border: "rgba(0,119,204,0.3)",
    step: "Step 13",
    title: "Verify Transform Health",
    desc: "Checks SLO transform status and auto-recovers any failed transforms",
  },
  {
    icon: CheckCircle2,
    color: "var(--elastic-yellow)",
    bg: "rgba(254,197,20,0.12)",
    border: "rgba(254,197,20,0.3)",
    step: "Complete",
    title: "5 SLOs, Zero Toil",
    desc: "Exactly 5 SLOs exist after every run — idempotent, consistent, automated",
  },
];

const sloTypes = [
  { name: "Availability SLO", target: "95%", color: "var(--elastic-teal)" },
  { name: "Error Rate SLO", target: "95%", color: "var(--elastic-blue)" },
  { name: "Latency SLO", target: "85% < 2s", color: "var(--elastic-yellow)" },
  { name: "Synthetics Availability", target: "99%", color: "var(--elastic-pink)" },
  { name: "Synthetics Latency", target: "90% < 3s", color: "var(--elastic-teal)" },
];

export default function SLOWorkflowSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="max-w-5xl w-full">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(0,191,179,0.15)", color: "var(--elastic-teal)", border: "1px solid rgba(0,191,179,0.3)" }}>
            Demo 2
          </div>
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">SLO Automation Workflow</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          SLO Coverage, On Autopilot
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-base mb-6">
          Every 24 hours, this workflow ensures every service has complete SLO coverage — idempotent, consistent, automatic.
        </p>

        <div className="grid grid-cols-4 gap-3 mb-5">
          {steps.slice(0, 4).map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${i + 1} rounded-xl p-3.5 flex gap-2.5`}
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Icon size={14} style={{ color: s.color }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: s.color }}>{s.step}</div>
                  <div className="text-white font-semibold text-xs mb-1">{s.title}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {steps.slice(4).map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 3, 5)} rounded-xl p-3.5 flex gap-2.5`}
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Icon size={14} style={{ color: s.color }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: s.color }}>{s.step}</div>
                  <div className="text-white font-semibold text-xs mb-1">{s.title}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up-delay-5 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">5 SLOs Created Per Run</div>
          <div className="flex gap-2 flex-wrap">
            {sloTypes.map((slo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                style={{ background: `${slo.color}12`, border: `1px solid ${slo.color}30` }}
              >
                <span className="font-semibold text-white/80">{slo.name}</span>
                <span className="font-mono" style={{ color: slo.color }}>{slo.target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
