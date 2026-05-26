import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { COMMERCIAL_MODEL } from "@/lib/content";

export function CommercialModelSection() {
  return (
    <SectionShell
      eyebrow="Commercial Infrastructure Model"
      title="Scalable infrastructure economics"
      description="Trust-as-a-Service and metered operational infrastructure — designed for enterprise, telecom, and sovereign deployment at scale."
      band="soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {COMMERCIAL_MODEL.map((item, i) => (
          <FadeIn key={item.model} delay={i * 0.04}>
            <Card className="p-5">
              <h3 className="ds-title-md mb-1">{item.model}</h3>
              <p className="ds-body-sm">{item.detail}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
