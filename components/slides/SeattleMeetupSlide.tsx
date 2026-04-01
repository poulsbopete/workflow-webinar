import { Sparkles, Users, MonitorPlay, CheckCircle2, ExternalLink } from "lucide-react";

const TRACK_LABEL = "Elastic Autonomous Observability";

export default function SeattleMeetupSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-blue)" }} />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F04E98" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEC514" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#00BFB3" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#0077CC" }} />
          </div>
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Elastic Webinar + Lab</span>
        </div>

        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          From Alert to Resolution
        </h2>
        <p className="animate-fade-up-delay-1 text-xl mb-6" style={{ color: "var(--elastic-teal)" }}>
          Keep going in Instruqt — {TRACK_LABEL}
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="animate-fade-up-delay-2 card-glass rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,119,204,0.2)", border: "1px solid rgba(0,119,204,0.4)" }}>
                <Sparkles size={18} style={{ color: "var(--elastic-blue)" }} />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">Webinar</div>
                <div className="text-white/50 text-sm leading-relaxed">
                  Elastic Workflows: AI-assisted RCA, automated SLO operations, and native Kibana orchestration — no extra glue code.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
                <Users size={18} style={{ color: "var(--elastic-teal)" }} />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">Audience</div>
                <div className="text-white/50 text-sm">SREs, DevOps, platform engineers, and anyone shipping reliability on Elastic Observability.</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-3 rounded-xl p-6 flex flex-col" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.3)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
                <MonitorPlay size={18} style={{ color: "var(--elastic-teal)" }} />
              </div>
              <div>
                <div className="text-white font-semibold">Workshop track</div>
                <div className="text-white/45 text-xs">Instruqt · {TRACK_LABEL}</div>
              </div>
            </div>
            <p className="text-white/55 text-xs mb-3">
              The track runs in <span className="text-white/75">Elastic Serverless</span> inside the browser — same Observability surface your audience uses. Workflows are now first-class in the lab: open <span className="text-white/75">Observability → Workflows</span> to explore what ships with the sandbox.
            </p>
            <div className="space-y-2 mb-4 flex-1">
              {[
                "4 pre-configured AI response workflows (alert → investigate → case → remediate)",
                "Kibana Workflows UI: create, run, and inspect executions — no local install",
                "ES|QL alert rules, dashboards, SLOs, and an investigation agent wired to real signals",
                "Patterns you can lift into your own Serverless or self-managed stacks",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/55">
                  <CheckCircle2 size={12} className="flex-shrink-0" style={{ color: "var(--elastic-teal)" }} />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="https://play.instruqt.com/elastic/invite/xwcuwhhpxfco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--elastic-teal), var(--elastic-blue))", color: "white" }}
            >
              <ExternalLink size={16} />
              Open Instruqt lab
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-4 rounded-xl px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/40 text-xs">
            Track (admin):{" "}
            <a
              href="https://play.instruqt.com/manage/elastic/tracks/elastic-autonomous-observability"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--elastic-blue)] hover:underline"
            >
              elastic-autonomous-observability
            </a>
          </p>
          <p className="text-white/35 text-xs">Attendees: use the invite button above.</p>
        </div>
      </div>
    </div>
  );
}
