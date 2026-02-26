export default function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "var(--elastic-blue)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="relative z-10 text-center max-w-5xl px-8">
        {/* Elastic logo wordmark */}
        <div className="animate-fade-up flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full" style={{ background: "#F04E98" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FEC514" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#00BFB3" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#0077CC" }} />
          </div>
          <span className="text-white/60 text-sm font-semibold tracking-widest uppercase">Elastic</span>
        </div>

        <h1 className="animate-fade-up-delay-1 text-6xl font-bold text-white leading-tight mb-4">
          From Alert to Resolution
        </h1>
        <h2 className="animate-fade-up-delay-2 text-3xl font-light mb-6" style={{ color: "var(--elastic-teal)" }}>
          AI-Powered Workflows in Elastic Observability
        </h2>
        <p className="animate-fade-up-delay-3 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          How Elastic Workflows transforms manual toil into intelligent automation — giving SREs and DevOps teams their time back.
        </p>

        <div className="animate-fade-up-delay-4 flex items-center justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--elastic-blue)" }}>RCA</div>
            <div className="text-white/40 text-xs mt-1">Root Cause Analysis</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--elastic-teal)" }}>SLO</div>
            <div className="text-white/40 text-xs mt-1">Automated Management</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--elastic-pink)" }}>AI</div>
            <div className="text-white/40 text-xs mt-1">Agent-Driven</div>
          </div>
        </div>

        <div className="animate-fade-up-delay-5 mt-14 text-white/25 text-sm">
          Press <kbd className="px-2 py-1 rounded bg-white/10 text-white/50 font-mono text-xs">→</kbd> or{" "}
          <kbd className="px-2 py-1 rounded bg-white/10 text-white/50 font-mono text-xs">Space</kbd> to advance
        </div>
      </div>
    </div>
  );
}
