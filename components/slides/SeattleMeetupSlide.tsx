import { Calendar, Users, MonitorPlay, Target, CheckCircle2, ExternalLink } from "lucide-react";

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
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Lunch &amp; Learn</span>
        </div>

        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          Cisco Lunch and Learn
        </h2>
        <p className="animate-fade-up-delay-1 text-xl mb-8" style={{ color: "var(--elastic-teal)" }}>
          O11Y Workflows · End-to-End Observability &amp; AI in Action
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Event details */}
          <div className="animate-fade-up-delay-2 card-glass rounded-xl p-6 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,119,204,0.2)", border: "1px solid rgba(0,119,204,0.4)" }}>
                <Calendar size={18} style={{ color: "var(--elastic-blue)" }} />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">Thursday, March 19, 2026</div>
                <div className="text-white/50 text-sm">11:00 AM (America/Chicago)</div>
                <div className="text-white/40 text-xs mt-1">40-minute hands-on workshop</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
                <Users size={18} style={{ color: "var(--elastic-teal)" }} />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">Audience</div>
                <div className="text-white/50 text-sm">Cisco · Technical practitioners, architects, and decision-makers evaluating Elastic for modern observability and AI-enhanced operations</div>
              </div>
            </div>
          </div>

          {/* Workshop content */}
          <div className="animate-fade-up-delay-3 rounded-xl p-6 flex flex-col" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.3)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
                <MonitorPlay size={18} style={{ color: "var(--elastic-teal)" }} />
              </div>
              <div>
                <div className="text-white font-semibold">Elastic Launch Demo</div>
                <div className="text-white/45 text-xs">End-to-End Observability &amp; AI in Action</div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Deploy a full Elastic observability stack and explore how logs, metrics, traces, and AI-powered insights work together in a realistic, production-style environment.
            </p>

            <div className="space-y-2 mb-4">
              <div className="text-white/45 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                <Target size={12} style={{ color: "var(--elastic-teal)" }} />
                What you&apos;ll learn
              </div>
              {[
                "How to deploy and run the Elastic Launch Demo environment",
                "How logs, metrics, and traces correlate within a single Elastic deployment",
                "How to investigate incidents using unified observability workflows",
                "How AI capabilities enhance troubleshooting and operational efficiency",
                "Architectural considerations for scaling observability in production",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/55">
                  <CheckCircle2 size={12} className="flex-shrink-0" style={{ color: "var(--elastic-teal)" }} />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://play.instruqt.com/elastic/invite/suxn4tc8lfiz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] mt-auto"
              style={{ background: "linear-gradient(135deg, var(--elastic-teal), var(--elastic-blue))", color: "white" }}
            >
              <ExternalLink size={16} />
              Start the Workshop
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="animate-fade-up-delay-4 rounded-xl px-5 py-3 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-white/45 text-sm">
            Hands-on workshop: ingest logs, metrics, and traces into Elasticsearch, visualize in Kibana, and explore cross-domain correlation, service maps, distributed tracing, and AI-accelerated root cause analysis.
          </div>
        </div>
      </div>
    </div>
  );
}
