import { Bell, Brain, FileText, MessageSquare, Link, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Bell,
    color: "var(--elastic-pink)",
    bg: "rgba(240,78,152,0.15)",
    border: "rgba(240,78,152,0.35)",
    step: "Trigger",
    title: "Alert Fires",
    desc: "Any Kibana alert (APM, logs, metrics, synthetics) triggers the workflow automatically",
  },
  {
    icon: Brain,
    color: "var(--elastic-blue)",
    bg: "rgba(0,119,204,0.15)",
    border: "rgba(0,119,204,0.35)",
    step: "Step 1",
    title: "AI Investigates",
    desc: "SRE Agent queries traces, logs, and metrics — reasons about root causes with full context",
  },
  {
    icon: FileText,
    color: "var(--elastic-teal)",
    bg: "rgba(0,191,179,0.15)",
    border: "rgba(0,191,179,0.35)",
    step: "Steps 2–3",
    title: "Generate Case Content",
    desc: "AI drafts a precise case title and description based on its investigation findings",
  },
  {
    icon: MessageSquare,
    color: "var(--elastic-yellow)",
    bg: "rgba(254,197,20,0.15)",
    border: "rgba(254,197,20,0.35)",
    step: "Step 4–5",
    title: "Create Case + Attach Alert",
    desc: "Case is created in Kibana Observability and the triggering alert is attached automatically",
  },
  {
    icon: Link,
    color: "var(--elastic-blue)",
    bg: "rgba(0,119,204,0.15)",
    border: "rgba(0,119,204,0.35)",
    step: "Steps 6–7",
    title: "Add AI Reasoning Trail",
    desc: "Full investigation steps added as comment — links to Discover queries, tool calls, results",
  },
  {
    icon: CheckCircle2,
    color: "var(--elastic-teal)",
    bg: "rgba(0,191,179,0.15)",
    border: "rgba(0,191,179,0.35)",
    step: "Step 8",
    title: "RCA Summary Posted",
    desc: "Human-readable root cause analysis added to the case — ready for the on-call engineer",
  },
];

export default function RCAWorkflowSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(240,78,152,0.15)", color: "var(--elastic-pink)", border: "1px solid rgba(240,78,152,0.3)" }}>
            Demo 1
          </div>
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Root Cause Analysis Workflow</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          Alert → Case in Under 10 Minutes
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-base mb-8">
          From an alert firing to a fully documented case — with AI investigation — automatically.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`animate-fade-up-delay-${Math.min(i + 1, 5)} rounded-xl p-4 flex gap-3`}
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${s.color}20` }}>
                    <Icon size={16} style={{ color: s.color }} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: s.color }}>{s.step}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.title}</div>
                  <div className="text-white/50 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up-delay-5 mt-5 flex items-center gap-2 text-white/35 text-xs">
          <span>⏱</span>
          <span>Total wall time: ~10 minutes (AI investigation) &nbsp;|&nbsp; Human time required: 0 minutes</span>
        </div>
      </div>
    </div>
  );
}
