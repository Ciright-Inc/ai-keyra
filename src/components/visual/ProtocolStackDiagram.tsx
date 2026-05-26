import { PROTOCOLS } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export function ProtocolStackDiagram() {
  return (
    <Card className="p-6 md:p-8">
      <p className="ds-caption-uppercase mb-6">Protocol stack architecture</p>
      <div className="flex flex-col gap-1 max-w-lg mx-auto">
        {PROTOCOLS.map((protocol, i) => (
          <div
            key={protocol.id}
            className="flex items-center gap-4 px-4 py-3 rounded-[var(--ds-radius-md)] border border-ds-hairline-strong bg-ds-canvas-soft"
            style={{
              marginLeft: `${i * 6}px`,
              marginRight: `${(PROTOCOLS.length - 1 - i) * 6}px`,
            }}
          >
            <span className="ds-protocol-badge shrink-0">{protocol.acronym}</span>
            <div className="min-w-0">
              <p className="ds-title-sm truncate">{protocol.name}</p>
              <p className="ds-caption truncate">{protocol.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center ds-caption">
        Layer 1 — Identity (KIP) through Layer 8 — Telecom Federation (TFP)
      </p>
    </Card>
  );
}
