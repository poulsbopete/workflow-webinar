import { Briefcase, Sparkles, ExternalLink } from "lucide-react";

const highlights = [
  "Elastic Workflows and AI-first observability narrative",
  "Partner & field enablement for solution consultants and sellers",
  "Grounding demos in how teams actually adopt automation",
];

export default function JenAboutSpeakerSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-pink)" }} />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Co-presenter</div>
        </div>

        <div className="flex gap-10 items-start">
          <div className="flex-1 animate-fade-up-delay-1">
            <h2 className="text-5xl font-bold text-white mb-2">
              Jen Luther Thomas
            </h2>
            <p className="text-xl mb-4" style={{ color: "var(--elastic-pink)" }}>
              Product Marketing · Elastic
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              I focus on how Elastic brings AI, Workflows, and Observability together for teams who need to move from raw signals to action — with messaging and enablement that match how practitioners actually work.
            </p>

            <div className="space-y-2 mb-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <Sparkles size={14} style={{ color: "var(--elastic-yellow)" }} className="flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://www.elastic.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "rgba(240,78,152,0.15)", border: "1px solid rgba(240,78,152,0.35)", color: "var(--elastic-pink)" }}
            >
              <ExternalLink size={14} />
              elastic.co
            </a>
          </div>

          <div className="animate-fade-up-delay-2 w-72 flex-shrink-0">
            <div className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={18} style={{ color: "var(--elastic-teal)" }} />
                <span className="text-white font-semibold text-sm">Today</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                I&apos;ll walk through the foundational pieces of Workflows (triggers, steps, data flow, resilience) so we all share the same vocabulary — then hand off to Peter for deeper patterns in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
