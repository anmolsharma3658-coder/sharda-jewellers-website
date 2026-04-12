import Link from "next/link";
import RatesCard from "@/components/RatesCard";
import { getRates } from "@/lib/rates";

const CATEGORIES = [
  { name: "Gold Jewellery", hindi: "सोने के गहने", icon: "✨", desc: "24K, 22K, 18K — Necklaces, Rings, Bangles & more" },
  { name: "Silver Jewellery", hindi: "चाँदी के गहने", icon: "🤍", desc: "999 Fine Silver — Utensils, Gifts & Jewellery" },
  { name: "Diamond Jewellery", hindi: "हीरे के गहने", icon: "💎", desc: "Certified diamonds in stunning designs" },
  { name: "Bridal Sets", hindi: "ब्राइडल सेट", icon: "👰", desc: "Complete wedding collections for your special day" },
  { name: "Custom Orders", hindi: "कस्टम ऑर्डर", icon: "🎨", desc: "Bring your design — we'll craft it for you" },
  { name: "Gold Coins", hindi: "सोने के सिक्के", icon: "🪙", desc: "BIS Hallmarked coins for gifting & investment" },
];

const TRUST_BADGES = [
  { icon: "🏛️", title: "Since 1971", desc: "50+ years of trust" },
  { icon: "✅", title: "BIS Hallmark", desc: "Certified purity" },
  { icon: "🏭", title: "In-House Manufacturing", desc: "Made right here" },
  { icon: "🎨", title: "Full Customization", desc: "Your design, our craft" },
];

export default async function Home() {
  const rates = await getRates();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold/80">
              Since 1971 &middot; Bemetara, Chhattisgarh
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Trusted{" "}
              <span className="text-gold">Family Jeweller</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Generations change, styles evolve — but our craftsmanship and values
              remain the same as they were on day one. Gold, Silver &amp; Diamond
              jewellery with in-house manufacturing and full customization.
            </p>
            <p className="mt-2 text-sm italic text-slate-400">
              &ldquo;पीढ़ियाँ बदलती हैं, डिज़ाइन बदलते हैं — लेकिन हमारी कारीगरी और हमारे मूल्य आज भी वही हैं।&rdquo;
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-500"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 0 0 .917.918l4.462-1.496A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.586l-.386-.238-2.65.888.889-2.648-.238-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="/rates"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-3 font-medium text-gold transition hover:bg-gold/10"
              >
                🪙 Today&apos;s Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Rates */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Live Gold &amp; Silver Rates
          </h2>
          <p className="mt-2 text-slate-400">Updated every 30 minutes with Indian taxes included</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <RatesCard rates={rates} />
        </div>
        <div className="mt-6 text-center">
          <Link href="/rates" className="text-sm text-gold/80 transition hover:text-gold">
            View full rate details &rarr;
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-gold/10 bg-navy-light/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Collections</h2>
            <p className="mt-2 text-slate-400">From everyday elegance to bridal grandeur</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="group rounded-xl border border-gold/10 bg-navy p-6 transition hover:border-gold/30 hover:bg-navy-light"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{cat.name}</h3>
                <p className="text-xs text-gold/60">{cat.hindi}</p>
                <p className="mt-2 text-sm text-slate-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.title} className="text-center">
                <span className="text-4xl">{badge.icon}</span>
                <h3 className="mt-2 font-bold text-white">{badge.title}</h3>
                <p className="text-sm text-slate-400">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy / Story */}
      <section className="border-t border-gold/10 bg-navy-light/30 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">Our Legacy</h2>
          <blockquote className="mt-6 text-lg leading-relaxed text-slate-300">
            &ldquo;In 1971, when there wasn&apos;t a single jewellery shop in this area — we were here.
            Your grandparents came to us, and today, so do you. That is our true identity.
            Generations change, trends evolve, designs transform — but our craftsmanship and
            our values remain the same as they were on the very first day.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm italic text-slate-400">
            सन् 1971 से, जब इस इलाके में गहनों की कोई दुकान तक नहीं थी — हम थे।
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm font-medium text-gold transition hover:text-gold-dark"
            >
              Read our full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl border border-gold/20 bg-gradient-to-r from-navy-light to-navy p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Visit Us Today
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-400">
              Come see our collection in person. Custom orders welcome — bring your design,
              we&apos;ll bring it to life.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-500"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919425561850"
                className="rounded-full border border-gold/30 px-6 py-3 font-medium text-gold transition hover:bg-gold/10"
              >
                Call +91 94255 61850
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
