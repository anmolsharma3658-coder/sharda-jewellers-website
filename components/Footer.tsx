import Link from "next/link";

const LINKS = [
  { label: "Collections", href: "/gallery" },
  { label: "Live Rates", href: "/rates" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-charcoal text-ivory/70">
      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-xl font-bold tracking-wide text-ivory">
            SHARDA
            <span className="ml-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              Jewellers
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Three generations of trust in gold, silver &amp; diamond jewellery.
            Since 1971 — Bemetara, Chhattisgarh.
          </p>
          <p className="mt-3 text-xs italic text-ivory/40">
            पीढ़ियाँ बदलती हैं, हमारे मूल्य वही रहते हैं।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h4>
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-ivory"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+919425561850" className="transition-colors hover:text-ivory">
                +91 94255 61850
              </a>
            </li>
            <li>
              <a href="tel:+917000344110" className="transition-colors hover:text-ivory">
                +91 70003 44110
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919425561850"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ivory"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Visit Us
          </h4>
          <p className="text-sm leading-relaxed">
            Sharda Jewellers
            <br />
            Bemetara, Chhattisgarh
            <br />
            India
          </p>
          <a
            href="https://maps.google.com/?q=Sharda+Jewellers+Bemetara"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
          >
            Get Directions &rarr;
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-ivory/30">
            &copy; {new Date().getFullYear()} Sharda Jewellers. All rights reserved.
          </p>
          <p className="text-xs text-ivory/30">
            Est. 1971 &middot; BIS Hallmark Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
