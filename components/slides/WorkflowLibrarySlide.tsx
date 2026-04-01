import { BookOpen, Library, ExternalLink } from "lucide-react";

const links = [
  {
    title: "Elastic Workflows — documentation",
    desc: "Concepts, YAML reference, and how to enable Workflows in Kibana.",
    href: "https://www.elastic.co/guide/en/kibana/current/workflows.html",
  },
  {
    title: "Workflow library & templates",
    desc: "Start from curated and community-oriented templates instead of blank YAML (in-product library — counts & UX evolve by release).",
    href: "https://www.elastic.co/guide/en/kibana/current/workflows.html",
  },
  {
    title: "Agent Builder",
    desc: "Build agents that use your Elastic data and tools, then call them from workflow steps.",
    href: "https://www.elastic.co/guide/en/kibana/current/agent-builder.html",
  },
];

export default function WorkflowLibrarySlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-7 blur-3xl" style={{ background: "var(--elastic-yellow)" }} />

      <div className="max-w-5xl w-full mx-auto">
        <div className="animate-fade-up flex items-center gap-3 mb-3">
          <Library size={20} style={{ color: "var(--elastic-yellow)" }} />
          <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">Resources</span>
        </div>
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-2">
          Elastic Workflow library &amp; next steps
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-sm mb-8 max-w-2xl">
          After the live session, use the in-product Workflow library to browse starting points — then customize YAML for your stacks. Official Elastic documentation and customer stories go deeper on workshops and positioning.
        </p>

        <div className="space-y-3 mb-8">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-fade-up-delay-${Math.min(i + 2, 5)} flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-white/5 border border-white/10`}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,119,204,0.15)", border: "1px solid rgba(0,119,204,0.3)" }}>
                <BookOpen size={16} style={{ color: "var(--elastic-blue)" }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-semibold text-sm">{l.title}</span>
                  <ExternalLink size={12} className="text-white/30 flex-shrink-0" />
                </div>
                <p className="text-white/45 text-xs mt-1 leading-relaxed">{l.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="animate-fade-up-delay-4 rounded-xl px-5 py-4 text-xs text-white/40" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          For the latest feature detail and release notes, start with the Workflows guide linked above — it stays current as the product evolves.
        </div>
      </div>
    </div>
  );
}
