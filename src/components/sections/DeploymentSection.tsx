import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { DEPLOYMENT_MODELS } from "@/lib/content";

export function DeploymentSection() {
  return (
    <SectionShell
      id="deployment"
      eyebrow="Deployment Architecture"
      title="Sovereign, enterprise, telecom, and edge deployment"
      description="Critical enterprise deployment models for operational trust infrastructure at global scale."
      band="soft"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {DEPLOYMENT_MODELS.map((model, i) => (
          <FadeIn key={model.id} delay={i * 0.05}>
            <Card dark={i === 0} className="p-6 h-full">
              <p className="ds-caption-uppercase mb-2">Deployment model</p>
              <h3 className="ds-title-md mb-4">{model.title}</h3>
              <ul className="space-y-2">
                {model.items.map((item) => (
                  <li key={item} className="ds-body-sm flex gap-2 opacity-90">
                    <span aria-hidden>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
