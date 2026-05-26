"use client";

import type { ReactNode } from "react";
import type { KotaPlane } from "@/lib/content";

type KotaPlaneVisualizationProps = {
  plane: KotaPlane;
};

/** Per-plane atmospheric architecture motif — institutional, not engineering schematic. */
export function KotaPlaneVisualization({ plane }: KotaPlaneVisualizationProps) {
  const motifs: Record<string, ReactNode> = {
    identity: (
      <>
        <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.15" />
        <path d="M 50 20 L 50 32 M 50 68 L 50 80 M 20 50 L 32 50 M 68 50 L 80 50" stroke="currentColor" strokeWidth="0.8" />
      </>
    ),
    authorization: (
      <>
        <rect x="28" y="35" width="44" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 38 50 L 46 58 L 62 42" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
    governance: (
      <>
        <path d="M 25 65 L 50 25 L 75 65 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="40" x2="50" y2="55" stroke="currentColor" strokeWidth="0.8" />
      </>
    ),
    execution: (
      <>
        <path d="M 30 55 L 50 30 L 70 55" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 40 55 L 40 70 L 60 70 L 60 55" fill="none" stroke="currentColor" strokeWidth="0.8" />
      </>
    ),
    federation: (
      <>
        <circle cx="35" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.9" />
        <circle cx="65" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.9" />
        <path d="M 47 50 L 53 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </>
    ),
    audit: (
      <>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={28 + i * 12}
            y={38 + (i % 2) * 8}
            width="8"
            height="24"
            fill="currentColor"
            opacity={0.12 + i * 0.06}
          />
        ))}
      </>
    ),
    orchestration: (
      <>
        <circle cx="50" cy="35" r="6" fill="currentColor" opacity="0.2" />
        <circle cx="30" cy="60" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="70" cy="60" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <path d="M 50 41 L 30 55 M 50 41 L 70 55" stroke="currentColor" strokeWidth="0.7" />
      </>
    ),
    telecom: (
      <>
        <path d="M 50 22 L 62 42 L 38 42 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="42" y="42" width="16" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="0.9" />
        <path d="M 46 52 L 54 52" stroke="currentColor" strokeWidth="0.6" />
      </>
    ),
  };

  return (
    <div className="rounded-[var(--ds-radius-md)] border border-ds-hairline-strong bg-ds-canvas-soft p-4 flex flex-col items-center justify-center min-h-[140px] text-ds-ink">
      <svg viewBox="0 0 100 100" className="w-24 h-24 mb-2" aria-hidden>
        {motifs[plane.id] ?? motifs.identity}
      </svg>
      <p className="ds-caption text-center normal-case tracking-normal">{plane.name}</p>
    </div>
  );
}
