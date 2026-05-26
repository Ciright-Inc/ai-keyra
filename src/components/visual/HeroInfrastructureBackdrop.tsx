"use client";

import { motion } from "framer-motion";
import { OperationalTopology } from "@/components/visual/OperationalTopology";
import { useHydratedReducedMotion } from "@/lib/useMounted";

/** Layered hero backdrop — solid fills only (agent.md §0.3). */
export function HeroInfrastructureBackdrop() {
  const reduce = useHydratedReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <OperationalTopology />

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 8 45 Q 35 20 50 35 T 92 42"
          fill="none"
          stroke="var(--ds-hairline-strong)"
          strokeWidth="0.2"
          strokeDasharray="1.5 1"
        />
        <path
          d="M 5 62 Q 40 75 55 55 T 95 68"
          fill="none"
          stroke="var(--ds-hairline)"
          strokeWidth="0.18"
        />
        <path
          d="M 12 28 Q 50 8 88 25"
          fill="none"
          stroke="var(--ds-hairline)"
          strokeWidth="0.15"
          strokeDasharray="0.8 0.8"
        />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {[
          [18, 38],
          [82, 34],
          [75, 72],
          [25, 68],
          [50, 18],
          [50, 82],
        ].map(([cx, cy], i) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="0.8" fill="var(--ds-surface-strong)" />
            {!reduce && i % 2 === 0 ? (
              <motion.circle
                cx={cx}
                cy={cy}
                r="0.8"
                fill="none"
                stroke="var(--ds-hairline-strong)"
                strokeWidth="0.1"
                animate={{ r: [1.2, 3.5, 1.2], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : null}
          </g>
        ))}
      </svg>

      <svg
        className="absolute right-0 top-0 h-full w-1/2 opacity-20"
        viewBox="0 0 50 100"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M 0 30 L 35 30 L 35 50 L 48 50"
          fill="none"
          stroke="var(--ds-hairline-strong)"
          strokeWidth="0.25"
        />
        <path
          d="M 0 55 L 28 55 L 28 72 L 48 72"
          fill="none"
          stroke="var(--ds-hairline)"
          strokeWidth="0.2"
          strokeDasharray="1 0.8"
        />
        <path
          d="M 0 78 L 40 78 L 40 88 L 48 88"
          fill="none"
          stroke="var(--ds-hairline)"
          strokeWidth="0.18"
        />
      </svg>

      {!reduce ? (
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ds-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--ds-hairline) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </div>
  );
}
