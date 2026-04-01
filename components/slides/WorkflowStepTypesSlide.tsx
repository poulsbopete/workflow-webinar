export default function WorkflowStepTypesSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-1">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Core concepts · Elastic Workflows</div>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-2">
          Step types: building blocks of automation
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-sm mb-6">
          Mix Elasticsearch actions, external connectors, flow control, and AI — including Agent Builder agents — in one workflow.
        </p>

        <div className="animate-fade-up-delay-2 grid grid-cols-2 gap-4">
          <div className="rounded-xl p-5" style={{ background: "rgba(0,119,204,0.08)", border: "1px solid rgba(0,119,204,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-3" style={{ color: "var(--elastic-blue)" }}>Internal actions</h3>
            <ul className="text-white/55 text-xs space-y-1.5 font-mono">
              <li>elasticsearch.search · elasticsearch.index · bulk</li>
              <li>esql.query</li>
              <li>kibana.createCase · kibana.updateAlert · …</li>
            </ul>
          </div>
          <div className="rounded-xl p-5" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-3" style={{ color: "var(--elastic-teal)" }}>External actions</h3>
            <ul className="text-white/55 text-xs space-y-1.5 font-mono">
              <li>connector.slack · connector.jira</li>
              <li>connector.servicenow · connector.pagerduty</li>
              <li>connector.email · http (any REST API)</li>
            </ul>
          </div>
          <div className="rounded-xl p-5" style={{ background: "rgba(254,197,20,0.06)", border: "1px solid rgba(254,197,20,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-3" style={{ color: "var(--elastic-yellow)" }}>Flow control</h3>
            <ul className="text-white/55 text-xs space-y-1.5">
              <li>if / else · foreach · parallel · switch · sub-workflows</li>
            </ul>
          </div>
          <div className="rounded-xl p-5" style={{ background: "rgba(240,78,152,0.08)", border: "1px solid rgba(240,78,152,0.2)" }}>
            <h3 className="text-white font-semibold text-sm mb-3" style={{ color: "var(--elastic-pink)" }}>AI steps</h3>
            <ul className="text-white/55 text-xs space-y-1.5 font-mono">
              <li>ai.prompt · ai.classify · ai.summarize</li>
              <li>agent (Agent Builder) — structured outputs for next steps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
