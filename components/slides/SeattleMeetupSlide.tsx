import { Calendar, MapPin, ExternalLink, MonitorPlay } from "lucide-react";

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
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Join Us In Person</span>
        </div>

        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          Elastic Seattle User Group
        </h2>
        <p className="animate-fade-up-delay-1 text-xl mb-8" style={{ color: "var(--elastic-teal)" }}>
          Real-Time Data to AI Workflows: Kafka, Elasticsearch &amp; Observability in Action
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Event details */}
          <div className="animate-fade-up-delay-2 card-glass rounded-xl p-6 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,119,204,0.2)", border: "1px solid rgba(0,119,204,0.4)" }}>
                <Calendar size={18} style={{ color: "var(--elastic-blue)" }} />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">Monday, March 16, 2026</div>
                <div className="text-white/50 text-sm">4:30 PM – 6:30 PM PDT</div>
                <div className="text-white/40 text-xs mt-1">Talk at 5:45 PM · AI-powered Workflows using Elastic O11Y</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
                <MapPin size={18} style={{ color: "var(--elastic-teal)" }} />
              </div>
              <div>
                <div className="text-white font-semibold mb-0.5">AWS Skills Center</div>
                <div className="text-white/50 text-sm">1007 Stewart St, 2nd Floor</div>
                <div className="text-white/50 text-sm">Seattle, WA 98101</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/8">
              <a
                href="https://www.meetup.com/elastic-seattle-user-group/events/313065503/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(0,119,204,0.2)", border: "1px solid rgba(0,119,204,0.4)", color: "var(--elastic-blue)" }}
              >
                <ExternalLink size={14} />
                RSVP on Meetup
              </a>
            </div>
          </div>

          {/* Workshop CTA */}
          <div className="animate-fade-up-delay-3 rounded-xl p-6 flex flex-col" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.3)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
                <MonitorPlay size={18} style={{ color: "var(--elastic-teal)" }} />
              </div>
              <div>
                <div className="text-white font-semibold">Hands-On Workshop</div>
                <div className="text-white/45 text-xs">Powered by Instruqt</div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
              Follow along with the live demo — build your own AI-powered RCA workflow and SLO automation in a real Elastic environment. No local setup required.
            </p>

            <div className="space-y-2 mb-5">
              {[
                "Pre-configured Elastic Serverless environment",
                "Step-by-step guided instructions",
                "Import the RCA & SLO workflows yourself",
                "Free to use during and after the event",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/55">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--elastic-teal)" }} />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://play.instruqt.com/elastic/invite/srtjgvdhxcke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, var(--elastic-teal), var(--elastic-blue))", color: "white" }}
            >
              <MonitorPlay size={16} />
              Start the Workshop
            </a>
          </div>
        </div>

        {/* Co-host callout */}
        <div className="animate-fade-up-delay-4 rounded-xl px-5 py-3 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-white/30 text-xs">Co-hosted with</div>
          <div className="w-px h-4 bg-white/10" />
          <div className="text-white/60 text-sm font-semibold">Seattle Apache Kafka Meetup</div>
          <div className="w-px h-4 bg-white/10" />
          <div className="text-white/45 text-xs">Also featuring: <span className="text-white/60">Viktor Gamov, Principal Developer Advocate @ Confluent</span></div>
        </div>
      </div>
    </div>
  );
}
