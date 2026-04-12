"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const GENERATIONS = [
  {
    era: "1971",
    title: "Where It All Began",
    hindi: "जहाँ से शुरू हुआ सब कुछ",
    story: "When there wasn't a single jewellery shop in Bemetara, we opened our doors. A promise made to the community — that the finest craftsmanship would be available right here, at home.",
    image: "/images/gen-grandmother.png",
  },
  {
    era: "Passed Down",
    title: "From Mother to Daughter",
    hindi: "माँ से बेटी तक",
    story: "Every piece we create carries a story. The necklace your grandmother wore on her wedding day, now fastened around your neck by your mother's hands. Some things are more precious than gold.",
    image: "/images/gen-passing.png",
  },
  {
    era: "Today",
    title: "A New Chapter",
    hindi: "एक नया अध्याय",
    story: "Three generations later, we're still here — still crafting, still innovating. Modern designs rooted in timeless tradition. Your story, written in gold.",
    image: "/images/gen-bride.png",
  },
];

export default function GenerationalStory() {
  return (
    <div>
      {GENERATIONS.map((gen, i) => (
        <GenerationPanel key={gen.era} gen={gen} index={i} />
      ))}
    </div>
  );
}

function GenerationPanel({ gen, index }: { gen: typeof GENERATIONS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.75, 0.9], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.35], [80, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-[-15%]" style={{ y: imgY, scale: imgScale }}>
        <Image
          src={gen.image}
          alt={gen.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/20" />

      <div className="relative z-10 flex min-h-screen items-end pb-24 sm:items-center sm:pb-0">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="max-w-xl">
            <span className="inline-block border border-gold/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
              {gen.era}
            </span>
            <h3 className="mt-6 font-serif text-4xl font-bold leading-tight text-ivory sm:text-5xl lg:text-6xl">
              {gen.title}
            </h3>
            <p className="mt-2 text-sm italic text-gold/50">{gen.hindi}</p>
            <p className="mt-6 text-lg leading-relaxed text-ivory/60">{gen.story}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
