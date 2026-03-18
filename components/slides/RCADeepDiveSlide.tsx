import Image from "next/image";

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
        <h2 className="animate-fade-up text-4xl font-bold text-white mb-4">
          Inside the RCA Workflow
        </h2>
        <p className="animate-fade-up-delay-1 text-white/50 text-sm mb-4">
          Root Cause Analysis (RCA) Workflow in Kibana — workflow definition and execution.
        </p>

        {/* Elastic workflow UI screenshot */}
        <div className="animate-fade-up-delay-2 relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl" style={{ maxHeight: "52vh" }}>
          <Image
            src="/rca-workflow-kibana-ui.png"
            alt="Elastic Root Cause Analysis (RCA) Workflow in Kibana — workflow definition and executions panel"
            width={1200}
            height={720}
            className="w-full h-auto object-contain object-top"
            priority
          />
        </div>

        <div className="animate-fade-up-delay-3 mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-white/40">
          <span>Trigger: <span className="text-white/60">alert</span></span>
          <span>Steps: <span className="text-white/60">rca_analysis → create_case_title → create_case → addReasoningToCase</span></span>
          <span>Agent: <span className="text-white/60">sre-agent</span></span>
        </div>
      </div>
    </div>
  );
}
