import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { STANDARDS } from "@/lib/content";

export function StandardsSection() {
  return (
    <SectionShell
      id="standards"
      eyebrow="Standards & Interoperability"
      title="Regulator-ready, globally interoperable"
      description="Explicit alignment with telecom, identity, security, and sovereign governance frameworks — enterprise deployable at carrier scale."
      band="dark"
      align="center"
    >
      <FadeIn>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {STANDARDS.map((standard) => (
            <span key={standard} className="ds-standard-chip">
              {standard}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
