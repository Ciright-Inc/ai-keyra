import { FadeIn } from "@/components/motion/FadeIn";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import { ProtocolStackDiagram } from "@/components/visual/ProtocolStackDiagram";
import { PROTOCOLS } from "@/lib/content";

export function ProtocolStackSection() {
  return (
    <SectionShell
      id="protocols"
      eyebrow="Protocol Architecture"
      title="Operational trust protocols"
      description="Formal protocol-level legitimacy for identity, authorization, trust exchange, execution verification, and telecom federation."
      band="light"
    >
      <FadeIn className="mb-10">
        <ProtocolStackDiagram />
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2">
        {PROTOCOLS.map((protocol, i) => (
          <FadeIn key={protocol.id} delay={i * 0.04}>
            <Card className="p-6 h-full">
              <div className="flex items-start gap-3 mb-4">
                <span className="ds-protocol-badge shrink-0">{protocol.acronym}</span>
                <div>
                  <h3 className="ds-title-md">{protocol.name}</h3>
                  <p className="ds-body-sm mt-1">{protocol.description}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {protocol.supports.map((item) => (
                  <li key={item}>
                    <span className="ds-badge-pill text-[10px] normal-case tracking-normal font-medium">
                      {item}
                    </span>
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
