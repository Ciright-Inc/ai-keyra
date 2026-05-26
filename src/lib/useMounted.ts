"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/**
 * SSR-safe reduced motion: returns `true` (static) until after mount, then the real preference.
 * Avoids hydration mismatch — `useReducedMotion()` is false on the server but often true on client.
 */
export function useHydratedReducedMotion() {
  const mounted = useMounted();
  const prefersReduced = useReducedMotion();
  if (!mounted) return true;
  return prefersReduced;
}
