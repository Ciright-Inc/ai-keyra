import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/components/ui/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "default" | "sm";

const variantClass: Record<ButtonVariant, string> = {
  primary: "ds-btn-primary",
  secondary: "ds-btn-secondary",
  tertiary: "ds-btn-tertiary",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  external?: boolean;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "default",
  className,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    variantClass[variant],
    size === "sm" && variant !== "tertiary" && "is-sm",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
