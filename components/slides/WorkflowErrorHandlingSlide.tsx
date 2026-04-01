export default function WorkflowErrorHandlingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-pink)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-1">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Core concepts · Elastic Workflows</div>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-2">
          Error handling: resilient workflows
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-sm mb-6">
          Processing order in failures: <span className="text-white/70">retry → fallback → continue</span>
        </p>

        <div className="animate-fade-up-delay-2 grid grid-cols-3 gap-4">
          <div className="rounded-xl p-5" style={{ background: "rgba(0,119,204,0.08)", border: "1px solid rgba(0,119,204,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-2" style={{ color: "var(--elastic-blue)" }}>Retry</h3>
            <p className="text-white/50 text-xs leading-relaxed mb-3">
              Automatically retry failed steps with configurable attempts and delays.
            </p>
            <pre className="text-[10px] text-white/45 font-mono whitespace-pre-wrap rounded-lg p-3 leading-relaxed" style={{ background: "#0D1117" }}>{`on_failure:
  retry:
    attempts: 3
    delay: 5s`}</pre>
          </div>
          <div className="rounded-xl p-5" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-2" style={{ color: "var(--elastic-teal)" }}>Fallback</h3>
            <p className="text-white/50 text-xs leading-relaxed mb-3">
              Run alternate steps after retries are exhausted — graceful degradation.
            </p>
            <pre className="text-[10px] text-white/45 font-mono whitespace-pre-wrap rounded-lg p-3 leading-relaxed" style={{ background: "#0D1117" }}>{`on_failure:
  fallback:
    - id: backup
      type: console`}</pre>
          </div>
          <div className="rounded-xl p-5" style={{ background: "rgba(254,197,20,0.06)", border: "1px solid rgba(254,197,20,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-2" style={{ color: "var(--elastic-yellow)" }}>Continue</h3>
            <p className="text-white/50 text-xs leading-relaxed mb-3">
              Skip non-critical failures and proceed — optional steps won&apos;t block the rest of the workflow.
            </p>
            <pre className="text-[10px] text-white/45 font-mono whitespace-pre-wrap rounded-lg p-3 leading-relaxed" style={{ background: "#0D1117" }}>{`on_failure:
  continue: true`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
