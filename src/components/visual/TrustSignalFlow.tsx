"use client";

import { motion } from "framer-motion";
import { TRUST_VISUALIZATION } from "@/lib/content";
import { useHydratedReducedMotion } from "@/lib/useMounted";

const TIER_OPACITY: Record<string, number> = {
  hardware: 0.9,
  telecom: 0.75,
  execution: 0.65,
  federation: 0.7,
  governance: 0.6,
  verification: 0.8,
};

export function TrustSignalFlow() {
  const reduce = useHydratedReducedMotion();

  return (
    <div className="relative aspect-[16/10] min-h-[280px] rounded-[var(--ds-radius-lg)] border border-ds-hairline-strong bg-ds-canvas-soft overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 400"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <pattern id="trust-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="var(--ds-hairline)"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="640" height="400" fill="url(#trust-grid)" />

        <path
          d="M 80 200 Q 200 120 320 200 T 560 200"
          fill="none"
          stroke="var(--ds-hairline-strong)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M 120 280 Q 320 320 520 140"
          fill="none"
          stroke="var(--ds-hairline)"
          strokeWidth="1"
        />
        <path
          d="M 320 80 L 320 320"
          fill="none"
          stroke="var(--ds-hairline-strong)"
          strokeWidth="0.75"
          opacity="0.5"
        />

        {[
          [320, 200],
          [120, 140],
          [520, 140],
          [160, 300],
          [480, 300],
        ].map(([cx, cy], i) => (
          <g key={`node-${cx}-${cy}`}>
            {!reduce ? (
              <motion.circle
                cx={cx}
                cy={cy}
                r="8"
                fill="none"
                stroke="var(--ds-ink)"
                strokeWidth="0.75"
                opacity="0.25"
                animate={{ r: [10, 28, 10], opacity: [0.3, 0, 0.3] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ) : null}
            <circle
              cx={cx}
              cy={cy}
              r={i === 0 ? 6 : 4}
              fill="var(--ds-surface-strong)"
              stroke="var(--ds-ink)"
              strokeWidth="1"
              opacity={i === 0 ? 1 : 0.7}
            />
          </g>
        ))}
      </svg>

      <ul className="absolute inset-x-0 bottom-0 grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 md:p-5 bg-ds-canvas-soft/95 border-t border-ds-hairline-strong backdrop-blur-[2px]">
        {TRUST_VISUALIZATION.signals.map((signal, i) => (
          <li
            key={signal.id}
            className="rounded-[var(--ds-radius-md)] border border-ds-hairline-strong bg-ds-surface-card/90 px-3 py-2"
            style={{ opacity: TIER_OPACITY[signal.tier] ?? 0.7 }}
          >
            <p className="ds-caption-uppercase text-[9px] mb-0.5">{signal.tier}</p>
            <p className="ds-body-sm leading-snug">{signal.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
