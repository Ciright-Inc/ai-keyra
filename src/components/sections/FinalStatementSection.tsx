import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { FINAL_OUTCOME, FINAL_STATEMENT } from "@/lib/content";

export function FinalStatementSection() {
  return (
    <section className="ds-section ds-band-light" aria-labelledby="final-statement">
      <div className="ds-shell text-center max-w-3xl mx-auto">
        <FadeIn>
          <p className="ds-caption-uppercase mb-2">Keyra AOTI</p>
          <h2 id="final-statement" className="ds-display-xl mb-5">
            {FINAL_STATEMENT.headline}
          </h2>
          <p className="ds-body-md mx-auto mb-6">{FINAL_STATEMENT.body}</p>
          <p className="ds-body-md mx-auto mb-8 max-w-2xl border-t border-ds-hairline-strong pt-6">
            {FINAL_STATEMENT.closing}
          </p>

          <p className="ds-caption-uppercase mb-4">{FINAL_OUTCOME.emotional}</p>
          <ul className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {FINAL_OUTCOME.principles.map((principle) => (
              <li key={principle} className="ds-standard-chip text-xs">
                {principle}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-3">
            <Button href={FINAL_STATEMENT.cta.href} variant="primary" external>
              {FINAL_STATEMENT.cta.label}
            </Button>
            <Button href={FINAL_STATEMENT.secondaryCta.href} variant="secondary">
              {FINAL_STATEMENT.secondaryCta.label}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
