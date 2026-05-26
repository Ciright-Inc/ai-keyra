import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { LIFECYCLE_UNIVERSAL_CONTROLS, TRUST_LIFECYCLE } from "@/lib/content";

export function TrustLifecycleSection() {
  return (
    <SectionShell
      id="lifecycle"
      eyebrow="Trust Lifecycle Management"
      title="Complete trust lifecycle infrastructure"
      description="From provisioning through retirement — every phase governed with operational telemetry, auditability, and execution traceability."
      band="light"
    >
      <FadeIn className="mb-8">
        <p className="ds-caption-uppercase mb-3">Required controls — every phase</p>
        <ul className="flex flex-wrap gap-2">
          {LIFECYCLE_UNIVERSAL_CONTROLS.map((control) => (
            <li key={control} className="ds-standard-chip">
              {control}
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {TRUST_LIFECYCLE.map((phase, i) => (
          <FadeIn key={phase.phase} delay={i * 0.04}>
            <article className="ds-lifecycle-track pl-6 pb-2">
              <h3 className="ds-title-md mb-2">{phase.phase}</h3>
              <p className="ds-body-sm mb-3">{phase.focus}</p>
              <ul className="space-y-1.5">
                {phase.controls.map((control) => (
                  <li key={control} className="ds-body-sm flex gap-2">
                    <span className="text-ds-ink" aria-hidden>
                      —
                    </span>
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
