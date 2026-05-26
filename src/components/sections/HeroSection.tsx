"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroInfrastructureBackdrop } from "@/components/visual/HeroInfrastructureBackdrop";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HERO, HERO_LAYERS, SITE } from "@/lib/content";
import { useHydratedReducedMotion, useMounted } from "@/lib/useMounted";

export function HeroSection() {
  const mounted = useMounted();
  const reduce = useHydratedReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % HERO.rotatingHeadlines.length),
      4200,
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  const rotating = HERO.rotatingHeadlines[index];

  return (
    <section className="ds-hero" aria-labelledby="hero-title">
      <HeroInfrastructureBackdrop />

      <div className="ds-shell relative z-10 w-full py-16 md:py-24">
        <div className="max-w-4xl">
          <FadeIn>
            <p className="ds-caption-uppercase mb-1">{SITE.domain}</p>
            <p className="ds-caption-uppercase mb-2">{HERO.eyebrow}</p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 id="hero-title" className="ds-display-mega mb-4">
              {HERO.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mb-4 max-w-2xl">
              <span className="ds-hero-subline" aria-live="polite">
                {!mounted || reduce ? (
                  <span className="block">{HERO.rotatingHeadlines[0]}</span>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotating}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                      className="block"
                    >
                      {rotating}
                    </motion.span>
                  </AnimatePresence>
                )}
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="ds-body-md max-w-2xl mb-8">{HERO.subheading}</p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="flex flex-wrap gap-3">
              <Button href={HERO.primaryCta.href} variant="primary">
                {HERO.primaryCta.label}
              </Button>
              <Button href={HERO.secondaryCta.href} variant="secondary">
                {HERO.secondaryCta.label}
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.32} className="mt-16 md:mt-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                { label: "Infrastructure planes", value: "8" },
                { label: "Trust protocols", value: "8" },
                { label: "Lifecycle phases", value: "10" },
                { label: "Deployment models", value: "4" },
              ].map((stat) => (
                <Card key={stat.label} className="ds-stat-tile">
                  <p className="ds-stat-tile__value">{stat.value}</p>
                  <p className="ds-stat-tile__label">{stat.label}</p>
                </Card>
              ))}
            </div>
            <div className="hidden lg:block max-w-xs">
              <p className="ds-caption-uppercase mb-3">Background systems</p>
              <ul className="space-y-1.5">
                {HERO_LAYERS.map((layer) => (
                  <li key={layer} className="ds-body-sm flex gap-2">
                    <span className="text-ds-ink" aria-hidden>
                      —
                    </span>
                    {layer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
