"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface UseScrollRevealOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
}

const directionVariants: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    direction = "up",
    delay = 0,
    duration = 0.6,
    once = true,
    margin = "-100px",
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as never,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return {
    ref,
    variants,
    isInView,
  };
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: AnimatedSectionProps) {
  const { ref, variants, isInView } = useScrollReveal({
    direction,
    delay,
    duration,
    once,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
