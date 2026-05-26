import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { SECURITY_ARCHITECTURE, SECURITY_DOCTRINE } from "@/lib/content";

export function SecurityDoctrineSection() {
  return (
    <SectionShell
      id="security"
      eyebrow={SECURITY_ARCHITECTURE.eyebrow}
      title={SECURITY_ARCHITECTURE.title}
      description={SECURITY_ARCHITECTURE.description}
      band="soft"
    >
      <div className="grid gap-4 md:grid-cols-2 mb-10">
        {SECURITY_ARCHITECTURE.layers.map((layer, i) => (
          <FadeIn key={layer.layer} delay={i * 0.04}>
            <Card className="p-5 h-full">
              <p className="ds-caption-uppercase mb-2">{layer.layer}</p>
              <p className="ds-body-md">{layer.detail}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.08}>
        <p className="ds-caption-uppercase mb-4">Operational security doctrine</p>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SECURITY_DOCTRINE.map((item, i) => (
          <FadeIn key={item} delay={0.1 + i * 0.03}>
            <Card className="px-5 py-4 flex items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--ds-radius-sm)] bg-ds-surface-strong ds-caption font-semibold text-ds-ink"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="ds-title-sm">{item}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
