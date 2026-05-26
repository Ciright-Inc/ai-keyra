import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  AOTI,
  AOTI_CAPABILITIES,
  AOTI_NOT,
  AOTI_THESIS,
  CATEGORY_DEFINITION,
} from "@/lib/content";

export function AotiSection() {
  return (
    <SectionShell
      id="aoti"
      eyebrow={AOTI.eyebrow}
      title={AOTI.title}
      description={AOTI.definition}
      band="light"
    >
      <FadeIn className="mb-10 max-w-3xl">
        <p className="ds-caption-uppercase mb-2">{CATEGORY_DEFINITION.eyebrow}</p>
        <p className="ds-title-md mb-2">{CATEGORY_DEFINITION.title}</p>
        <p className="ds-body-md">{CATEGORY_DEFINITION.body}</p>
      </FadeIn>

      <FadeIn className="mb-12 max-w-3xl space-y-4 border-l-2 border-ds-ink pl-6">
        <p className="ds-body-md font-medium text-ds-body-strong">{AOTI_THESIS.requirement}</p>
        <p className="ds-body-md">{AOTI_THESIS.provision}</p>
      </FadeIn>

      <FadeIn className="mb-12">
        <p className="ds-caption-uppercase mb-4">What AOTI represents</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AOTI_CAPABILITIES.map((cap) => (
            <Card key={cap} className="px-4 py-3">
              <p className="ds-body-sm">{cap}</p>
            </Card>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-3">
        <FadeIn>
          <p className="ds-caption-uppercase mb-4">This is not</p>
          <ul className="space-y-2.5">
            {AOTI_NOT.map((item) => (
              <li
                key={item}
                className="ds-body-sm text-ds-muted line-through decoration-ds-hairline-strong"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.06}>
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

        <FadeIn delay={0.1}>
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
