"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionCtaProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps primary/secondary CTAs with subtle tap/hover motion. Disabled when the
 * user prefers reduced motion; preserves focus styles on the inner control.
 */
export function MotionCta({ children, className }: MotionCtaProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={cn("inline-flex", className)}>{children}</span>;
  }

  return (
    <motion.span
      className={cn("inline-flex", className)}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 520, damping: 32, mass: 0.6 }}
    >
      {children}
    </motion.span>
  );
}
