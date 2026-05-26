import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { AOTI } from "@/lib/content";

export function AotiSection() {
  return (
    <SectionShell
      eyebrow={AOTI.eyebrow}
      title={AOTI.title}
      description={AOTI.definition}
      band="light"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <p className="ds-caption-uppercase mb-4">Platform positioning</p>
          <ul className="space-y-3">
            {AOTI.positioning.map((item) => (
              <li key={item} className="flex gap-3 ds-body-md">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ds-ink" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="ds-caption-uppercase mb-4">Ecosystem support — without competing</p>
          <div className="flex flex-wrap gap-2">
            {AOTI.supports.map((item) => (
              <span key={item} className="ds-standard-chip">
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
