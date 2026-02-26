export default function RCADeepDiveSlide() {
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
          {/* Code panel */}
          <div className="animate-fade-up-delay-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs font-mono">rca-workflow.yaml</span>
            </div>
            <div className="p-4 code-block text-xs overflow-auto" style={{ background: "#0D1117", maxHeight: "380px" }}>
              <pre className="text-white/70 whitespace-pre leading-relaxed">{`<span style="color:#58a6ff">name</span>: <span style="color:#a5d6ff">🚨 Root Cause Analysis Workflow</span>
<span style="color:#58a6ff">triggers</span>:
  - <span style="color:#58a6ff">type</span>: <span style="color:#a5d6ff">alert</span>   <span style="color:#8b949e"># fires on any Kibana alert</span>

<span style="color:#58a6ff">steps</span>:
  - <span style="color:#58a6ff">name</span>: rca_analysis
    <span style="color:#58a6ff">type</span>: kibana.request
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">method</span>: POST
      <span style="color:#58a6ff">path</span>: /api/agent_builder/converse
      <span style="color:#58a6ff">body</span>:
        <span style="color:#58a6ff">agent_id</span>: sre-agent
        <span style="color:#58a6ff">input</span>: |
          Investigate: <span style="color:#f78166">{{ event | json }}</span>
          Provide possible root causes.
    <span style="color:#58a6ff">timeout</span>: <span style="color:#a5d6ff">10m</span>

  - <span style="color:#58a6ff">name</span>: create_case_title
    <span style="color:#58a6ff">type</span>: kibana.request
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">body</span>:
        <span style="color:#58a6ff">agent_id</span>: sre-agent
        <span style="color:#58a6ff">conversation_id</span>: <span style="color:#f78166">{{ steps.rca_analysis.output
          .conversation_id }}</span>
        <span style="color:#58a6ff">input</span>: <span style="color:#a5d6ff">Generate a case title. Return only the title.</span>

  - <span style="color:#58a6ff">name</span>: create_case
    <span style="color:#58a6ff">type</span>: kibana.createCaseDefaultSpace
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">title</span>: <span style="color:#f78166">{{ steps.create_case_title.output
        .response.message }}</span>
      <span style="color:#58a6ff">description</span>: <span style="color:#f78166">{{ steps.create_case_description
        .output.response.message }}</span>
      <span style="color:#58a6ff">owner</span>: <span style="color:#a5d6ff">observability</span>

  - <span style="color:#58a6ff">name</span>: addReasoningToCase
    <span style="color:#58a6ff">type</span>: kibana.request
    <span style="color:#58a6ff">with</span>:
      <span style="color:#58a6ff">body</span>:
        <span style="color:#58a6ff">type</span>: user
        <span style="color:#58a6ff">comment</span>: |
          <span style="color:#a5d6ff">## 🔍 AI Investigation Summary</span>
          <span style="color:#a5d6ff">[View Conversation]({{ kibanaBaseUrl }}/...)</span>
          <span style="color:#f78166">{%- for round in steps.getConversation
            .output.rounds %}</span>
          <span style="color:#8b949e"># Renders each reasoning + tool call</span>`}</pre>
            </div>
          </div>

          {/* Key callouts */}
          <div className="animate-fade-up-delay-2 flex flex-col gap-3">
            {[
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
