import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { PLATFORM_MISSION } from "@/lib/content";

export function PlatformMissionSection() {
  return (
    <SectionShell
      id="mission"
      eyebrow={PLATFORM_MISSION.eyebrow}
      title={PLATFORM_MISSION.title}
      description={PLATFORM_MISSION.description}
      band="soft"
      align="center"
    >
      <FadeIn className="max-w-2xl mx-auto text-center mb-10">
        <p className="ds-display-lg">{PLATFORM_MISSION.subtitle}</p>
        <p className="ds-body-md mt-4 font-medium text-ds-body-strong">
          {PLATFORM_MISSION.keyraRole}
        </p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <p className="ds-caption-uppercase mb-4 text-center">
          Foundational infrastructure framework
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {PLATFORM_MISSION.frameworks.map((item) => (
            <Card key={item} className="px-4 py-3 text-center">
              <p className="ds-body-sm">{item}</p>
            </Card>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
