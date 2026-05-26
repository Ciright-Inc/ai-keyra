"use client";

import { KOTA_PLANES } from "@/lib/content";
import { Card } from "@/components/ui/Card";

type KotaArchitectureDiagramProps = {
  activeId: string;
};

export function KotaArchitectureDiagram({ activeId }: KotaArchitectureDiagramProps) {
  const reversed = [...KOTA_PLANES].reverse();

  return (
    <Card className="p-4 md:p-6 h-full min-h-[320px] flex flex-col">
      <p className="ds-caption-uppercase mb-4">Architecture visualization</p>
      <div className="flex-1 flex flex-col justify-end gap-1">
        {reversed.map((plane, i) => {
          const isActive = plane.id === activeId;
          const depth = KOTA_PLANES.length - 1 - i;
          const opacity = 0.32 + depth * 0.08;
          return (
            <div
              key={plane.id}
              className={`relative rounded-[var(--ds-radius-md)] px-3 py-2 transition-all duration-300 ${
                isActive ? "ring-2 ring-ds-ink ring-offset-2 scale-[1.02]" : ""
              }`}
              style={{
                background: `color-mix(in srgb, var(--ds-ink) ${Math.round(opacity * 100)}%, transparent)`,
                marginLeft: `${depth * 4}px`,
                marginRight: `${depth * 4}px`,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-ds-on-primary truncate">
                  {plane.name}
                </span>
                <span className="text-[10px] font-mono text-ds-on-primary/60 shrink-0">
                  P{depth + 1}
                </span>
              </div>
              {isActive ? (
                <div className="mt-1 h-0.5 w-full rounded bg-ds-on-primary/30" />
              ) : null}
            </div>
          );
        })}
      </div>
      <p className="mt-4 ds-caption">
        Eight-plane stack — Identity through Telecom Trust. Planes federate via KOTA protocol interfaces.
      </p>
    </Card>
  );
}
