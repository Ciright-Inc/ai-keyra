"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useHydratedReducedMotion } from "@/lib/useMounted";

type Node = { id: number; x: number; y: number; tier: "core" | "edge" | "federation" };

const NODES: Node[] = [
  { id: 1, x: 50, y: 48, tier: "core" },
  { id: 2, x: 28, y: 32, tier: "edge" },
  { id: 3, x: 72, y: 30, tier: "edge" },
  { id: 4, x: 22, y: 58, tier: "federation" },
  { id: 5, x: 78, y: 56, tier: "federation" },
  { id: 6, x: 38, y: 68, tier: "edge" },
  { id: 7, x: 62, y: 70, tier: "edge" },
  { id: 8, x: 50, y: 22, tier: "federation" },
];

const EDGES: [number, number][] = [
  [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8],
  [2, 4], [3, 5], [6, 4], [7, 5], [2, 8], [3, 8],
];

export function OperationalTopology() {
  const reduce = useHydratedReducedMotion();
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setPulse((p) => (p + 1) % EDGES.length), 2400);
    return () => window.clearInterval(id);
  }, [reduce]);

  const nodeMap = useMemo(
    () => Object.fromEntries(NODES.map((n) => [n.id, n])),
    [],
  );

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {EDGES.map(([a, b], i) => {
        const na = nodeMap[a];
        const nb = nodeMap[b];
        const active = !reduce && i === pulse;
        return (
          <line
            key={`${a}-${b}`}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke={active ? "var(--ds-ink)" : "var(--ds-hairline-strong)"}
            strokeWidth={active ? 0.3 : 0.18}
            strokeLinecap="round"
            opacity={active ? 0.35 : 0.5}
          />
        );
      })}

      {NODES.map((node) => (
        <g key={node.id}>
          {!reduce && node.tier === "core" ? (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={3.2}
              fill="none"
              stroke="var(--ds-hairline-strong)"
              strokeWidth={0.2}
              animate={{ r: [3.2, 5.5, 3.2], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.tier === "core" ? 1.8 : 1.1}
            fill={node.tier === "core" ? "var(--ds-surface-strong)" : "var(--ds-hairline)"}
            stroke="var(--ds-hairline-strong)"
            strokeWidth={0.15}
          />
        </g>
      ))}
    </svg>
  );
}
