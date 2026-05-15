"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import type { CoachPressKit } from "@/data/coachPressKit";

type CredibilitySectionProps = {
  stats: CoachPressKit["credibility"];
};

function useCountUp(target: number, shouldRun: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldRun) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    let start: number | undefined;
    const duration = 900;

    const tick = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [shouldRun, target]);

  return value;
}

function AnimatedStatValue({ value, active }: { value: string; active: boolean }) {
  const parsed = useMemo(() => {
    const plusMatch = value.match(/^(\d+)\+$/);
    const numberMatch = value.match(/^(\d+)$/);
    const ratioMatch = value.match(/^(\d+):(\d+)$/);

    if (plusMatch) {
      return { type: "plus" as const, left: Number(plusMatch[1]) };
    }

    if (numberMatch) {
      return { type: "number" as const, left: Number(numberMatch[1]) };
    }

    if (ratioMatch) {
      return {
        type: "ratio" as const,
        left: Number(ratioMatch[1]),
        right: Number(ratioMatch[2]),
      };
    }

    return { type: "text" as const };
  }, [value]);

  const left = useCountUp(parsed.type === "text" ? 0 : parsed.left, active);
  const right = useCountUp(parsed.type === "ratio" ? parsed.right : 0, active);

  if (parsed.type === "plus") {
    return <strong>{left}+</strong>;
  }

  if (parsed.type === "number") {
    return <strong>{left}</strong>;
  }

  if (parsed.type === "ratio") {
    return (
      <strong>
        {left}:{right}
      </strong>
    );
  }

  return <strong className={active ? "is-revealed" : ""}>{value}</strong>;
}

export function CredibilitySection({ stats }: CredibilitySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className={active ? "credibility-section is-visible" : "credibility-section"}
      aria-label="Indicateurs de credibilite"
    >
      <div className="credibility-grid">
        {stats.map((stat, index) => (
          <div
            className="credibility-card"
            key={stat.label}
            style={{ "--delay": `${index * 90}ms` } as CSSProperties}
          >
            <AnimatedStatValue value={stat.value} active={active} />
            <span>{stat.label}</span>
            <p>{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
