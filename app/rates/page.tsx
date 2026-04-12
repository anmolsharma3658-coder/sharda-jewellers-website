import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
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
      <div className="flex min-h-[60vh] items-center justify-center bg-ivory">
        <div className="px-6 text-center">
          <h1 className="font-serif text-3xl font-bold text-charcoal">Live Rates</h1>
          <p className="mt-4 text-warm-gray">Rates are currently unavailable. Please try again later.</p>
          <a
            href="tel:+919425561850"
            className="mt-6 inline-block bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
          >
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
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center bg-charcoal">
        <Image
          src="/images/gold-coins.png"
          alt="Gold coins"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              Updated Every 30 Minutes
            </p>
            <h1 className="mt-4 font-serif text-5xl font-bold text-ivory sm:text-6xl">
              Today&apos;s Rates
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mx-auto mt-6 max-w-md text-sm text-ivory/40">
              India retail prices &middot; Import Duty ({rates.importDuty}%) + GST ({rates.gst}%) included
              &middot; Last updated: {rates.updatedAt}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Gold Rates */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Precious Metal</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal sm:text-4xl">Gold Rates</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </AnimateIn>

          <div className="grid gap-6 sm:grid-cols-3">
            {goldRows.map((row, i) => (
              <AnimateIn key={row.purity} delay={i * 0.1}>
                <div className="border border-charcoal/10 bg-white p-8 text-center transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                    {row.badge}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-charcoal">{row.purity}</h3>
                  <div className="my-6">
                    <p className="font-serif text-4xl font-bold text-charcoal">
                      &#x20B9;{fmt(row.gram)}
                    </p>
                    <p className="mt-1 text-xs text-warm-gray-light">per gram</p>
                  </div>
                  <div className="border-t border-charcoal/5 pt-4">
                    <p className="text-lg font-semibold text-charcoal">&#x20B9;{fmt(row.ten)}</p>
                    <p className="text-xs text-warm-gray-light">per 10 grams</p>
                  </div>
                  <p className="mt-6 text-xs text-warm-gray">{row.use}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Rates */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-warm-gray">Fine Metal</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal sm:text-4xl">Silver Rates</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-warm-gray-light to-transparent" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-charcoal/10 bg-white p-8 text-center transition-all hover:border-gold/20">
                <span className="inline-block rounded-full bg-warm-gray/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-warm-gray">
                  999 Fine
                </span>
                <p className="mt-6 font-serif text-4xl font-bold text-charcoal">
                  &#x20B9;{fmt(rates.silverPerGram)}
                </p>
                <p className="mt-1 text-xs text-warm-gray-light">per gram</p>
              </div>
              <div className="border border-charcoal/10 bg-white p-8 text-center transition-all hover:border-gold/20">
                <span className="inline-block rounded-full bg-warm-gray/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-warm-gray">
                  999 Fine
                </span>
                <p className="mt-6 font-serif text-4xl font-bold text-charcoal">
                  &#x20B9;{fmt(rates.silverPerKg)}
                </p>
                <p className="mt-1 text-xs text-warm-gray-light">per kilogram</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Tax Info */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimateIn>
            <div className="border border-charcoal/10 bg-white">
              <div className="border-b border-charcoal/5 p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-charcoal">Price Composition</h3>
              </div>
              <div className="grid gap-px bg-charcoal/5 sm:grid-cols-3">
                <div className="bg-white p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">{rates.importDuty}%</p>
                  <p className="mt-2 text-sm font-medium text-charcoal">Import Duty</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">{rates.gst}%</p>
                  <p className="mt-2 text-sm font-medium text-charcoal">GST</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">Varies</p>
                  <p className="mt-2 text-sm font-medium text-charcoal">Making Charges</p>
                </div>
              </div>
              <div className="border-t border-charcoal/5 p-6 text-center">
                <p className="text-xs text-warm-gray">
                  Rates shown include international spot price + import duty + GST.
                  Making charges are additional and depend on design complexity. Visit the store for final pricing.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h2 className="font-serif text-3xl font-bold text-ivory">Want an Exact Quote?</h2>
            <p className="mt-4 text-ivory/50">
              Tell us the piece you&apos;re interested in and we&apos;ll give you the exact price.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919425561850?text=I%20want%20a%20price%20quote%20for%20jewellery"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
              >
                Get a Quote on WhatsApp
              </a>
              <a
                href="tel:+919425561850"
                className="border border-ivory/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all hover:border-ivory/40"
              >
                Call the Store
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
