"use client";

import { Building2, Globe2, Users, TrendingUp } from "lucide-react";

type Variant = "full" | "compact";

const stats = [
  {
    icon: Building2,
    value: "50%+",
    label: "Fortune 500",
    sub: "rely on Elastic",
    color: "var(--elastic-blue)",
  },
  {
    icon: Users,
    value: "21,500+",
    label: "Subscription",
    sub: "customers globally",
    color: "var(--elastic-teal)",
  },
  {
    icon: Globe2,
    value: "40+",
    label: "Countries",
    sub: "Elasticians worldwide",
    color: "var(--elastic-pink)",
  },
  {
    icon: TrendingUp,
    value: "112%",
    label: "Net expansion",
    sub: "recent quarters (approx.)",
    color: "var(--elastic-yellow)",
  },
];

export default function ElasticByTheNumbers({ variant = "full" }: { variant?: Variant }) {
  const isCompact = variant === "compact";

  return (
    <div className={isCompact ? "w-full" : "w-full mt-4"}>
      <div className={`text-white/35 font-semibold tracking-widest uppercase mb-2 ${isCompact ? "text-[9px] text-center" : "text-[10px]"}`}>
        Elastic by the numbers
      </div>
      <div
        className={`grid gap-2 ${isCompact ? "grid-cols-4" : "grid-cols-2 sm:grid-cols-4 gap-3"}`}
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden flex flex-col items-center text-center justify-center"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: isCompact ? "0.5rem 0.35rem" : "0.75rem 0.5rem",
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ background: s.color, opacity: 0.85 }}
              />
              <Icon
                size={isCompact ? 14 : 18}
                style={{ color: s.color }}
                className="mb-1 opacity-90"
                aria-hidden
              />
              <div
                className={`font-bold text-white leading-none tracking-tight ${isCompact ? "text-base" : "text-xl sm:text-2xl"}`}
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {s.value}
              </div>
              <div className={`text-white/55 font-medium ${isCompact ? "text-[9px]" : "text-[10px] sm:text-xs"}`}>
                {s.label}
              </div>
              <div className={`text-white/35 ${isCompact ? "text-[8px] leading-tight hidden sm:block" : "text-[9px] sm:text-[10px] mt-0.5"}`}>
                {s.sub}
              </div>
            </div>
          );
        })}
      </div>
      <p className={`text-white/25 text-center ${isCompact ? "text-[8px] mt-1.5" : "text-[9px] mt-2"}`}>
        Fortune 500 &amp; footprint: elastic.co/about · Customers &amp; expansion: Elastic public filings; rounded.
      </p>
    </div>
  );
}
