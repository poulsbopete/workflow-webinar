import { Check, X } from "lucide-react";

const rows = [
  { capability: "Native to observability platform", elastic: true, others: false, note: "No context-switching" },
  { capability: "AI agent steps (multi-turn)", elastic: true, others: false, note: "Not just webhooks" },
  { capability: "Alert → Case automation", elastic: true, others: false, note: "End-to-end" },
  { capability: "ES|QL + AI in one flow", elastic: true, others: false, note: "Unique to Elastic" },
  { capability: "YAML + Kibana UI", elastic: true, others: "partial", note: "Accessible to all" },
  { capability: "Full step audit log", elastic: true, others: "partial", note: "Built-in debugging" },
  { capability: "No vendor lock-in for data", elastic: true, others: false, note: "Your data, your cluster" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={16} className="mx-auto" style={{ color: "var(--elastic-teal)" }} />;
  if (value === false) return <X size={16} className="mx-auto text-white/20" />;
  return <span className="text-white/40 text-xs">Partial</span>;
}

export default function CompetitiveDiffSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-64 rounded-full opacity-6 blur-3xl" style={{ background: "var(--elastic-blue)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up mb-2">
          <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">Market Position</div>
        </div>
        <h2 className="animate-fade-up text-5xl font-bold text-white mb-2">
          What Sets Us Apart
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-base mb-8 max-w-2xl">
          Other tools offer alert routing or runbooks. Elastic Workflows brings AI reasoning, data queries, and case management into a single automated loop.
        </p>

        <div className="animate-fade-up-delay-2 rounded-xl overflow-hidden border border-white/10">
          <table className="w-full">
            <thead>
              <tr style={{ background: "rgba(0,119,204,0.15)" }}>
                <th className="text-left px-5 py-3 text-white/60 text-xs font-semibold tracking-widest uppercase">Capability</th>
                <th className="px-5 py-3 text-center text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--elastic-teal)" }}>Elastic Workflows</th>
                <th className="px-5 py-3 text-center text-white/40 text-xs font-semibold tracking-widest uppercase">Other Tools</th>
                <th className="px-5 py-3 text-right text-white/40 text-xs font-semibold tracking-widest uppercase">Advantage</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-white/5 hover:bg-white/3 transition-colors"
                >
                  <td className="px-5 py-3 text-white/70 text-sm">{row.capability}</td>
                  <td className="px-5 py-3 text-center"><Cell value={row.elastic} /></td>
                  <td className="px-5 py-3 text-center"><Cell value={row.others} /></td>
                  <td className="px-5 py-3 text-right text-xs text-white/30">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="animate-fade-up-delay-3 mt-6 text-white/35 text-sm text-center">
          Compared to general-purpose automation tools like PagerDuty Automation, Opsgenie, or custom Lambda pipelines
        </div>
      </div>
    </div>
  );
}
