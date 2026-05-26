import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { SECURITY_DOCTRINE } from "@/lib/content";

export function SecurityDoctrineSection() {
  return (
    <SectionShell
      id="security"
      eyebrow="Security Doctrine"
      title="State-grade security architecture"
      description="Explicit operational security doctrine for governed autonomous execution — deployable, auditable, and standards-aligned."
      band="soft"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SECURITY_DOCTRINE.map((item, i) => (
          <FadeIn key={item} delay={i * 0.03}>
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
