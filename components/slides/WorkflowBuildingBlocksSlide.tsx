import { Bell, ArrowRight, Search, Brain, MessageSquare, Share2 } from "lucide-react";

export default function WorkflowBuildingBlocksSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Start simple</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          Every workflow has three parts
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-base mb-8 max-w-3xl">
          Before we go deep on YAML and field patterns, the mental model is the same: something happens → you do work → something gets updated or notified.
        </p>

        <div className="animate-fade-up-delay-2 flex items-stretch gap-3 mb-8">
          {/* Triggers */}
          <div className="flex-1 rounded-xl p-5 card-glass">
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--elastic-pink)" }}>Triggers</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Bell size={14} style={{ color: "var(--elastic-pink)" }} /> Alert fires</li>
              <li>Schedule (cron)</li>
              <li>Webhook / external event</li>
            </ul>
          </div>

          <div className="flex items-center justify-center px-1 text-white/20">
            <ArrowRight size={24} />
          </div>

          {/* Steps */}
          <div className="flex-1 rounded-xl p-5" style={{ background: "rgba(0,119,204,0.08)", border: "1px solid rgba(0,119,204,0.25)" }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--elastic-blue)" }}>Steps</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Search size={14} style={{ color: "var(--elastic-blue)" }} /> Run ES|QL over your data</li>
              <li className="flex items-center gap-2"><Brain size={14} style={{ color: "var(--elastic-blue)" }} /> Call an agent (Agent Builder)</li>
              <li>HTTP, Kibana API, custom logic</li>
            </ul>
          </div>

          <div className="flex items-center justify-center px-1 text-white/20">
            <ArrowRight size={24} />
          </div>

          {/* Outputs */}
          <div className="flex-1 rounded-xl p-5" style={{ background: "rgba(0,191,179,0.08)", border: "1px solid rgba(0,191,179,0.25)" }}>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--elastic-teal)" }}>Outputs</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><MessageSquare size={14} style={{ color: "var(--elastic-teal)" }} /> Create an observability case</li>
              <li className="flex items-center gap-2"><Share2 size={14} style={{ color: "var(--elastic-teal)" }} /> Slack, Teams, PagerDuty…</li>
              <li>Tickets, webhooks, follow-up alerts</li>
            </ul>
          </div>
        </div>

        <div className="animate-fade-up-delay-3 rounded-xl px-5 py-4 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/55 text-sm">
            Next: the same recipe at scale — <strong className="text-white/80">end-to-end RCA</strong> and <strong className="text-white/80">SLO automation</strong> from the field (and room for organic Q&amp;A along the way).
          </p>
        </div>
      </div>
    </div>
  );
}
