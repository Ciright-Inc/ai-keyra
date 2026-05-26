import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { PRIMARY_NARRATIVE } from "@/lib/content";

export function NarrativeSection() {
  return (
    <SectionShell
      id="narrative"
      eyebrow={PRIMARY_NARRATIVE.eyebrow}
      title={PRIMARY_NARRATIVE.opening}
      description={PRIMARY_NARRATIVE.solution}
      band="light"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <p className="ds-caption-uppercase mb-4">{PRIMARY_NARRATIVE.modernTitle}</p>
          <ul className="space-y-2">
            {PRIMARY_NARRATIVE.modernReliance.map((item) => (
              <li key={item} className="flex gap-3 ds-body-md">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ds-ink" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="ds-caption-uppercase mb-4">{PRIMARY_NARRATIVE.gapsTitle}</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {PRIMARY_NARRATIVE.gaps.map((item) => (
              <li key={item}>
                <Card padding="none" className="px-3 py-2.5">
                  <p className="ds-body-sm">{item}</p>
                </Card>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
