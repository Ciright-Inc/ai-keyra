"use client";

import { motion } from "framer-motion";
import { OTCC_CAPABILITIES, OTCC_METRICS } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { useHydratedReducedMotion } from "@/lib/useMounted";

export function OtccDashboard() {
  const reduce = useHydratedReducedMotion();

  return (
    <Card dark className="overflow-hidden !p-0">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ds-success" />
          <span className="ds-caption text-white/70 normal-case tracking-normal">
            OTCC — Operational Trust Control Center
          </span>
        </div>
        <span className="ds-caption text-white/40 normal-case tracking-normal">LIVE</span>
      </div>

      <div className="p-4 md:p-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {OTCC_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[var(--ds-radius-md)] border border-white/10 bg-white/5 px-3 py-3"
            >
              <p className="ds-caption-uppercase text-white/45 mb-1">{metric.label}</p>
              <p className="ds-numeric text-xl font-semibold text-white">{metric.value}</p>
              <p className="ds-caption text-ds-success mt-0.5 normal-case">{metric.delta}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[var(--ds-radius-md)] border border-white/10 bg-white/5 p-4">
          <p className="ds-caption-uppercase text-white/50 mb-3">Trust telemetry — 24h</p>
          <svg viewBox="0 0 400 80" className="w-full h-20" preserveAspectRatio="none">
            <path
              d="M 0 60 L 50 45 L 100 52 L 150 30 L 200 38 L 250 22 L 300 35 L 350 18 L 400 28 L 400 80 L 0 80 Z"
              fill="rgba(255,255,255,0.06)"
            />
            <path
              d="M 0 60 L 50 45 L 100 52 L 150 30 L 200 38 L 250 22 L 300 35 L 350 18 L 400 28"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
            />
            {!reduce ? (
              <motion.circle
                cx="400"
                cy="28"
                r="3"
                fill="white"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ) : null}
          </svg>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {OTCC_CAPABILITIES.map((cap) => (
            <div
              key={cap}
              className="rounded-[var(--ds-radius-md)] border border-white/10 bg-white/5 px-3 py-2 ds-body-sm text-white/75"
            >
              {cap}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
