"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type FullBleedImageProps = {
  src: string;
  alt: string;
  children?: React.ReactNode;
  overlay?: "dark" | "gradient-bottom" | "gradient-left" | "subtle";
  priority?: boolean;
};

export function FullBleedImage({ src, alt, children, overlay = "dark", priority }: FullBleedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const overlayClass = {
    dark: "bg-charcoal/50",
    "gradient-bottom": "bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent",
    "gradient-left": "bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent",
    subtle: "bg-charcoal/30",
  }[overlay];

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div className="absolute inset-[-10%]" style={{ y, scale }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

type StickyRevealProps = {
  children: React.ReactNode;
  height?: string;
};

export function StickyReveal({ children, height = "300vh" }: StickyRevealProps) {
  return (
    <div style={{ height }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}

type ParallaxTextProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
};

export function ParallaxText({ children, speed = 0.5, className }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeInSection({ children, className }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

type ScaleImageProps = {
  src: string;
  alt: string;
  children?: React.ReactNode;
};

export function ScaleImage({ src, alt, children }: ScaleImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, 40]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, borderRadius }}
      className="relative min-h-screen overflow-hidden"
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      {children && <div className="absolute inset-0 z-10 flex items-end">{children}</div>}
    </motion.div>
  );
}
