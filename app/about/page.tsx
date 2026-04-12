import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Sharda Jewellers — your trusted family jeweller since 1971 in Bemetara, Chhattisgarh. Learn about our history, services and craftsmanship.",
};

const SERVICES = [
  {
    icon: "✨",
    title: "Gold, Silver & Diamond Jewellery",
    hindi: "सोने, चाँदी और हीरे के गहने",
    desc: "24K, 22K, 18K gold — BIS Hallmarked. Necklaces, rings, bangles, earrings, mangalsutra, bridal sets and more.",
  },
  {
    icon: "🎨",
    title: "Custom Orders",
    hindi: "कस्टम ऑर्डर",
    desc: "Bring your own design or describe your vision. Our in-house craftsmen will bring it to life exactly as you imagined.",
  },
  {
    icon: "🔄",
    title: "Old Gold Exchange",
    hindi: "पुराने गहनों की बदलाई",
    desc: "Exchange your old jewellery for new designs at the best rates. Fair valuation guaranteed.",
  },
  {
    icon: "🔧",
    title: "Repair & Polish",
    hindi: "मरम्मत और पॉलिश",
    desc: "Restore your precious jewellery to its original shine. Expert repair services for all types of jewellery.",
  },
  {
    icon: "👰",
    title: "Bridal Collections",
    hindi: "ब्राइडल कलेक्शन",
    desc: "Complete wedding jewellery sets. Special bridal packages with personalized consultation.",
  },
  {
    icon: "🎁",
    title: "Silver Gifts & Utensils",
    hindi: "चाँदी के गिफ्ट आइटम",
    desc: "Silver utensils, coins, and gift items perfect for festivals, weddings, and special occasions.",
  },
];

const MILESTONES = [
  { year: "1971", text: "Sharda Jewellers was established in Bemetara when there wasn't a single jewellery shop in the area." },
  { year: "1980s", text: "Became the most trusted name for wedding jewellery in the region." },
  { year: "1990s", text: "Expanded into diamond jewellery and modern designs." },
  { year: "2000s", text: "Adopted in-house manufacturing for complete quality control." },
  { year: "2020s", text: "BIS Hallmark certification. Full customization services. WhatsApp-powered customer service." },
  { year: "Today", text: "Three generations later, still your family jeweller. Same values, modern designs." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-gold/10 bg-navy-light/30 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-gold/80">About Us</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Three Generations of Trust
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Since 1971, when there wasn&apos;t a single jewellery shop in this area — we were here.
            Your grandparents came to us, and today, so do you.
          </p>
          <p className="mt-3 text-sm italic text-gold/60">
            सन् 1971 से, जब इस इलाके में गहनों की कोई दुकान तक नहीं थी — हम थे।
            आपके दादाजी भी यहीं आया करते थे, और आज आप भी यहाँ हैं। यही हमारी असली पहचान है।
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Our Journey</h2>
          <div className="space-y-6">
            {MILESTONES.map((m) => (
              <div key={m.year} className="flex gap-4">
                <div className="flex w-20 shrink-0 items-start justify-end">
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-bold text-gold">
                    {m.year}
                  </span>
                </div>
                <div className="border-l-2 border-gold/20 pl-4 pb-2">
                  <p className="text-slate-300">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-gold/10 bg-navy-light/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Services</h2>
            <p className="mt-2 text-slate-400">Everything you need, under one roof</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="rounded-xl border border-gold/10 bg-navy p-6 transition hover:border-gold/30"
              >
                <span className="text-3xl">{svc.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{svc.title}</h3>
                <p className="text-xs text-gold/60">{svc.hindi}</p>
                <p className="mt-2 text-sm text-slate-400">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">Find Us</h2>
            <p className="mt-2 text-slate-400">Sharda Jewellers, Bemetara, Chhattisgarh</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gold/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.5349!3d21.7134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBemetara%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharda Jewellers location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
