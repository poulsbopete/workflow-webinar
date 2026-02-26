import { ArrowRight } from "lucide-react";

const unlocks = [
  {
    color: "var(--elastic-blue)",
    bg: "rgba(0,119,204,0.1)",
    border: "rgba(0,119,204,0.25)",
    persona: "SRE / On-Call Engineer",
    before: "Wake up to an alert, spend 45 min investigating across dashboards, write up findings in Slack",
    after: "Wake up to a Kibana case already created with AI investigation, root cause summary, and Discover links",
    unlock: "Your MTTR drops — and your 2am gets less painful",
  },
  {
    color: "var(--elastic-teal)",
    bg: "rgba(0,191,179,0.1)",
    border: "rgba(0,191,179,0.25)",
    persona: "DevOps / Platform Engineer",
    before: "Manually create SLOs for every new service, remember to update them when services change",
    after: "Deploy a new service, it automatically has 5 SLOs with standard targets by the next morning",
    unlock: "Reliability coverage scales with your service growth — automatically",
  },
  {
    color: "var(--elastic-pink)",
    bg: "rgba(240,78,152,0.1)",
    border: "rgba(240,78,152,0.25)",
    persona: "Cloud / Infrastructure Engineer",
    before: "Build custom Lambda functions or external scripts to automate Elastic tasks, maintain credentials and deployments",
    after: "Write a YAML workflow in Kibana — no external infra, no credential management, full audit trail",
    unlock: "Automation lives with your data, not in a separate toolchain",
  },
];

const quickStart = [
  "Navigate to Kibana → Stack Management → Workflows",
  "Create an Agent Builder agent (SRE Agent with ES|QL + APM tools)",
  "Import the RCA workflow YAML — attach to any alert rule",
  "Watch your first automated investigation happen",
];

export default function ExistingUsersSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">For Existing Elastic Users</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-6">
          What This Unlocks for You
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {unlocks.map((u, i) => (
            <div
              key={i}
              className={`animate-fade-up-delay-${i + 1} rounded-xl p-4`}
              style={{ background: u.bg, border: `1px solid ${u.border}` }}
            >
              <div className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: u.color }}>{u.persona}</div>

              <div className="mb-2">
                <div className="text-white/35 text-xs uppercase tracking-widest mb-1">Before</div>
                <div className="text-white/60 text-xs leading-relaxed">{u.before}</div>
              </div>

              <div className="flex items-center gap-1 my-2">
                <div className="flex-1 h-px" style={{ background: u.color, opacity: 0.3 }} />
                <ArrowRight size={12} style={{ color: u.color }} />
                <div className="flex-1 h-px" style={{ background: u.color, opacity: 0.3 }} />
              </div>

              <div className="mb-3">
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: u.color }}>After</div>
                <div className="text-white/80 text-xs leading-relaxed">{u.after}</div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="text-white/50 text-xs italic">{u.unlock}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-up-delay-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Get Started in 4 Steps</div>
          <div className="grid grid-cols-4 gap-3">
            {quickStart.map((step, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" style={{ background: "var(--elastic-blue)", color: "white" }}>{i + 1}</div>
                <div className="text-white/60 text-xs leading-relaxed">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
