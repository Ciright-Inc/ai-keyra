import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/ui/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  dark?: boolean;
  padding?: "default" | "none";
};

export function Card({
  children,
  dark = false,
  padding = "default",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        dark ? "ds-marketing-card ds-marketing-card--dark" : "ds-feature-card ds-marketing-card",
        padding === "none" && "!p-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
