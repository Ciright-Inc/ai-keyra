import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { TrustInfrastructureMap } from "@/components/visual/TrustInfrastructureMap";

export function GlobalMapSection() {
  return (
    <SectionShell
      id="global-map"
      eyebrow="Global Trust Infrastructure"
      title="Planetary operational trust architecture"
      description="Sovereign trust regions, telecom federation zones, operational trust exchanges, and compliance routing boundaries — synchronized globally."
      band="soft"
    >
      <FadeIn>
        <TrustInfrastructureMap />
      </FadeIn>
    </SectionShell>
  );
}
