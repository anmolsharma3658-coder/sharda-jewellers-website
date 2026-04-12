import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/10 bg-navy-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-gold">Sharda Jewellers</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted family jeweller since 1971. Bemetara, Chhattisgarh.
              Specializing in gold, silver &amp; diamond jewellery with in-house
              manufacturing and full customization.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/rates" className="hover:text-gold transition">Live Rates</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-200">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="tel:+919425561850" className="hover:text-gold transition">
                  +91 94255 61850
                </a>
              </li>
              <li>
                <a href="tel:+917000344110" className="hover:text-gold transition">
                  +91 70003 44110
                </a>
              </li>
              <li>Bemetara, Chhattisgarh</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-200">Connect</h4>
            <a
              href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-500"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 0 0 .917.918l4.462-1.496A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.586l-.386-.238-2.65.888.889-2.648-.238-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700/50 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sharda Jewellers, Bemetara. All rights reserved.</p>
          <p className="mt-1">
            Gold &amp; silver rates powered by{" "}
            <a href="https://goldpricez.com" target="_blank" rel="noopener" className="text-gold/60 hover:text-gold">
              GoldPriceZ.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
