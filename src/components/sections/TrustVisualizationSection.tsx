import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { TrustSignalFlow } from "@/components/visual/TrustSignalFlow";
import { TRUST_VISUALIZATION } from "@/lib/content";

export function TrustVisualizationSection() {
  return (
    <SectionShell
      id="trust-viz"
      eyebrow={TRUST_VISUALIZATION.eyebrow}
      title={TRUST_VISUALIZATION.title}
      description={TRUST_VISUALIZATION.description}
      band="light"
    >
      <FadeIn>
        <TrustSignalFlow />
      </FadeIn>
    </SectionShell>
  );
}
