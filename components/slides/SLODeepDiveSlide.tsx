export default function SLODeepDiveSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-teal)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(0,191,179,0.15)", color: "var(--elastic-teal)", border: "1px solid rgba(0,191,179,0.3)" }}>
            Demo 2 · Deep Dive
          </div>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-6">
          Inside the SLO Workflow
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Code panel */}
          <div className="animate-fade-up-delay-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">slo-management-workflow.yaml</span>
            </div>
            <div className="p-4 code-block text-xs overflow-auto" style={{ background: "#0D1117", maxHeight: "390px" }}>
              <pre className="text-white/70 whitespace-pre leading-relaxed">{`<span style="color:#58a6ff">name</span>: <span style="color:#a5d6ff">SLO Management Workflow</span>
<span style="color:#58a6ff">triggers</span>:
  - <span style="color:#58a6ff">type</span>: <span style="color:#a5d6ff">scheduled</span>
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">every</span>: <span style="color:#a5d6ff">"24h"</span>
  - <span style="color:#58a6ff">type</span>: <span style="color:#a5d6ff">manual</span>   <span style="color:#8b949e"># also triggerable on-demand</span>

<span style="color:#58a6ff">steps</span>:
  - <span style="color:#58a6ff">name</span>: get-all-existing-slos
    <span style="color:#58a6ff">type</span>: http
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">url</span>: <span style="color:#a5d6ff">'https://&lt;your-cloud&gt;/api/observability/slos'</span>
      <span style="color:#58a6ff">method</span>: <span style="color:#a5d6ff">GET</span>

  <span style="color:#8b949e"># Delete by stable IDs — 404 is fine</span>
  - <span style="color:#58a6ff">name</span>: delete-slo-availability
    <span style="color:#58a6ff">type</span>: http
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">url</span>: <span style="color:#a5d6ff">'https://&lt;cloud&gt;/api/observability/slos/availability-slo'</span>
      <span style="color:#58a6ff">method</span>: <span style="color:#a5d6ff">DELETE</span>

  <span style="color:#8b949e"># Create with stable id (idempotent via POST)</span>
  - <span style="color:#58a6ff">name</span>: create-slo-availability
    <span style="color:#58a6ff">type</span>: http
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">url</span>: <span style="color:#a5d6ff">'https://&lt;cloud&gt;/api/observability/slos'</span>
      <span style="color:#58a6ff">method</span>: <span style="color:#a5d6ff">POST</span>
      <span style="color:#58a6ff">body</span>:
        <span style="color:#58a6ff">id</span>: <span style="color:#a5d6ff">availability-slo</span>
        <span style="color:#58a6ff">name</span>: <span style="color:#a5d6ff">Service Availability</span>
        <span style="color:#58a6ff">indicator</span>:
          <span style="color:#58a6ff">type</span>: <span style="color:#a5d6ff">sli.apm.transactionErrorRate</span>
          <span style="color:#58a6ff">params</span>:
            <span style="color:#58a6ff">environment</span>: <span style="color:#a5d6ff">production</span>
            <span style="color:#58a6ff">service</span>: <span style="color:#a5d6ff">"*"</span>
            <span style="color:#58a6ff">transactionName</span>: <span style="color:#a5d6ff">"*"</span>
            <span style="color:#58a6ff">transactionType</span>: <span style="color:#a5d6ff">request</span>
        <span style="color:#58a6ff">objective</span>:
          <span style="color:#58a6ff">target</span>: <span style="color:#f78166">0.95</span>
          <span style="color:#58a6ff">timeslicesTarget</span>: <span style="color:#f78166">0.9</span>
          <span style="color:#58a6ff">timeslicesWindow</span>: <span style="color:#a5d6ff">"1h"</span>
        <span style="color:#58a6ff">timeWindow</span>:
          <span style="color:#58a6ff">duration</span>: <span style="color:#a5d6ff">7d</span>
          <span style="color:#58a6ff">type</span>: <span style="color:#a5d6ff">rolling</span>

  <span style="color:#8b949e"># 409 Conflict = already exists = success</span>
  <span style="color:#8b949e"># Repeat pattern for all 5 SLO types...</span>`}</pre>
            </div>
          </div>

          {/* Key callouts */}
          <div className="animate-fade-up-delay-2 flex flex-col gap-3">
            {[
              {
                color: "var(--elastic-teal)",
                bg: "rgba(0,191,179,0.1)",
                border: "rgba(0,191,179,0.25)",
                title: "Dual-Trigger Pattern",
                desc: "The workflow runs every 24 hours automatically, but also supports manual runs. This means your on-call can force a re-sync at any time without modifying the workflow.",
              },
              {
                color: "var(--elastic-yellow)",
                bg: "rgba(254,197,20,0.1)",
                border: "rgba(254,197,20,0.25)",
                title: "Delete-then-Create = Idempotency",
                desc: "Rather than checking if an SLO exists before creating it, we delete by stable ID (404 is OK) then create fresh. This guarantees exactly 5 SLOs after every run, no matter how many times it's run.",
              },
              {
                color: "var(--elastic-blue)",
                bg: "rgba(0,119,204,0.1)",
                border: "rgba(0,119,204,0.25)",
                title: "Stable IDs as Keys",
                desc: "Each SLO has a deterministic ID like 'availability-slo'. This makes the workflow predictable and the SLOs easy to reference from dashboards and alerts.",
              },
              {
                color: "var(--elastic-pink)",
                bg: "rgba(240,78,152,0.1)",
                border: "rgba(240,78,152,0.25)",
                title: "HTTP Step Type = Flexible",
                desc: "The http step type calls any external API — here it's the Kibana SLO API, but the same pattern works for PagerDuty, Jira, Slack, or any REST endpoint.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                <div className="font-semibold text-sm mb-1.5" style={{ color: c.color }}>{c.title}</div>
                <div className="text-white/55 text-xs leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
