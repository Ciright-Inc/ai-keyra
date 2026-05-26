export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const },
  },
} as const;

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
} as const;

export const easeInstitutional = [0.22, 0.61, 0.36, 1] as const;

export const motionLayers = {
  fg: 0.3,
  mg: 0.5,
  bg: 0.7,
} as const;
