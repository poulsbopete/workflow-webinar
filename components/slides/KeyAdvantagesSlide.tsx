import { Zap, Shield, GitMerge, Brain, BarChart3, Repeat } from "lucide-react";

const advantages = [
  {
    icon: Brain,
    color: "var(--elastic-blue)",
    title: "AI-First Design",
    desc: "Agent Builder agents are first-class citizens in workflows — not an afterthought. Chain multi-turn AI conversations across steps.",
  },
  {
    icon: Shield,
    color: "var(--elastic-teal)",
    title: "Built Into Your Stack",
    desc: "No external orchestration tools. Workflows live in Kibana, next to your data, alerts, dashboards, and cases.",
  },
  {
    icon: GitMerge,
    color: "var(--elastic-pink)",
    title: "Context-Aware Automation",
    desc: "Liquid templating passes alert data, step outputs, and metadata throughout the workflow — every step knows what happened before.",
  },
  {
    icon: Zap,
    color: "var(--elastic-yellow)",
    title: "Event-Driven & Scheduled",
    desc: "Trigger on alerts, webhooks, or cron schedules. One workflow definition handles all trigger types.",
  },
  {
    icon: BarChart3,
    color: "var(--elastic-blue)",
    title: "Full Observability of Automation",
    desc: "Every workflow execution is logged with step-by-step status, outputs, and timing — debug failures instantly.",
  },
  {
    icon: Repeat,
    color: "var(--elastic-teal)",
    title: "Idempotent by Design",
    desc: "Safe to re-run. Workflows handle 409 conflicts gracefully so scheduled jobs won't duplicate resources.",
  },
];

export default function KeyAdvantagesSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Why It Matters</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-8">
          Key Advantages
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 1, 5)} card-glass rounded-xl p-5 hover:border-white/20 transition-all duration-300`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${adv.color}20`, border: `1px solid ${adv.color}40` }}
                >
                  <Icon size={18} style={{ color: adv.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{adv.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
