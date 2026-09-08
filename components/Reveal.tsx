"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsetMap: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  amount = 0.2,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  amount?: number;
  as?: any;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Component className={cn(className)}>{children}</Component>;
  }

  const offset = offsetMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionComponent = motion(Component) as ComponentType<any>;

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionComponent>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  amount = 0.15,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  as?: any;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Component className={cn(className)}>{children}</Component>;
  }

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren, staggerChildren },
    },
  };

  const MotionComponent = motion(Component) as ComponentType<any>;

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionComponent>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  as?: any;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Component className={cn(className)}>{children}</Component>;
  }

  const offset = offsetMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionComponent = motion(Component) as ComponentType<any>;

  return (
    <MotionComponent className={cn(className)} variants={variants}>
      {children}
    </MotionComponent>
  );
}
