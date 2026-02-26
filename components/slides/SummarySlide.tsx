import { Zap, GitBranch, Activity, MessageCircle } from "lucide-react";

const takeaways = [
  {
    icon: Zap,
    color: "var(--elastic-blue)",
    title: "Workflows = Native Automation",
    desc: "YAML-defined, AI-capable, event-driven orchestration — built into Kibana, no external tools needed.",
  },
  {
    icon: GitBranch,
    color: "var(--elastic-pink)",
    title: "RCA: Alert → Case Automatically",
    desc: "AI investigates, drafts, and creates a fully documented case in under 10 minutes. Zero human intervention.",
  },
  {
    icon: Activity,
    color: "var(--elastic-teal)",
    title: "SLO: Autopilot Reliability Coverage",
    desc: "5 standard SLOs per service, created and maintained every 24 hours — idempotent, consistent, scalable.",
  },
  {
    icon: MessageCircle,
    color: "var(--elastic-yellow)",
    title: "Start Where You Are",
    desc: "If you're already on Elastic Observability, you already have everything you need to run these workflows today.",
  },
];

const outline = [
  "Main changes and advantages of Workflows — the new automation layer in Elastic",
  "Key differentiating use cases — RCA and SLO automation that no single tool delivers today",
  "What this unlocks for SREs, DevOps, and Cloud Engineers already using Elastic",
];

export default function SummarySlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-blue)" }} />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F04E98" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEC514" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#00BFB3" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0077CC" }} />
          </div>
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Key Takeaways</span>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-8">
          Smarter Observability Starts Here
        </h2>

        <div className="grid grid-cols-4 gap-4 mb-8">
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

        {/* Webinar outline */}
        <div className="animate-fade-up-delay-5 rounded-xl p-5 mb-6" style={{ background: "rgba(0,119,204,0.08)", border: "1px solid rgba(0,119,204,0.2)" }}>
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--elastic-blue)" }}>Webinar Outline Covered</div>
          <div className="space-y-2">
            {outline.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--elastic-blue)", opacity: 0.7 }}>
                  <span className="text-white text-xs font-bold" style={{ fontSize: "9px" }}>{i + 1}</span>
                </div>
                <span className="text-white/65 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-delay-5 flex items-center justify-between">
          <div className="text-white/30 text-sm">
            Questions? Let&apos;s dig in.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/40 text-xs">Live Q&amp;A</span>
          </div>
        </div>
      </div>
    </div>
  );
}
