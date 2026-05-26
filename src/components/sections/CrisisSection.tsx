import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { CRISIS } from "@/lib/content";

export function CrisisSection() {
  return (
    <SectionShell
      id="crisis"
      eyebrow={CRISIS.eyebrow}
      title={CRISIS.title}
      band="soft"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
        <FadeIn>
          <p className="ds-display-md mb-6">{CRISIS.conclusion}</p>
          <p className="ds-body-md max-w-lg">
            Measured, institutional analysis of the global operational trust problem —
            operationally grounded, regulator-aware, and deployable at sovereign scale.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {CRISIS.topics.map((topic) => (
              <li key={topic}>
                <Card padding="none" className="px-4 py-3 h-full">
                  <p className="ds-body-sm">{topic}</p>
                </Card>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
