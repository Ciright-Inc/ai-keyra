import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { OtccDashboard } from "@/components/visual/OtccDashboard";

export function OtccSection() {
  return (
    <SectionShell
      id="otcc"
      eyebrow="Operational Trust Control Center"
      title="Enterprise operational governance interface"
      description="Mission-critical governance for trust telemetry, execution monitoring, policy orchestration, and forensic traceability."
      band="light"
    >
      <FadeIn>
        <OtccDashboard />
      </FadeIn>
      <FadeIn delay={0.08} className="mt-6">
        <p className="ds-body-sm max-w-2xl">
          OTCC provides carrier-grade operational observability for autonomous systems —
          unified trust telemetry, compliance dashboards, and federation administration
          in a single institutional control surface.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
