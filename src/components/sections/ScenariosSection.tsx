import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { SCENARIOS } from "@/lib/content";

export function ScenariosSection() {
  return (
    <SectionShell
      eyebrow="Execution Scenarios"
      title="Real-world operational workflows"
      description="Deployable trust infrastructure for regulated autonomous operations across banking, healthcare, government, and telecom."
      band="light"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {SCENARIOS.map((scenario, i) => (
          <FadeIn key={scenario.sector} delay={i * 0.06}>
            <Card className="p-6 h-full">
              <p className="ds-caption-uppercase mb-2">{scenario.sector}</p>
              <p className="ds-body-md mb-5">{scenario.requirement}</p>
              <p className="ds-caption-uppercase mb-3">Required controls</p>
              <ul className="space-y-2">
                {scenario.controls.map((control) => (
                  <li key={control} className="ds-body-sm flex gap-2">
                    <span className="text-ds-ink" aria-hidden>
                      ✓
                    </span>
                    {control}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
