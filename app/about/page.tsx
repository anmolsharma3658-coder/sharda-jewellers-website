import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { FullBleedImage, FadeInSection, ScaleImage } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Sharda Jewellers — your trusted family jeweller since 1971 in Bemetara, Chhattisgarh.",
};

const MILESTONES = [
  { year: "1971", text: "Sharda Jewellers opens in Bemetara — the first jewellery store in the area. A bold beginning built on trust." },
  { year: "1980s", text: "Becomes synonymous with wedding jewellery across the region. Every bride's first choice." },
  { year: "1990s", text: "Expansion into diamond jewellery and contemporary designs." },
  { year: "2000s", text: "In-house manufacturing established for complete quality control." },
  { year: "Today", text: "Three generations strong. BIS Hallmark certified. AI-powered service. The future, rooted in tradition." },
];

const SERVICES = [
  { title: "Gold Jewellery", desc: "24K, 22K, 18K — BIS Hallmarked" },
  { title: "Diamond Jewellery", desc: "Certified diamonds in elegant settings" },
  { title: "Bridal Collections", desc: "Complete wedding sets with consultation" },
  { title: "Custom Design", desc: "Your sketch, our craftsmen" },
  { title: "Silver & Gifts", desc: "Fine silver utensils, coins, gift items" },
  { title: "Old Gold Exchange", desc: "Fair valuation, best rates guaranteed" },
];

export default function AboutPage() {
  return (
    <>
      <FullBleedImage src="/images/craftsman.png" alt="Master craftsman" overlay="gradient-left" priority>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn delay={0.3}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">Since 1971</p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl font-bold leading-tight text-ivory sm:text-7xl">
              Our Story
            </h1>
            <div className="mt-4 h-px w-12 bg-gold/40" />
          </AnimateIn>
        </div>
      </FullBleedImage>

      {/* Story */}
      <section className="bg-ivory py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <AnimateIn direction="left">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/gen-grandmother.png"
                alt="Generational heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
          <FadeInSection className="flex flex-col justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold">The Beginning</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
              Where Every Piece Carries a Promise
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-warm-gray">
              <p>
                In 1971, when there wasn&apos;t a single jewellery shop in the Bemetara area,
                Sharda Jewellers opened its doors. It was a bold decision — and the beginning
                of a legacy that would span generations.
              </p>
              <p>
                Your grandparents came to us for their wedding jewellery. Your parents trusted
                us with theirs. And today, you&apos;re here.
              </p>
              <p>
                We specialize in gold, silver, and diamond jewellery, with in-house manufacturing
                and full customization. Because the jewellery that lives in your memories
                is made only here.
              </p>
            </div>
            <blockquote className="mt-8 border-l border-gold/30 pl-6">
              <p className="text-sm italic text-charcoal/50">
                &ldquo;पीढ़ियाँ बदलती हैं, डिज़ाइन बदलते हैं — लेकिन हमारी कारीगरी और हमारे मूल्य आज भी वही हैं।&rdquo;
              </p>
            </blockquote>
          </FadeInSection>
        </div>
      </section>

      <ScaleImage src="/images/gen-passing.png" alt="Passing the legacy">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <p className="max-w-md font-serif text-2xl font-light italic leading-relaxed text-ivory/70">
            &ldquo;Some things are more precious than gold — the hands that pass it on.&rdquo;
          </p>
        </div>
      </ScaleImage>

      {/* Timeline */}
      <section className="bg-cream py-32">
        <FadeInSection className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">Milestones</p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal">Our Journey</h2>
          <div className="section-divider mt-6" />
        </FadeInSection>

        <div className="mx-auto mt-16 max-w-2xl px-6 lg:px-8">
          {MILESTONES.map((m, i) => (
            <AnimateIn key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="mb-10 flex items-start gap-6">
                <div className="flex w-20 shrink-0 items-start justify-end">
                  <span className="text-sm font-bold text-gold">{m.year}</span>
                </div>
                <div className="relative border-l border-gold/20 pl-6 pb-2">
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                  <p className="text-sm leading-relaxed text-warm-gray">{m.text}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory py-32">
        <FadeInSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">What We Offer</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal">Our Services</h2>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid gap-px bg-charcoal/5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.06}>
                <div className="bg-ivory p-10 transition-colors hover:bg-cream">
                  <h3 className="font-serif text-lg font-semibold text-charcoal">{svc.title}</h3>
                  <p className="mt-2 text-sm text-warm-gray">{svc.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <FullBleedImage src="/images/custom-reveal.png" alt="Visit us" overlay="dark">
        <FadeInSection className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-ivory sm:text-5xl">
            Experience the Sharda Difference
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://wa.me/919425561850"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-gold-light"
            >
              Start a Conversation
            </a>
            <Link
              href="/contact"
              className="border border-ivory/15 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/70 transition-all hover:border-ivory/30 hover:text-ivory"
            >
              Visit Us
            </Link>
          </div>
        </FadeInSection>
      </FullBleedImage>
    </>
  );
}
