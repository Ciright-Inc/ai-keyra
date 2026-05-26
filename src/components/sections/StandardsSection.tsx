import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { STANDARDS, STANDARDS_CREDIBILITY } from "@/lib/content";

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
      <FadeIn className="mb-10">
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {STANDARDS_CREDIBILITY.map((item) => (
            <span
              key={item}
              className="ds-standard-chip font-medium border-white/25 bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
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
