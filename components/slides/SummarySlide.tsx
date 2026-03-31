import { Zap, Activity, BookOpen, Lightbulb, Heart, ArrowRight } from "lucide-react";
import ElasticByTheNumbers from "@/components/ElasticByTheNumbers";

const thinkFeelDo = [
  {
    icon: Lightbulb,
    color: "var(--elastic-yellow)",
    title: "Think",
    desc: "This is worth exploring — Workflows look approachable, and Agent Builder is a practical way to apply agentic AI to real operational work.",
  },
  {
    icon: Heart,
    color: "var(--elastic-pink)",
    title: "Feel",
    desc: "There’s a lot I could automate here — this feels like where observability is headed: less swivel-chair, more closed loops.",
  },
  {
    icon: ArrowRight,
    color: "var(--elastic-teal)",
    title: "Do",
    desc: "Dig into Elastic Workflows, Agent Builder, and automation in Observability — start with the lab, then a pilot in your own stack.",
  },
];

const takeaways = [
  {
    icon: Zap,
    color: "var(--elastic-blue)",
    title: "Orchestration + AI",
    desc: "Workflows run the playbook; agents reason on your telemetry inside the same flow.",
  },
  {
    icon: Activity,
    color: "var(--elastic-teal)",
    title: "RCA + SLO patterns",
    desc: "Field-ready examples you can adapt — from alert to case, and SLO lifecycle via APIs.",
  },
  {
    icon: BookOpen,
    color: "var(--elastic-yellow)",
    title: "Keep learning",
    desc: "Elastic Autonomous Observability on Instruqt — hands-on next step.",
  },
];

const labHighlights = [
  "Run Workflows in a real Kibana stack (no local install)",
  "Alert-driven RCA-style flows with Agent Builder",
  "SLOs via Workflows + Observability APIs",
  "Traces, logs, metrics, and cases in one automation loop",
];

export default function SummarySlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden overflow-y-auto">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="relative z-10 max-w-5xl w-full mx-auto py-4">
        <div className="animate-fade-up flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F04E98" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEC514" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#00BFB3" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0077CC" }} />
          </div>
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Recap</span>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-4">
          From Alert to Resolution
        </h2>

        <div className="animate-fade-up-delay-1 mb-4">
          <ElasticByTheNumbers variant="compact" />
        </div>

        <div className="animate-fade-up-delay-1 rounded-xl p-4 mb-4" style={{ background: "rgba(254,197,20,0.06)", border: "1px solid rgba(254,197,20,0.2)" }}>
          <div className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/50">Goals for you</div>
          <div className="grid grid-cols-3 gap-3">
            {thinkFeelDo.map((row, i) => {
              const Icon = row.icon;
              return (
                <div key={i} className="rounded-lg p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={14} style={{ color: row.color }} />
                    <span className="text-white font-semibold text-xs">{row.title}</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{row.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {takeaways.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className={`animate-fade-up-delay-${i + 2} card-glass rounded-xl p-3`}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2" style={{ background: `${t.color}20`, border: `1px solid ${t.color}40` }}>
                  <Icon size={14} style={{ color: t.color }} />
                </div>
                <h3 className="text-white font-semibold text-xs mb-1">{t.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up-delay-4 rounded-xl p-4" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.25)" }}>
          <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--elastic-teal)" }}>
            Instruqt · Elastic Autonomous Observability
          </div>
          <ul className="space-y-1">
            {labHighlights.map((line, i) => (
              <li key={i} className="text-white/55 text-xs flex gap-2">
                <span className="text-[var(--elastic-teal)] flex-shrink-0">→</span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up-delay-5 mt-4 flex items-center justify-between">
          <div className="text-white/30 text-sm">Questions welcome.</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/40 text-xs">Q&amp;A</span>
          </div>
        </div>
      </div>
    </div>
  );
}
