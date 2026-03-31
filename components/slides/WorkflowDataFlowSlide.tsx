export default function WorkflowDataFlowSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-6 blur-3xl translate-y-[-50%]" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-1">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Core concepts · Source: partner enablement</div>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-2">
          Data flow: passing information between steps
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-sm mb-6">
          Values move through the run via Liquid — <span className="text-white/70">{`{{ }}`}</span> templating ties steps together.
        </p>

        <div className="animate-fade-up-delay-2 grid grid-cols-2 gap-4 mb-5">
          {[
            { title: "Constants (consts)", desc: "Fixed in the definition — index names, thresholds, endpoints. {{ consts.indexName }}", color: "var(--elastic-blue)" },
            { title: "Inputs", desc: "Per-run parameters — user or API supplied. {{ inputs.alertId }}", color: "var(--elastic-teal)" },
            { title: "Step outputs", desc: "Each step exposes output to later steps. {{ steps.search.output.hits.total }}", color: "var(--elastic-yellow)" },
            { title: "Context", desc: "Execution metadata — run id, time, trigger payload. {{ execution.id }}", color: "var(--elastic-pink)" },
          ].map((b, i) => (
            <div key={i} className="rounded-xl p-4 card-glass">
              <h3 className="text-sm font-semibold mb-2" style={{ color: b.color }}>{b.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up-delay-3 rounded-xl overflow-hidden border border-white/10">
          <div className="px-4 py-2 text-xs text-white/40 bg-white/5">Example</div>
          <pre className="p-4 text-[11px] leading-relaxed text-white/70 font-mono overflow-x-auto" style={{ background: "#0D1117" }}>{`steps:
  - id: enrich
    type: elasticsearch.search
    index: "{{ consts.indexName }}"
    body:
      query:
        term:
          ip: "{{ inputs.sourceIp }}"
  - id: notify
    type: connector.slack
    channel: "#alerts"
    message: |
      Found {{ steps.enrich.output.hits.total.value }} matches for {{ inputs.sourceIp }}`}</pre>
        </div>
      </div>
    </div>
  );
}
