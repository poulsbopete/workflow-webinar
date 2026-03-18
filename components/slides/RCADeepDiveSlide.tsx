export default function RCADeepDiveSlide() {
  const yamlSnippet = `name: Root Cause Analysis (RCA) Workflow
triggers:
  - type: alert

steps:
  - name: rca_analysis
    type: kibana.request
    with:
      method: POST
      path: /api/agent_builder/converse
      body:
        agent_id: sre-agent
        input: |
          Investigate the following alerts: {{ event | json }}
          and provide possible root causes.
    timeout: 10m

  - name: create_case_title
    type: kibana.request
    with:
      path: /api/agent_builder/converse
      body:
        agent_id: sre-agent
        conversation_id: "{{ steps.rca_analysis.output.conversation_id }}"
        input: Generate a case title. Return only the title.

  - name: create_case_description
    type: kibana.request
    with:
      body:
        conversation_id: "{{ steps.rca_analysis.output.conversation_id }}"
        input: Generate a case description.

  - name: create_case
    type: kibana.createCaseDefaultSpace
    with:
      title: "{{ steps.create_case_title.output.response.message }}"
      description: "{{ steps.create_case_description.output.response.message }}"
      owner: observability

  - name: addReasoningToCase
    type: kibana.request
    with:
      body:
        type: user
        comment: |
          ## AI Investigation Summary
          {% for round in steps.getConversation.output.rounds %}
          ... reasoning and tool calls ...
          {% endfor %}`;

  const callouts = [
    {
      color: "var(--elastic-pink)",
      bg: "rgba(240,78,152,0.1)",
      border: "rgba(240,78,152,0.25)",
      title: "Conversation Continuity",
      desc: "The same conversation_id is threaded across multiple steps — the AI remembers its full investigation when asked to draft the title and description.",
    },
    {
      color: "var(--elastic-blue)",
      bg: "rgba(0,119,204,0.1)",
      border: "rgba(0,119,204,0.25)",
      title: "Liquid Templating",
      desc: "{{ event | json }} passes the full alert payload to the AI. Step outputs are chained with dot notation: steps.rca_analysis.output.conversation_id",
    },
    {
      color: "var(--elastic-teal)",
      bg: "rgba(0,191,179,0.1)",
      border: "rgba(0,191,179,0.25)",
      title: "Reasoning Trail in the Case",
      desc: "The addReasoningToCase step loops through every AI reasoning step and tool call, rendering links to Discover queries with pre-filled ES|QL.",
    },
    {
      color: "var(--elastic-yellow)",
      bg: "rgba(254,197,20,0.1)",
      border: "rgba(254,197,20,0.25)",
      title: "Native Case Integration",
      desc: "kibana.createCaseDefaultSpace is a built-in step type — no API credentials needed, no external webhooks, no middleware.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-pink)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(240,78,152,0.15)", color: "var(--elastic-pink)", border: "1px solid rgba(240,78,152,0.3)" }}>
            Demo 1 · Deep Dive
          </div>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-6">
          Inside the RCA Workflow
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Code panel - plain YAML */}
          <div className="animate-fade-up-delay-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">rca-root-cause-analysis-workflow.yaml</span>
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
