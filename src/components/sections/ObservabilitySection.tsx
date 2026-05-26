import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { OBSERVABILITY } from "@/lib/content";

export function ObservabilitySection() {
  return (
    <SectionShell
      id="observability"
      eyebrow="Observability & Telemetry"
      title="Carrier-grade infrastructure maturity"
      description="Enterprise-scale operational observability for trust events, execution analytics, and forensic accountability."
      band="soft"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {OBSERVABILITY.map((item, i) => (
          <FadeIn key={item} delay={i * 0.03}>
            <Card className="px-4 py-5 h-full">
              <p className="ds-title-sm">{item}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
