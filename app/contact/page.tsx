import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import { FullBleedImage, FadeInSection } from "@/components/ScrollReveal";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Visit or WhatsApp Bemetara Jewellers",
  description:
    "Call or WhatsApp Sharda Jewellers in Bemetara, Chhattisgarh for gold rates, bridal jewellery and custom orders. Store hours, directions and AI assistant on WhatsApp.",
  alternates: { canonical: new URL("/contact", SITE_URL).toString() },
  openGraph: {
    title: "Contact Sharda Jewellers | Bemetara",
    url: new URL("/contact", SITE_URL).toString(),
  },
};

export default function ContactPage() {
  return (
    <>
      <FullBleedImage
        src="/images/gold-rings.png"
        alt="Contact Sharda Jewellers — gold jewellers in Bemetara, Chhattisgarh for calls and WhatsApp"
        overlay="dark"
        priority
      >
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimateIn delay={0.3}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">Get in Touch</p>
            <h1 className="mt-4 font-serif text-5xl font-bold text-ivory sm:text-7xl">Contact</h1>
            <div className="section-divider mt-6" />
          </AnimateIn>
        </div>
      </FullBleedImage>

      <section className="bg-ivory py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-px bg-charcoal/5 sm:grid-cols-3">
            <AnimateIn delay={0}>
              <div className="bg-ivory p-10 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">Call Us</p>
                <div className="mt-6 space-y-3">
                  <a href="tel:+919425561850" className="block font-serif text-xl font-semibold text-charcoal transition-colors hover:text-gold">
                    +91 94255 61850
                  </a>
                  <a href="tel:+917000344110" className="block font-serif text-xl font-semibold text-charcoal transition-colors hover:text-gold">
                    +91 70003 44110
                  </a>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="bg-cream p-10 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">WhatsApp</p>
                <p className="mt-6 text-sm text-warm-gray">
                  AI-powered assistant available 24/7
                </p>
                <a
                  href="https://wa.me/919137761477?text=Hello%20Sharda%20Jewellers!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-gold-light"
                >
                  Open Chat
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-ivory p-10 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">Visit</p>
                <div className="mt-6">
                  <p className="font-serif text-lg font-semibold text-charcoal">Sharda Jewellers</p>
                  <p className="mt-1 text-sm text-warm-gray">Bemetara, Chhattisgarh</p>
                  <a
                    href="https://maps.google.com/?q=Sharda+Jewellers+Bemetara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-dark"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-cream py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeInSection>
              <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">Details</p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-charcoal">Store Information</h2>
              <div className="mt-8 space-y-8">
                <div className="border-l border-gold/20 pl-6">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal">Hours</h3>
                  <p className="mt-2 text-sm text-warm-gray">Monday – Saturday: 10 AM – 8 PM</p>
                  <p className="text-sm text-warm-gray">Sunday: By Appointment</p>
                </div>
                <div className="border-l border-gold/20 pl-6">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal">Services</h3>
                  <p className="mt-2 text-sm text-warm-gray">
                    Gold, Silver &amp; Diamond &middot; Custom Orders &middot;
                    Old Gold Exchange &middot; Repair &amp; Polish &middot; BIS Hallmark
                  </p>
                </div>
                <div className="border-l border-gold/20 pl-6">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal">WhatsApp Bot</h3>
                  <p className="mt-2 text-sm text-warm-gray">
                    AI assistant for instant rates, collections, custom order inquiries — 24/7
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="h-full overflow-hidden border border-charcoal/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.5349!3d21.7134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBemetara%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sharda Jewellers location"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
