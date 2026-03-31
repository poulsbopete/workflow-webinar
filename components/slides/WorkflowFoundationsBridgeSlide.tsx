import { Play } from "lucide-react";

export default function WorkflowFoundationsBridgeSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,119,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,119,204,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
        <div className="animate-fade-up mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto" style={{ background: "rgba(0,191,179,0.2)", border: "1px solid rgba(0,191,179,0.4)" }}>
          <Play size={28} style={{ color: "var(--elastic-teal)" }} />
        </div>
        <div className="animate-fade-up text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Hands-on mindset</div>
        <h2 className="animate-fade-up-delay-1 text-4xl font-bold text-white mb-4">
          From foundations to live demos
        </h2>
        <p className="animate-fade-up-delay-2 text-white/55 text-lg leading-relaxed">
          Next we apply these building blocks to real observability patterns — RCA from alerts and SLO lifecycle automation — so you see end-to-end what&apos;s possible in production-style workflows.
        </p>
      </div>
    </div>
  );
}
