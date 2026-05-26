import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { TRUST_LIFECYCLE } from "@/lib/content";

export function TrustLifecycleSection() {
  return (
    <SectionShell
      eyebrow="Trust Lifecycle Management"
      title="Complete trust lifecycle infrastructure"
      description="From provisioning through retirement — every phase governed with operational telemetry, auditability, and execution traceability."
      band="light"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {TRUST_LIFECYCLE.map((phase, i) => (
          <FadeIn key={phase.phase} delay={i * 0.04}>
            <article className="ds-lifecycle-track pl-6 pb-2">
              <h3 className="ds-title-md mb-3">{phase.phase}</h3>
              <ul className="space-y-1.5">
                {phase.controls.map((control) => (
                  <li key={control} className="ds-body-sm">
                    {control}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
