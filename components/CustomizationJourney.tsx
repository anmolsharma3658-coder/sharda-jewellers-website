"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Your Vision",
    hindi: "आपकी कल्पना",
    desc: "Bring us your idea — a sketch, a photo, or simply a dream. Our designers will translate your vision into a detailed blueprint.",
    image: "/images/custom-sketch.png",
  },
  {
    number: "02",
    title: "The Craft",
    hindi: "कारीगरी",
    desc: "Our master artisans bring the design to life using traditional techniques passed down through generations. Every detail is hand-finished.",
    image: "/images/custom-crafting.png",
  },
  {
    number: "03",
    title: "The Reveal",
    hindi: "उपहार",
    desc: "Your one-of-a-kind masterpiece, crafted with devotion and presented with pride. A jewel that carries your story.",
    image: "/images/custom-reveal.png",
  },
];

export default function CustomizationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef}>
      {STEPS.map((step, i) => (
        <StepSection key={step.number} step={step} index={i} />
      ))}
    </div>
  );
}

function StepSection({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.2, 1, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [60, 0, 0, -30]);

  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className={`absolute inset-0 ${
        isEven
          ? "bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent"
          : "bg-gradient-to-l from-charcoal/90 via-charcoal/50 to-transparent"
      }`} />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className={`max-w-lg ${isEven ? "" : "ml-auto"}`}
          >
            <span className="font-serif text-7xl font-bold text-gold/20 sm:text-8xl">
              {step.number}
            </span>
            <h3 className="mt-[-1rem] font-serif text-4xl font-bold text-ivory sm:text-5xl">
              {step.title}
            </h3>
            <p className="mt-1 text-sm italic text-gold/60">{step.hindi}</p>
            <p className="mt-6 text-lg leading-relaxed text-ivory/60">{step.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
