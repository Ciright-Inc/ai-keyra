"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";
import { useHydratedReducedMotion, useMounted } from "@/lib/useMounted";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const mounted = useMounted();
  const reduce = useHydratedReducedMotion();
  const Component = motion[as];

  if (!mounted || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...fadeUp.visible.transition,
            delay,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
