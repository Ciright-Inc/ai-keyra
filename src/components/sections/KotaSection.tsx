"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { KotaArchitectureDiagram } from "@/components/visual/KotaArchitectureDiagram";
import { KOTA_PLANES } from "@/lib/content";
import { cn } from "@/components/ui/cn";

export function KotaSection() {
  const [active, setActive] = useState(KOTA_PLANES[0].id);
  const selected = KOTA_PLANES.find((p) => p.id === active) ?? KOTA_PLANES[0];

  return (
    <SectionShell
      id="kota"
      eyebrow="KOTA"
      title="Keyra Operational Trust Architecture"
      description="Eight infrastructure planes forming the formal architectural doctrine for autonomous operational trust."
      band="soft"
    >
      <div className="grid gap-6 lg:grid-cols-[240px_1fr_280px]">
        <FadeIn className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
          {KOTA_PLANES.map((plane) => (
            <button
              key={plane.id}
              type="button"
              onClick={() => setActive(plane.id)}
              className={cn(
                "text-left px-4 py-3 rounded-[var(--ds-radius-md)] border text-sm font-medium whitespace-nowrap lg:whitespace-normal transition-colors",
                active === plane.id
                  ? "bg-ds-primary text-ds-on-primary border-transparent"
                  : "bg-ds-surface-card border-ds-hairline-strong text-ds-body hover:bg-ds-canvas-soft",
              )}
            >
              {plane.name}
            </button>
          ))}
        </FadeIn>

        <FadeIn delay={0.06} key={selected.id}>
          <Card className="p-6 md:p-8">
            <p className="ds-caption-uppercase mb-2">Infrastructure plane</p>
            <h3 className="ds-display-lg mb-3">{selected.name}</h3>
            <p className="ds-body-md mb-8">{selected.description}</p>
            <p className="ds-caption-uppercase mb-4">Functions</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {selected.functions.map((fn) => (
                <li
                  key={fn}
                  className="ds-body-sm px-3 py-2 rounded-[var(--ds-radius-md)] bg-ds-canvas-soft"
                >
                  {fn}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="hidden lg:block">
          <KotaArchitectureDiagram activeId={active} />
        </FadeIn>
      </div>
    </SectionShell>
  );
}
