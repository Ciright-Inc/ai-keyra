import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { FINAL_STATEMENT } from "@/lib/content";

export function FinalStatementSection() {
  return (
    <section className="ds-section ds-band-light" aria-labelledby="final-statement">
      <div className="ds-shell text-center max-w-3xl mx-auto">
        <FadeIn>
          <p className="ds-caption-uppercase mb-2">Keyra AOTI</p>
          <h2 id="final-statement" className="ds-display-xl mb-5">
            {FINAL_STATEMENT.headline}
          </h2>
          <p className="ds-body-md mx-auto mb-8">{FINAL_STATEMENT.body}</p>
          <Button href={FINAL_STATEMENT.cta.href} variant="primary" external>
            {FINAL_STATEMENT.cta.label}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
