export default function SLODeepDiveSlide() {
  const yamlSnippet = `name: SLO Management Workflow
triggers:
  - type: scheduled
    with:
      every: "24h"
  - type: manual   # also triggerable on-demand

steps:
  - name: get-all-existing-slos
    type: http
    with:
      url: 'https://<your-cloud>/api/observability/slos'
      method: GET

  # Delete by stable IDs — 404 is fine
  - name: delete-slo-availability
    type: http
    with:
      url: '.../api/observability/slos/availability-slo'
      method: DELETE

  # Create with stable id (idempotent via POST)
  - name: create-slo-availability
    type: http
    with:
      url: '.../api/observability/slos'
      method: POST
      body:
        id: availability-slo
        indicator:
          type: sli.apm.transactionErrorRate
        objective:
          target: 0.95
        timeWindow:
          duration: 7d
          type: rolling

  # 409 Conflict = already exists = success
  # Repeat pattern for all 5 SLO types...`;

  const callouts = [
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
  ];

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
          {/* Code panel - plain YAML, no HTML */}
          <div className="animate-fade-up-delay-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">slo-management-workflow.yaml</span>
            </div>
            <div className="p-4 code-block text-xs overflow-auto text-white/80" style={{ background: "#0D1117", maxHeight: "390px" }}>
              <pre className="whitespace-pre leading-relaxed font-mono">{yamlSnippet}</pre>
            </div>
          </div>

          {/* Key callouts */}
          <div className="animate-fade-up-delay-2 flex flex-col gap-3">
            {callouts.map((c, i) => (
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
