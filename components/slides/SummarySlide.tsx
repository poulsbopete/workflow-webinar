import { Zap, Activity, BookOpen } from "lucide-react";

const takeaways = [
  {
    icon: Zap,
    color: "var(--elastic-blue)",
    title: "Workflows in Kibana",
    desc: "Alert, schedule, or webhook triggers; AI and HTTP steps; full execution history.",
  },
  {
    icon: Activity,
    color: "var(--elastic-teal)",
    title: "RCA + SLO in code",
    desc: "Same YAML you version and review — from investigation to automated SLO coverage.",
  },
  {
    icon: BookOpen,
    color: "var(--elastic-yellow)",
    title: "Continue in the lab",
    desc: "Elastic Autonomous Observability on Instruqt — walk through Workflows end to end.",
  },
];

const labHighlights = [
  "Run Workflows in a real Kibana stack (no local install)",
  "Alert-driven RCA-style flows with Agent Builder",
  "Create and manage SLOs via Workflows + Observability APIs — patterns you can copy",
  "Connect automation to your telemetry: traces, logs, metrics, and cases in one loop",
];

export default function SummarySlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F04E98" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEC514" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#00BFB3" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0077CC" }} />
          </div>
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Recap</span>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-6">
          From Alert to Resolution
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {takeaways.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className={`animate-fade-up-delay-${i + 1} card-glass rounded-xl p-4`}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: `${t.color}20`, border: `1px solid ${t.color}40` }}>
                  <Icon size={16} style={{ color: t.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{t.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up-delay-4 rounded-xl p-5" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.25)" }}>
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--elastic-teal)" }}>
            Instruqt · Elastic Autonomous Observability
          </div>
          <p className="text-white/55 text-sm mb-3">
            Next step: open the lab on the final slide. The track walks autonomous observability patterns — including{' '}
            <strong className="text-white/80">SLOs created and maintained with Elastic Workflows</strong>
            {' '}alongside RCA-style automation.
          </p>
          <ul className="space-y-1.5">
            {labHighlights.map((line, i) => (
              <li key={i} className="text-white/60 text-xs flex gap-2">
                <span className="text-[var(--elastic-teal)] flex-shrink-0">→</span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up-delay-5 mt-5 flex items-center justify-between">
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
