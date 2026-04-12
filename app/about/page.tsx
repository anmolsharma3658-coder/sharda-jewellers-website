import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Sharda Jewellers — your trusted family jeweller since 1971 in Bemetara, Chhattisgarh.",
};

const MILESTONES = [
  { year: "1971", text: "Sharda Jewellers opens its doors in Bemetara — the first jewellery store in the area. A bold beginning built on trust and craftsmanship." },
  { year: "1980s", text: "The name becomes synonymous with wedding jewellery across the region. Every bride's first choice." },
  { year: "1990s", text: "Expansion into diamond jewellery and contemporary designs, blending tradition with modernity." },
  { year: "2000s", text: "In-house manufacturing facility established for complete quality control — from raw gold to finished masterpiece." },
  { year: "2020s", text: "BIS Hallmark certification. AI-powered WhatsApp service. Custom design studio. The future, rooted in tradition." },
];

const SERVICES = [
  { icon: "◆", title: "Gold Jewellery", desc: "24K, 22K, 18K — BIS Hallmarked. Necklaces, bangles, rings, earrings, mangalsutra, and more." },
  { icon: "◇", title: "Diamond Jewellery", desc: "Certified diamonds in elegant settings. Solitaires, pendants, earrings, and engagement rings." },
  { icon: "◆", title: "Bridal Collections", desc: "Complete wedding sets with personalized consultation. From chokers to maang tikka." },
  { icon: "◇", title: "Custom Design", desc: "Bring your sketch or idea. Our craftsmen will create exactly what you envision." },
  { icon: "◆", title: "Silver & Gifts", desc: "Fine silver utensils, coins, and gift items for festivals, weddings, and celebrations." },
  { icon: "◇", title: "Old Gold Exchange", desc: "Exchange your old jewellery for new designs at the best rates. Fair valuation guaranteed." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/craftsman.png"
          alt="Master craftsman"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              Since 1971
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl font-bold leading-tight text-ivory sm:text-6xl">
              Three Generations
              <br />
              of <span className="text-gold">Trust</span>
            </h1>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <AnimateIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <Image
                src="/images/bridal-set.png"
                alt="Heritage jewellery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Our Story</p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
                Where Every Piece Carries a Promise
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-warm-gray">
                <p>
                  In 1971, when there wasn&apos;t a single jewellery shop in the Bemetara area,
                  Sharda Jewellers opened its doors. It was a bold decision — and the beginning
                  of a legacy that would span generations.
                </p>
                <p>
                  Your grandparents came to us for their wedding jewellery. Your parents trusted
                  us with theirs. And today, you&apos;re here. That continuity — that trust passed
                  down through generations — is our true identity.
                </p>
                <p>
                  We specialize in gold, silver, and diamond jewellery, with in-house manufacturing
                  and full customization. Because the jewellery that lives in your memories
                  is made only here.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-gold/30 pl-6">
                <p className="italic text-charcoal/60">
                  &ldquo;पीढ़ियाँ बदलती हैं, ज़माने के तौर-तरीके बदलते हैं, डिज़ाइन बदलते हैं —
                  लेकिन हमारी कारीगरी और हमारे मूल्य आज भी वही हैं जो पहले दिन थे।&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-16 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Milestones</p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-charcoal">Our Journey</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </AnimateIn>

          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent sm:left-1/2" />
            {MILESTONES.map((m, i) => (
              <AnimateIn key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative mb-12 flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}>
                  <div className={`hidden flex-1 sm:block ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <p className="font-serif text-lg font-bold text-gold">{m.year}</p>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">{m.text}</p>
                  </div>
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-ivory">
                    <div className="h-3 w-3 rounded-full bg-gold" />
                  </div>
                  <div className="flex-1 sm:hidden">
                    <p className="font-serif text-lg font-bold text-gold">{m.year}</p>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">{m.text}</p>
                  </div>
                  <div className={`hidden flex-1 sm:block ${i % 2 === 0 ? "pl-12" : "pr-12"}`} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-16 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">What We Offer</p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-charcoal">Our Services</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </AnimateIn>

          <div className="grid gap-px bg-charcoal/5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.08}>
                <div className="bg-ivory p-8 transition-colors hover:bg-cream">
                  <span className="text-xl text-gold">{svc.icon}</span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">{svc.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Visit Us</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal">Find Our Store</h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="overflow-hidden border border-charcoal/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.5349!3d21.7134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBemetara%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharda Jewellers location"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h2 className="font-serif text-3xl font-bold text-ivory sm:text-4xl">
              Experience the Sharda Difference
            </h2>
            <p className="mt-4 text-ivory/50">
              Visit us in store, or start a conversation on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919425561850"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
              >
                Start a Conversation
              </a>
              <Link
                href="/contact"
                className="border border-ivory/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all hover:border-ivory/40"
              >
                Contact Details
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
