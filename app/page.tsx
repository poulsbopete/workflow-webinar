"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import TitleSlide from "@/components/slides/TitleSlide";
import AgendaSlide from "@/components/slides/AgendaSlide";
import WhatAreWorkflowsSlide from "@/components/slides/WhatAreWorkflowsSlide";
import KeyAdvantagesSlide from "@/components/slides/KeyAdvantagesSlide";
import CompetitiveDiffSlide from "@/components/slides/CompetitiveDiffSlide";
import RCAProblemSlide from "@/components/slides/RCAProblemSlide";
import RCAWorkflowSlide from "@/components/slides/RCAWorkflowSlide";
import RCADeepDiveSlide from "@/components/slides/RCADeepDiveSlide";
import SLOProblemSlide from "@/components/slides/SLOProblemSlide";
import SLOWorkflowSlide from "@/components/slides/SLOWorkflowSlide";
import SLODeepDiveSlide from "@/components/slides/SLODeepDiveSlide";
import ExistingUsersSlide from "@/components/slides/ExistingUsersSlide";
import SummarySlide from "@/components/slides/SummarySlide";

const slides = [
  { component: TitleSlide, label: "Title" },
  { component: AgendaSlide, label: "Agenda" },
  { component: WhatAreWorkflowsSlide, label: "What are Workflows" },
  { component: KeyAdvantagesSlide, label: "Key Advantages" },
  { component: CompetitiveDiffSlide, label: "Differentiation" },
  { component: RCAProblemSlide, label: "RCA: The Problem" },
  { component: RCAWorkflowSlide, label: "RCA Workflow" },
  { component: RCADeepDiveSlide, label: "RCA Deep Dive" },
  { component: SLOProblemSlide, label: "SLO: The Problem" },
  { component: SLOWorkflowSlide, label: "SLO Workflow" },
  { component: SLODeepDiveSlide, label: "SLO Deep Dive" },
  { component: ExistingUsersSlide, label: "For Elastic Users" },
  { component: SummarySlide, label: "Summary" },
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (animating || index < 0 || index >= slides.length) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 50);
    },
    [animating]
  );

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slides[current].component;
  const progress = ((current + 1) / slides.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "var(--elastic-dark)" }}>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-0.5 bg-white/10">
        <div className="progress-bar h-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-6 z-50 text-white/40 text-sm font-mono">
        {current + 1} / {slides.length}
      </div>

      {/* Slide content */}
      <div key={current} className="slide-enter w-full h-full">
        <SlideComponent />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full text-white/30 hover:text-white/80 disabled:opacity-0 transition-all duration-200 hover:bg-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        disabled={current === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full text-white/30 hover:text-white/80 disabled:opacity-0 transition-all duration-200 hover:bg-white/10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1.5 items-center">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            title={slide.label}
            className="transition-all duration-200"
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
          >
            <Circle
              size={6}
              fill={i === current ? "white" : "rgba(255,255,255,0.25)"}
              stroke="none"
              className={`transition-all duration-200 ${i === current ? "scale-150" : "hover:scale-125"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
