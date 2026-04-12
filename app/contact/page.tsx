import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sharda Jewellers, Bemetara. Call, WhatsApp, or visit us in store.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h1>
        <p className="mt-2 text-slate-400">We&apos;d love to hear from you</p>
        <p className="mt-1 text-sm italic text-gold/60">हमसे संपर्क करें</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Cards */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="rounded-2xl border border-gold/10 bg-navy-light p-6">
            <h2 className="mb-4 text-lg font-bold text-gold">Call Us</h2>
            <div className="space-y-3">
              <a
                href="tel:+919425561850"
                className="flex items-center gap-3 rounded-xl bg-navy/50 p-4 transition hover:bg-navy"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-xl">
                  📞
                </span>
                <div>
                  <p className="font-semibold text-white">+91 94255 61850</p>
                  <p className="text-xs text-slate-400">Primary number</p>
                </div>
              </a>
              <a
                href="tel:+917000344110"
                className="flex items-center gap-3 rounded-xl bg-navy/50 p-4 transition hover:bg-navy"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-xl">
                  📞
                </span>
                <div>
                  <p className="font-semibold text-white">+91 70003 44110</p>
                  <p className="text-xs text-slate-400">Secondary number</p>
                </div>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-green-500/20 bg-navy-light p-6">
            <h2 className="mb-4 text-lg font-bold text-green-400">WhatsApp</h2>
            <p className="mb-4 text-sm text-slate-400">
              Chat with our AI-powered assistant for instant help with rates, collections,
              custom orders, and more. Available 24/7.
            </p>
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
              Start WhatsApp Chat
            </a>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-gold/10 bg-navy-light p-6">
            <h2 className="mb-4 text-lg font-bold text-gold">Visit Our Store</h2>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-2xl">📍</span>
              <div>
                <p className="font-semibold text-white">Sharda Jewellers</p>
                <p className="text-sm text-slate-400">
                  Bemetara, Chhattisgarh, India
                </p>
                <a
                  href="https://maps.google.com/?q=Sharda+Jewellers+Bemetara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-gold/80 transition hover:text-gold"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-gold/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.5349!3d21.7134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBemetara%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sharda Jewellers location"
          />
        </div>
      </div>
    </div>
  );
}
