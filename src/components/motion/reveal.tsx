"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Animation direction. `none` will only fade.
   */
  direction?: RevealDirection;
  /**
   * Distance in pixels for directional offset.
   */
  distance?: number;
  /**
   * Delay in seconds.
   */
  delay?: number;
  /**
   * Duration in seconds.
   */
  duration?: number;
  /**
   * Only animate once when entering viewport.
   */
  once?: boolean;
  /**
   * How much of the element should be visible before triggering.
   * Use a number (0..1) or `"some"` / `"all"`.
   */
  amount?: number | "some" | "all";
  /**
   * Root margin for viewport trigger, e.g. `"-80px 0px"`.
   */
  margin?: string;
}

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "none":
    default:
      return { x: 0, y: 0 };
  }
}

export function Reveal({
  children,
  className,
  direction = "up",
  distance = 16,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.25,
  margin = "-80px 0px",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = getOffset(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

