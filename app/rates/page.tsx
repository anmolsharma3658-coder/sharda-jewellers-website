import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { FullBleedImage, FadeInSection } from "@/components/ScrollReveal";
import { getRates } from "@/lib/rates";

export const metadata: Metadata = {
  title: "Live Gold & Silver Rates",
  description: "Today's live gold and silver rates in India with import duty and GST included.",
};

function fmt(n: number) {
  return n.toLocaleString("en-IN");
}

export default async function RatesPage() {
  const rates = await getRates();

  if (!rates) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ivory">
        <div className="px-6 text-center">
          <h1 className="font-serif text-3xl font-bold text-charcoal">Live Rates</h1>
          <p className="mt-4 text-warm-gray">Rates are currently unavailable.</p>
          <a href="tel:+919425561850" className="mt-6 inline-block bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal">
            Call for Rates
          </a>
        </div>
      </div>
    );
  }

  const goldRows = [
    { purity: "24 Karat", badge: "999", gram: rates.gold24kPerGram, ten: rates.gold24kPer10Gram, use: "Investment & Pure Gold" },
    { purity: "22 Karat", badge: "916", gram: rates.gold22kPerGram, ten: rates.gold22kPer10Gram, use: "Traditional Jewellery" },
    { purity: "18 Karat", badge: "750", gram: rates.gold18kPerGram, ten: rates.gold18kPer10Gram, use: "Diamond Settings" },
  ];

  return (
    <>
      <FullBleedImage src="/images/gold-coins.png" alt="Gold rates" overlay="dark" priority>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimateIn delay={0.3}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
              Updated Every 30 Minutes
            </p>
            <h1 className="mt-4 font-serif text-5xl font-bold text-ivory sm:text-7xl">
              Today&apos;s Rates
            </h1>
            <div className="section-divider mt-6" />
            <p className="mx-auto mt-6 max-w-md text-sm text-ivory/35">
              India retail &middot; Import Duty ({rates.importDuty}%) + GST ({rates.gst}%) included
              &middot; {rates.updatedAt}
            </p>
          </AnimateIn>
        </div>
      </FullBleedImage>

      {/* Gold */}
      <section className="bg-ivory py-32">
        <FadeInSection className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">Precious Metal</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal">Gold Rates</h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {goldRows.map((row, i) => (
              <AnimateIn key={row.purity} delay={i * 0.12}>
                <div className="border border-charcoal/5 bg-white p-10 text-center transition-all duration-300 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5">
                  <span className="inline-block rounded-full bg-gold/8 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
                    {row.badge}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">{row.purity}</h3>
                  <p className="mt-8 font-serif text-5xl font-bold text-charcoal">
                    &#x20B9;{fmt(row.gram)}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-warm-gray-light">per gram</p>
                  <div className="mx-auto my-6 h-px w-8 bg-charcoal/5" />
                  <p className="text-lg font-semibold text-charcoal">&#x20B9;{fmt(row.ten)}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-warm-gray-light">per 10 grams</p>
                  <p className="mt-6 text-xs text-warm-gray">{row.use}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Silver */}
      <section className="bg-cream py-32">
        <FadeInSection className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-warm-gray">Fine Metal</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal">Silver Rates</h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <AnimateIn delay={0}>
              <div className="border border-charcoal/5 bg-white p-10 text-center transition-all hover:border-gold/20">
                <span className="inline-block rounded-full bg-warm-gray/8 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-warm-gray">
                  999 Fine
                </span>
                <p className="mt-8 font-serif text-5xl font-bold text-charcoal">&#x20B9;{fmt(rates.silverPerGram)}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-warm-gray-light">per gram</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="border border-charcoal/5 bg-white p-10 text-center transition-all hover:border-gold/20">
                <span className="inline-block rounded-full bg-warm-gray/8 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-warm-gray">
                  999 Fine
                </span>
                <p className="mt-8 font-serif text-5xl font-bold text-charcoal">&#x20B9;{fmt(rates.silverPerKg)}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-warm-gray-light">per kilogram</p>
              </div>
            </AnimateIn>
          </div>
        </FadeInSection>
      </section>

      {/* Tax */}
      <section className="bg-ivory py-24">
        <FadeInSection className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="border border-charcoal/5 bg-white">
            <div className="border-b border-charcoal/5 p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-charcoal">Price Composition</h3>
            </div>
            <div className="grid gap-px bg-charcoal/5 sm:grid-cols-3">
              <div className="bg-white p-8 text-center">
                <p className="font-serif text-3xl font-bold text-gold">{rates.importDuty}%</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">Import Duty</p>
              </div>
              <div className="bg-white p-8 text-center">
                <p className="font-serif text-3xl font-bold text-gold">{rates.gst}%</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">GST</p>
              </div>
              <div className="bg-white p-8 text-center">
                <p className="font-serif text-3xl font-bold text-gold">Varies</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">Making Charges</p>
              </div>
            </div>
            <div className="border-t border-charcoal/5 p-6 text-center">
              <p className="text-xs text-warm-gray">
                International spot + import duty + GST. Making charges are additional. Visit store for final pricing.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <FadeInSection className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-ivory sm:text-4xl">Want an Exact Quote?</h2>
          <p className="mt-4 text-ivory/40">
            Tell us the piece you&apos;re interested in — we&apos;ll give you the complete price.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://wa.me/919137761477?text=I%20want%20a%20price%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-gold-light"
            >
              Get a Quote
            </a>
            <a
              href="tel:+919425561850"
              className="border border-ivory/15 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/70 transition-all hover:border-ivory/30"
            >
              Call the Store
            </a>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
