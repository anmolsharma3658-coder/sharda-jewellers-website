import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import RatesCard from "@/components/RatesCard";
import { getRates } from "@/lib/rates";

const COLLECTIONS = [
  { name: "Gold Necklaces", image: "/images/hero-necklace.png", href: "/gallery" },
  { name: "Diamond Sets", image: "/images/diamond-set.png", href: "/gallery" },
  { name: "Bridal Collection", image: "/images/bridal-set.png", href: "/gallery" },
  { name: "Gold Bangles", image: "/images/gold-bangles.png", href: "/gallery" },
  { name: "Earrings & Jhumkas", image: "/images/gold-jhumka.png", href: "/gallery" },
  { name: "Gold Rings", image: "/images/gold-rings.png", href: "/gallery" },
];

const PROMISES = [
  { number: "55+", label: "Years of Trust", sublabel: "Since 1971" },
  { number: "BIS", label: "Hallmark Certified", sublabel: "Guaranteed Purity" },
  { number: "100%", label: "Customization", sublabel: "Your Design, Our Craft" },
  { number: "3", label: "Generations", sublabel: "Family Legacy" },
];

export default async function Home() {
  const rates = await getRates();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero-necklace.png"
          alt="Exquisite gold necklace by Sharda Jewellers"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn delay={0.2} direction="none">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              Est. 1971 &middot; Bemetara, Chhattisgarh
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-bold leading-[1.1] text-ivory sm:text-6xl lg:text-7xl">
              Where Heritage
              <br />
              Meets <span className="gold-gradient-text">Elegance</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.6}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/60">
              Three generations of master craftsmen creating timeless jewellery.
              Gold, Silver &amp; Diamonds — crafted with devotion, worn with pride.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.8}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
              >
                View Collections
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ivory/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all hover:border-ivory/40 hover:bg-ivory/5"
              >
                Book Appointment
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-ivory/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Promises / Stats ── */}
      <section className="border-b border-charcoal/5 bg-ivory py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {PROMISES.map((p, i) => (
            <AnimateIn key={p.label} delay={i * 0.1} direction="up">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-gold sm:text-5xl">{p.number}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-charcoal">
                  {p.label}
                </p>
                <p className="mt-1 text-xs text-warm-gray">{p.sublabel}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Collections Grid ── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-16 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                Curated for You
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
                Our Collections
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((col, i) => (
              <AnimateIn key={col.name} delay={i * 0.08}>
                <Link href={col.href} className="image-shine group relative block aspect-[4/5] overflow-hidden bg-charcoal">
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-serif text-xl font-semibold text-ivory">
                      {col.name}
                    </h3>
                    <span className="mt-2 inline-block text-[11px] uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-charcoal/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:border-gold hover:text-gold"
              >
                View All Collections
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Craftsmanship ── */}
      <section className="overflow-hidden bg-charcoal">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src="/images/craftsman.png"
              alt="Master craftsman at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center px-6 py-20 lg:px-16">
            <div>
              <AnimateIn direction="right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                  The Art of Jewellery
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-ivory sm:text-5xl">
                  Crafted by Hand,
                  <br />
                  <span className="text-gold">Perfected by Time</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ivory/60">
                  Every piece that leaves our workshop carries the dedication of master artisans
                  who have honed their craft across generations. We don&apos;t just make jewellery —
                  we create heirlooms that tell your family&apos;s story.
                </p>
                <blockquote className="mt-8 border-l-2 border-gold/30 pl-6 italic text-ivory/40">
                  &ldquo;जो गहना आपकी यादों में बसे, वो सिर्फ यहीं बनता है।&rdquo;
                  <br />
                  <span className="mt-1 block text-xs not-italic text-gold/60">
                    The jewellery that lives in your memories — is made only here.
                  </span>
                </blockquote>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
                  >
                    Our Story
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Rates ── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                Updated Every 30 Minutes
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
                Today&apos;s Rates
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <RatesCard rates={rates} />
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/rates"
                className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-dark"
              >
                View Detailed Rates &rarr;
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Featured Pieces ── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-16 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
                Handpicked
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
                Featured Pieces
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-3">
            <AnimateIn delay={0} className="md:row-span-2">
              <div className="image-shine group relative h-full min-h-[500px] overflow-hidden bg-charcoal">
                <Image
                  src="/images/jewelry-flatlay.png"
                  alt="Gold jewellery collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Everyday Elegance</p>
                  <h3 className="mt-1 font-serif text-xl text-ivory">Mangalsutra &amp; Chains</h3>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="image-shine group relative aspect-square overflow-hidden bg-charcoal">
                <Image
                  src="/images/gold-coins.png"
                  alt="24K Gold coins"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Investment</p>
                  <h3 className="mt-1 font-serif text-xl text-ivory">24K Gold Coins</h3>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="image-shine group relative aspect-square overflow-hidden bg-charcoal">
                <Image
                  src="/images/silver-items.png"
                  alt="Silver gift items"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Gifting</p>
                  <h3 className="mt-1 font-serif text-xl text-ivory">Silver Collectibles</h3>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2} className="md:col-span-2">
              <div className="image-shine group relative aspect-[2/1] overflow-hidden bg-charcoal">
                <Image
                  src="/images/bridal-set.png"
                  alt="Bridal jewellery set"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Bridal</p>
                  <h3 className="mt-1 font-serif text-xl text-ivory">Complete Wedding Collection</h3>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Legacy Quote ── */}
      <section className="relative overflow-hidden bg-charcoal py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/craftsman.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <blockquote className="font-serif text-2xl leading-relaxed text-ivory/80 sm:text-3xl">
              &ldquo;In 1971, when there wasn&apos;t a single jewellery shop in this area — we were here.
              Your grandparents came to us, and today, so do you.
              That is our true identity.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm italic text-ivory/30">
              सन् 1971 से, जब इस इलाके में गहनों की कोई दुकान तक नहीं थी — हम थे।
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-gold/30 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-charcoal"
              >
                Read Our Story
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              Begin Your Journey
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
              Let Us Create Something
              <br />
              <span className="text-gold">Beautiful for You</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-warm-gray">
              Visit our store, call us, or start a WhatsApp conversation.
              Custom orders welcome — bring your vision, we&apos;ll bring it to life.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
              >
                Start a Conversation
              </a>
              <a
                href="tel:+919425561850"
                className="border border-charcoal/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:border-gold hover:text-gold"
              >
                Call +91 94255 61850
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
