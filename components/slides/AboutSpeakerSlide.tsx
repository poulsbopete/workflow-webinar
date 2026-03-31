import { Briefcase, Sparkles, ExternalLink } from "lucide-react";

const companies = ["New Relic", "Chronosphere", "Splunk", "Elastic"];
const highlights = [
  "10+ years of observability expertise",
  "50+ AI-powered solutions delivered",
  "AI transformation built on battle-tested O11Y",
];

export default function AboutSpeakerSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-blue)" }} />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Co-presenting</div>
        </div>

        <div className="flex gap-10 items-start">
          {/* Left: name, title, bio */}
          <div className="flex-1 animate-fade-up-delay-1">
            <h2 className="text-5xl font-bold text-white mb-2">
              Peter Simkins
            </h2>
            <p className="text-xl mb-4" style={{ color: "var(--elastic-teal)" }}>
              AI Solutions Architect &amp; Observability Expert
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Sr. Solutions Architect at Elastic. I design and implement AI-powered solutions that solve real business problems—from intelligent automation to predictive analytics—grounded in 10+ years of observability and monitoring. Where machine learning meets operational excellence.
            </p>

            <div className="space-y-2 mb-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <Sparkles size={14} style={{ color: "var(--elastic-yellow)" }} className="flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://poulsbopete.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: "rgba(0,119,204,0.2)", border: "1px solid rgba(0,119,204,0.4)", color: "var(--elastic-blue)" }}
              >
                <ExternalLink size={14} />
                poulsbopete.com
              </a>
              <a
                href="https://www.linkedin.com/in/poulsbopete/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: "rgba(0,119,204,0.2)", border: "1px solid rgba(0,119,204,0.4)", color: "var(--elastic-blue)" }}
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: companies + visual */}
          <div className="animate-fade-up-delay-2 w-72 flex-shrink-0">
            <div className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={18} style={{ color: "var(--elastic-teal)" }} />
                <span className="text-white font-semibold text-sm">Observability track record</span>
              </div>
              <div className="space-y-2">
                {companies.map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--elastic-teal)" }} />
                    <span className="text-white/85">{company}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-4 leading-relaxed">
                4 leading observability companies—now helping teams unlock AI and workflows on Elastic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
