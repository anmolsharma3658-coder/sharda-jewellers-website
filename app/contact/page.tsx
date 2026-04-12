import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sharda Jewellers, Bemetara. Call, WhatsApp, or visit us in store.",
};

const CONTACT_CARDS = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Call Us",
    lines: [
      { label: "+91 94255 61850", href: "tel:+919425561850" },
      { label: "+91 70003 44110", href: "tel:+917000344110" },
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.496A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.586l-.386-.238-2.65.888.889-2.648-.238-.387A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    title: "WhatsApp",
    lines: [
      { label: "Chat with our AI assistant — 24/7", href: "https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!" },
    ],
    cta: true,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
      </svg>
    ),
    title: "Visit Us",
    lines: [
      { label: "Sharda Jewellers, Bemetara", href: "https://maps.google.com/?q=Sharda+Jewellers+Bemetara" },
      { label: "Chhattisgarh, India", href: "" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center bg-charcoal">
        <Image
          src="/images/gold-rings.png"
          alt="Contact Sharda Jewellers"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Get in Touch</p>
            <h1 className="mt-4 font-serif text-5xl font-bold text-ivory sm:text-6xl">Contact Us</h1>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </AnimateIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTACT_CARDS.map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.1}>
                <div className={`h-full border p-8 text-center transition-colors hover:border-gold/30 ${
                  card.cta
                    ? "border-gold/20 bg-cream"
                    : "border-charcoal/10 bg-white"
                }`}>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center text-gold">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal">
                    {card.title}
                  </h3>
                  <div className="mt-4 space-y-2">
                    {card.lines.map((line) =>
                      line.href ? (
                        <a
                          key={line.label}
                          href={line.href}
                          target={line.href.startsWith("http") ? "_blank" : undefined}
                          rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-sm text-warm-gray transition-colors hover:text-gold"
                        >
                          {line.label}
                        </a>
                      ) : (
                        <p key={line.label} className="text-sm text-warm-gray">{line.label}</p>
                      )
                    )}
                  </div>
                  {card.cta && (
                    <a
                      href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
                    >
                      Open Chat
                    </a>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours & Info */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateIn direction="left">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Information</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal">Store Details</h2>
                <div className="mt-8 space-y-6">
                  <div className="border-l-2 border-gold/30 pl-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Store Hours</h3>
                    <p className="mt-2 text-sm text-warm-gray">
                      Monday to Saturday: 10:00 AM – 8:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                  <div className="border-l-2 border-gold/30 pl-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Services</h3>
                    <p className="mt-2 text-sm text-warm-gray">
                      Gold, Silver &amp; Diamond Jewellery &middot; Custom Orders &middot;
                      Old Gold Exchange &middot; Repair &amp; Polish &middot; BIS Hallmark Certified
                    </p>
                  </div>
                  <div className="border-l-2 border-gold/30 pl-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal">WhatsApp Bot</h3>
                    <p className="mt-2 text-sm text-warm-gray">
                      Our AI-powered assistant is available 24/7 for instant help with rates,
                      collections, custom order inquiries, and more.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.2}>
              <div className="overflow-hidden border border-charcoal/10">
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
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
