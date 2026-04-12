"use client";

type Rates = {
  gold24kPerGram: number;
  gold22kPerGram: number;
  gold18kPerGram: number;
  gold24kPer10Gram: number;
  gold22kPer10Gram: number;
  gold18kPer10Gram: number;
  silverPerGram: number;
  silverPerKg: number;
  importDuty: number;
  gst: number;
  updatedAt: string;
} | null;

function fmt(n: number) {
  return n.toLocaleString("en-IN");
}

export default function RatesCard({ rates }: { rates: Rates }) {
  if (!rates) {
    return (
      <div className="border border-charcoal/10 bg-cream p-12 text-center">
        <p className="text-warm-gray">Rates currently unavailable.</p>
        <a href="tel:+919425561850" className="mt-2 inline-block text-sm text-gold hover:text-gold-dark">
          Call for today&apos;s rates
        </a>
      </div>
    );
  }

  const rows = [
    { label: "24K Gold", gram: rates.gold24kPerGram, ten: rates.gold24kPer10Gram },
    { label: "22K Gold", gram: rates.gold22kPerGram, ten: rates.gold22kPer10Gram },
    { label: "18K Gold", gram: rates.gold18kPerGram, ten: rates.gold18kPer10Gram },
  ];

  return (
    <div className="overflow-hidden border border-charcoal/10 bg-white">
      {/* Gold */}
      <div className="border-b border-charcoal/5 p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Gold</h3>
          <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent" />
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {rows.map((r) => (
            <div key={r.label} className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-warm-gray">
                {r.label}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-charcoal">
                &#x20B9;{fmt(r.gram)}
              </p>
              <p className="mt-1 text-xs text-warm-gray-light">per gram</p>
            </div>
          ))}
        </div>
      </div>

      {/* Silver */}
      <div className="p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-warm-gray-light/50 to-transparent" />
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-gray">Silver</h3>
          <div className="h-px flex-1 bg-gradient-to-l from-warm-gray-light/50 to-transparent" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-warm-gray">999 Fine Silver</p>
            <p className="mt-2 font-serif text-3xl font-bold text-charcoal">&#x20B9;{fmt(rates.silverPerGram)}</p>
            <p className="mt-1 text-xs text-warm-gray-light">per gram</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-warm-gray">999 Fine Silver</p>
            <p className="mt-2 font-serif text-3xl font-bold text-charcoal">&#x20B9;{fmt(rates.silverPerKg)}</p>
            <p className="mt-1 text-xs text-warm-gray-light">per kilogram</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-charcoal/5 bg-cream/50 px-8 py-4 text-center">
        <p className="text-[10px] text-warm-gray">
          Incl. Import Duty ({rates.importDuty}%) + GST ({rates.gst}%) &middot;
          Making charges extra &middot; Updated {rates.updatedAt}
        </p>
      </div>
    </div>
  );
}
