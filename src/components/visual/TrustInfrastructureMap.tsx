"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { GLOBAL_MAP_LAYERS } from "@/lib/content";

type Region = {
  id: string;
  label: string;
  cx: number;
  cy: number;
  r: number;
};

const REGIONS: Region[] = [
  { id: "eu", label: "EU Sovereign Trust", cx: 520, cy: 210, r: 55 },
  { id: "na", label: "North America Federation", cx: 220, cy: 240, r: 65 },
  { id: "apac", label: "APAC Telecom Zone", cx: 780, cy: 290, r: 70 },
  { id: "mea", label: "MEA Governance Domain", cx: 560, cy: 340, r: 48 },
  { id: "sa", label: "South America Exchange", cx: 310, cy: 420, r: 42 },
];

const PATHS = [
  "M 220 240 Q 380 180 520 210",
  "M 520 210 Q 650 240 780 290",
  "M 220 240 Q 280 330 310 420",
  "M 560 340 Q 680 320 780 290",
  "M 520 210 Q 540 280 560 340",
];

const LEGEND = [
  { label: "Sovereign trust region", color: "var(--ds-ink)" },
  { label: "Telecom federation zone", color: "var(--ds-body)" },
  { label: "Trust exchange pathway", color: "var(--ds-hairline-strong)" },
];

export function TrustInfrastructureMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
      <Card padding="none" className="p-4 md:p-6 overflow-hidden">
        <svg
          viewBox="0 0 960 520"
          className="w-full h-auto"
          role="img"
          aria-label="Global trust infrastructure map"
        >
          <defs>
            <pattern id="map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="var(--ds-hairline)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="960" height="520" fill="url(#map-grid)" />
          <ellipse
            cx="480"
            cy="260"
            rx="420"
            ry="200"
            fill="none"
            stroke="var(--ds-hairline-strong)"
            strokeWidth="1"
          />

          {PATHS.map((d, i) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="var(--ds-hairline-strong)"
              strokeWidth="1.5"
              strokeDasharray={i % 2 === 0 ? "6 4" : undefined}
              opacity={active ? 0.35 : 0.55}
            />
          ))}

          {REGIONS.map((region) => (
            <g
              key={region.id}
              onMouseEnter={() => setActive(region.id)}
              onMouseLeave={() => setActive(null)}
              className="cursor-default"
            >
              <circle
                cx={region.cx}
                cy={region.cy}
                r={region.r}
                fill="var(--ds-surface-strong)"
                stroke={active === region.id ? "var(--ds-ink)" : "var(--ds-hairline-strong)"}
                strokeWidth={active === region.id ? 2 : 1}
              />
              <circle cx={region.cx} cy={region.cy} r="4" fill="var(--ds-body)" />
              {active === region.id ? (
                <text
                  x={region.cx}
                  y={region.cy - region.r - 8}
                  textAnchor="middle"
                  fill="var(--ds-ink)"
                  fontSize="12"
                  fontWeight="600"
                >
                  {region.label}
                </text>
              ) : null}
            </g>
          ))}
        </svg>
      </Card>

      <aside className="space-y-6">
        <div>
          <p className="ds-caption-uppercase mb-3">Infrastructure layers</p>
          <ul className="space-y-2">
            {GLOBAL_MAP_LAYERS.map((layer) => (
              <li key={layer} className="ds-body-sm">
                {layer}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="ds-caption-uppercase mb-3">Legend</p>
          <ul className="space-y-2">
            {LEGEND.map((item) => (
              <li key={item.label} className="flex items-center gap-2 ds-body-sm">
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ background: item.color }}
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
