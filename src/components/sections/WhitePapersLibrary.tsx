"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  INSTITUTIONAL_CREDENTIALS,
  WHITE_PAPER_ARCHIVE_TOPICS,
  WHITE_PAPERS,
  type WhitePaper,
} from "@/lib/content";
import { cn } from "@/components/ui/cn";

type AccessMode = "read" | "narrated" | "conversational";

const MODES: { id: AccessMode; label: string }[] = [
  { id: "read", label: "Read mode" },
  { id: "narrated", label: "Narrated mode" },
  { id: "conversational", label: "Conversational research" },
];

export function WhitePapersLibrary() {
  const [selected, setSelected] = useState<WhitePaper>(WHITE_PAPERS[0]);
  const [mode, setMode] = useState<AccessMode>("read");
  const [credential, setCredential] = useState<(typeof INSTITUTIONAL_CREDENTIALS)[number]["id"]>(
    INSTITUTIONAL_CREDENTIALS[0].id,
  );
  const [activePrompt, setActivePrompt] = useState(0);

  const credentialInfo = INSTITUTIONAL_CREDENTIALS.find((c) => c.id === credential)!;

  return (
    <SectionShell
      id="research"
      eyebrow="White Papers Library"
      title="Institutional research archive for Autonomous Operational Trust Infrastructure"
      description="Bell Labs–grade operational doctrine — governance frameworks, federation research, telecom-rooted identity, runtime authorization, execution verification, and sovereign trust architecture."
      band="light"
    >
      <FadeIn className="mb-8">
        <p className="ds-caption-uppercase mb-3">Archive coverage</p>
        <div className="flex flex-wrap gap-2">
          {WHITE_PAPER_ARCHIVE_TOPICS.map((topic) => (
            <span key={topic} className="ds-standard-chip">
              {topic}
            </span>
          ))}
        </div>
      </FadeIn>
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <FadeIn>
          <div className="space-y-2">
            <p className="ds-caption-uppercase mb-3">Archive index</p>
            {WHITE_PAPERS.map((paper) => (
              <button
                key={paper.id}
                type="button"
                onClick={() => {
                  setSelected(paper);
                  setActivePrompt(0);
                }}
                className={cn(
                  "w-full text-left ds-feature-card px-4 py-3 transition-colors",
                  selected.id === paper.id && "ring-2 ring-ds-ink ring-offset-2",
                )}
              >
                <p className="ds-caption-uppercase mb-1">{paper.category}</p>
                <p className="ds-title-sm">{paper.title}</p>
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-[var(--ds-radius-pill)] text-xs font-medium border transition-colors",
                    mode === m.id
                      ? "bg-ds-primary text-ds-on-primary border-transparent"
                      : "border-ds-hairline-strong text-ds-body bg-ds-surface-card hover:bg-ds-canvas-soft",
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <h3 className="ds-display-lg mb-2">{selected.title}</h3>
            <p className="ds-body-sm mb-6">{selected.abstract}</p>

            {mode === "read" ? (
              <div className="ds-body-md max-w-none">
                <p>{selected.readExcerpt}</p>
              </div>
            ) : null}

            {mode === "narrated" ? (
              <div className="rounded-[var(--ds-radius-md)] bg-ds-canvas-soft p-5 border border-ds-hairline-strong">
                <p className="ds-caption-uppercase mb-3">Narration transcript</p>
                <p className="ds-body-md italic">&ldquo;{selected.narration}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <Button variant="primary" size="sm">
                    Play narration
                  </Button>
                  <span className="ds-caption normal-case">
                    Institutional voice — verified access
                  </span>
                </div>
              </div>
            ) : null}

            {mode === "conversational" ? (
              <div className="space-y-4">
                <p className="ds-caption-uppercase">Research prompts</p>
                <div className="flex flex-wrap gap-2">
                  {selected.conversationalPrompts.map((prompt, i) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setActivePrompt(i)}
                      className={cn(
                        "text-left text-xs px-3 py-2 rounded-[var(--ds-radius-md)] border max-w-xs transition-colors",
                        activePrompt === i
                          ? "border-ds-ink bg-ds-surface-strong"
                          : "border-ds-hairline-strong hover:bg-ds-canvas-soft",
                      )}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <Card className="p-4">
                  <p className="ds-caption mb-2 normal-case">Research assistant</p>
                  <p className="ds-body-sm mb-3">
                    {selected.conversationalPrompts[activePrompt]}
                  </p>
                  <p className="ds-body-md">
                    {selected.readExcerpt.split(".")[0]}.
                  </p>
                </Card>
              </div>
            ) : null}
          </Card>
        </FadeIn>
      </div>

      <FadeIn delay={0.12} className="mt-10">
        <Card dark className="p-6 md:p-8">
          <p className="ds-caption-uppercase mb-2 text-white/60">
            Verified institutional access
          </p>
          <h3 className="ds-title-md text-ds-on-primary mb-4">
            Telecom, government, and university credential workflows
          </h3>
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            {INSTITUTIONAL_CREDENTIALS.map((cred) => (
              <button
                key={cred.id}
                type="button"
                onClick={() => setCredential(cred.id)}
                className={cn(
                  "text-left rounded-[var(--ds-radius-md)] border px-4 py-3 transition-colors",
                  credential === cred.id
                    ? "border-white/40 bg-white/10"
                    : "border-white/14 bg-white/5 hover:bg-white/8",
                )}
              >
                <p className="ds-title-sm text-ds-on-primary">{cred.label}</p>
                <p className="ds-body-sm mt-1 opacity-80">{cred.detail}</p>
              </button>
            ))}
          </div>
          <p className="ds-body-sm mb-4 opacity-80">{credentialInfo.detail}</p>
          <Button
            href="https://keyra.ie/contact"
            variant="secondary"
            external
            className="!bg-ds-on-primary !text-ds-ink !border-ds-on-primary hover:!bg-ds-canvas-soft"
          >
            Request verified institutional access
          </Button>
        </Card>
      </FadeIn>
    </SectionShell>
  );
}
