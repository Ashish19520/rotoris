import type { Variants } from 'framer-motion';

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const baseTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0, transition: { ...baseTransition, duration: 0.4 } },
  exit: { opacity: 0, y: '100%', transition: { duration: 0.3 } },
};

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export const heroStaggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export const navSlideVariants: Variants = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { x: '-100%', transition: { duration: 0.25 } },
};

export const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

export const calculateParallax = (scrollY: number, elementTop: number, speed: number = 0.5): number => {
  const offset = scrollY - elementTop;
  return offset * speed;
};
