import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { DEVELOPER_PLATFORM } from "@/lib/content";

export function DeveloperPlatformSection() {
  return (
    <SectionShell
      id="platform"
      eyebrow={DEVELOPER_PLATFORM.eyebrow}
      title={DEVELOPER_PLATFORM.title}
      description="APIs, SDKs, CLI tooling, runtime simulation labs, trust testing environments, execution certification, federation tooling, observability APIs, orchestration APIs, policy engines, and deployment automation — deployable globally."
      band="dark"
    >
      <FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {DEVELOPER_PLATFORM.capabilities.map((cap) => (
            <div
              key={cap}
              className="rounded-[var(--ds-radius-md)] border border-white/14 bg-white/6 px-4 py-3 ds-body-sm"
            >
              {cap}
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-3">
          <Button
            href="https://keyra.ie/developers"
            variant="secondary"
            external
            className="!bg-ds-on-primary !text-ds-ink !border-ds-on-primary hover:!bg-ds-canvas-soft"
          >
            Developer documentation
          </Button>
          <Button
            href="https://keyra.ie/contact"
            variant="secondary"
            external
            className="!bg-transparent !text-ds-on-primary !border-white/28 hover:!bg-white/10"
          >
            Enterprise platform access
          </Button>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
