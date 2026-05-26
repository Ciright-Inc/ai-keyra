import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/components/ui/cn";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  band?: "light" | "soft" | "dark" | "none";
  align?: "left" | "center";
};

const bandClass = {
  light: "ds-band-light",
  soft: "ds-band-soft",
  dark: "ds-band-dark",
  none: "",
} as const;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  band = "none",
  align = "left",
}: SectionShellProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <section
      id={id}
      className={cn("ds-section", bandClass[band], className)}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="ds-shell">
        <FadeIn className={cn("max-w-3xl mb-12 md:mb-16", alignClass)}>
          {eyebrow ? (
            <p className="ds-caption-uppercase mb-2">{eyebrow}</p>
          ) : null}
          <h2
            id={id ? `${id}-title` : undefined}
            className="ds-display-xl mb-5"
          >
            {title}
          </h2>
          {description ? (
            <p className={cn("ds-body-md max-w-3xl", align === "center" && "mx-auto")}>
              {description}
            </p>
          ) : null}
        </FadeIn>
        {children}
      </div>
    </section>
  );
}
