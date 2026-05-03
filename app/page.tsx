import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import RatesCard from "@/components/RatesCard";
import GenerationalStory from "@/components/GenerationalStory";
import CustomizationJourney from "@/components/CustomizationJourney";
import { FullBleedImage, ScaleImage, FadeInSection } from "@/components/ScrollReveal";
import { getRates } from "@/lib/rates";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: new URL("/", SITE_URL).toString() },
};

const HERITAGE = [
  { name: "Marathi Mala", hindi: "मराठी माला", image: "/images/marathi-mala.png", desc: "Traditional silver temple necklace" },
  { name: "Lakchha Beri", hindi: "लक्छा बेरी", image: "/images/lakchha-beri.png", desc: "Twisted rope gold bangles" },
  { name: "Mohar", hindi: "मोहर", image: "/images/gold-mohar.png", desc: "Gold coin pendant necklace" },
  { name: "Payal", hindi: "पायल", image: "/images/silver-payal.png", desc: "Ornate silver anklets with bells" },
  { name: "Kamarband", hindi: "कमरबंद", image: "/images/kamarband.png", desc: "Gold waist chain with peacock motifs" },
  { name: "Bichhiya", hindi: "बिछिया", image: "/images/silver-bichhiya.png", desc: "Silver toe rings with floral patterns" },
];

export default async function Home() {
  const rates = await getRates();

  return (
    <>
      {/* ═══ Chapter 1: The Opening ═══ */}
      <FullBleedImage
        src="/images/hero-necklace.png"
        alt="22K gold bridal necklace at Sharda Jewellers — trusted gold jewellers in Bemetara, Chhattisgarh since 1971"
        overlay="gradient-left"
        priority
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn delay={0.3} direction="none">
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/80">
              Est. 1971 &middot; Bemetara, Chhattisgarh
            </p>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-bold leading-[1.05] text-ivory sm:text-7xl lg:text-8xl">
              Where Heritage
              <br />
              Meets <span className="gold-gradient-text italic">Elegance</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.9}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/50 sm:text-lg">
              Three generations of master craftsmen. One unwavering promise of purity.
            </p>
          </AnimateIn>
          <AnimateIn delay={1.1}>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal transition-all duration-300 hover:bg-gold-light"
              >
                Explore Collections
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919137761477"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ivory/15 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/80 transition-all duration-300 hover:border-ivory/30 hover:text-ivory"
              >
                Book Appointment
              </a>
            </div>
          </AnimateIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/25">Discover</span>
            <div className="h-16 w-px animate-pulse bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </div>
      </FullBleedImage>

      {/* ═══ Chapter 2: The Legacy — Generational Story ═══ */}
      <section className="bg-charcoal py-32">
        <FadeInSection className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
            Chapter One
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ivory sm:text-5xl">
            A Legacy Written in Gold
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-base leading-relaxed text-ivory/40 sm:text-lg">
            Some stories are told in words. Ours is told in gold — passed from hand to hand,
            generation to generation, each piece carrying the warmth of those who wore it before.
          </p>
        </FadeInSection>
      </section>

      <GenerationalStory />

      {/* ═══ Chapter 3: Gold Detail Interlude ═══ */}
      <ScaleImage src="/images/gold-macro.png" alt="Gold filigree detail">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <p className="max-w-md font-serif text-2xl font-light italic leading-relaxed text-ivory/70 sm:text-3xl">
            &ldquo;In every curve of gold, there is a story waiting to be told.&rdquo;
          </p>
        </div>
      </ScaleImage>

      {/* ═══ Chapter 4: Heritage of Chhattisgarh ═══ */}
      <section className="bg-ivory py-32">
        <FadeInSection className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
            Chapter Two
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
            Rooted in Chhattisgarh
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-base leading-relaxed text-warm-gray sm:text-lg">
            Every region has its own jewellery language. These are the ornaments of Chhattisgarh —
            designs that have adorned the women of this land for centuries.
          </p>
        </FadeInSection>

        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HERITAGE.map((item, i) => (
              <AnimateIn key={item.name} delay={i * 0.08}>
                <div className="image-shine group relative aspect-[4/5] overflow-hidden bg-charcoal">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{item.hindi}</p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-ivory sm:text-2xl">{item.name}</h3>
                    <p className="mt-2 text-sm text-ivory/40 transition-all duration-300 group-hover:text-ivory/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Chapter 5: Rani Haar Full Bleed ═══ */}
      <FullBleedImage src="/images/rani-haar.png" alt="Rani Haar bridal necklace" overlay="dark">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeInSection>
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
              Signature Piece
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ivory sm:text-6xl">
              The Rani Haar
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-ivory/40 sm:text-lg">
              A cascading masterpiece of layered gold — the queen&apos;s necklace.
              Traditionally worn by brides, each layer tells a chapter of her new beginning.
            </p>
          </FadeInSection>
        </div>
      </FullBleedImage>

      {/* ═══ Chapter 6: The Art of Customization ═══ */}
      <section className="bg-charcoal py-32">
        <FadeInSection className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
            Chapter Three
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ivory sm:text-5xl">
            From Vision to Masterpiece
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-gold/30" />
          <p className="mt-6 text-base leading-relaxed text-ivory/40 sm:text-lg">
            Every custom piece begins with a conversation. You dream it, we create it —
            exactly as you imagined, made entirely by hand in our workshop.
          </p>
        </FadeInSection>
      </section>

      <CustomizationJourney />

      {/* ═══ Chapter 7: Maang Tikka Interlude ═══ */}
      <ScaleImage src="/images/maang-tikka.png" alt="Gold Maang Tikka">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <p className="max-w-md font-serif text-2xl font-light italic leading-relaxed text-ivory/70 sm:text-3xl">
            &ldquo;Every ornament is a whisper of tradition, a promise of forever.&rdquo;
          </p>
        </div>
      </ScaleImage>

      {/* ═══ Chapter 8: Today's Rates ═══ */}
      <section className="bg-ivory py-32">
        <FadeInSection className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
              Transparency
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
              Today&apos;s Rates
            </h2>
            <div className="section-divider mt-6" />
            <p className="mt-6 text-warm-gray">
              Live prices updated every 30 minutes. Indian taxes included. No surprises.
            </p>
          </div>
          <RatesCard rates={rates} />
          <div className="mt-8 text-center">
            <Link
              href="/rates"
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-dark"
            >
              View Detailed Breakdown &rarr;
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* ═══ Final Chapter: The Invitation ═══ */}
      <FullBleedImage src="/images/gen-bride.png" alt="Begin your story" overlay="dark">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeInSection>
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
              Your Story Begins Here
            </p>
            <h2 className="mt-6 font-serif text-4xl font-bold text-ivory sm:text-5xl lg:text-6xl">
              Let Us Write the Next Chapter
              <br />
              <span className="text-gold">Together</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-ivory/40">
              Visit our store in Bemetara, call us, or start a WhatsApp conversation.
              Your masterpiece awaits.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a
                href="https://wa.me/919137761477?text=Hello%20Sharda%20Jewellers!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal transition-all duration-300 hover:bg-gold-light"
              >
                Start a Conversation
              </a>
              <a
                href="tel:+919425561850"
                className="border border-ivory/15 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/70 transition-all duration-300 hover:border-ivory/30 hover:text-ivory"
              >
                Call +91 94255 61850
              </a>
            </div>
          </FadeInSection>
        </div>
      </FullBleedImage>
    </>
  );
}
