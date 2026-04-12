import { Rates } from "@/lib/rates";

function fmt(n: number) {
  return n.toLocaleString("en-IN");
}

export default function RatesCard({ rates }: { rates: Rates | null }) {
  if (!rates) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-navy-light p-6 text-center">
        <p className="text-slate-400">Live rates are currently unavailable.</p>
        <p className="mt-1 text-sm text-slate-500">Please call the store for today&apos;s prices.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/20 bg-navy-light">
      <div className="border-b border-gold/10 bg-gold/5 px-6 py-4">
        <h3 className="text-lg font-bold text-gold">Today&apos;s Gold &amp; Silver Rates</h3>
        <p className="text-xs text-slate-400">
          Import Duty ({rates.importDuty}%) + GST ({rates.gst}%) included &middot; Updated {rates.updatedAt}
        </p>
      </div>

      <div className="divide-y divide-slate-700/50">
        <div className="px-6 py-4">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold/80">Gold</h4>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "24K (999)", gram: rates.gold24kPerGram, ten: rates.gold24kPer10Gram },
              { label: "22K (916)", gram: rates.gold22kPerGram, ten: rates.gold22kPer10Gram },
              { label: "18K (750)", gram: rates.gold18kPerGram, ten: rates.gold18kPer10Gram },
            ].map((row) => (
              <div key={row.label} className="rounded-xl bg-navy/50 p-3">
                <p className="text-xs text-slate-400">{row.label}</p>
                <p className="text-lg font-bold text-white">
                  &#x20B9;{fmt(row.gram)}<span className="text-xs font-normal text-slate-400">/g</span>
                </p>
                <p className="text-xs text-slate-500">&#x20B9;{fmt(row.ten)} / 10g</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Silver</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-navy/50 p-3">
              <p className="text-xs text-slate-400">999 Fine</p>
              <p className="text-lg font-bold text-white">
                &#x20B9;{fmt(rates.silverPerGram)}<span className="text-xs font-normal text-slate-400">/g</span>
              </p>
            </div>
            <div className="rounded-xl bg-navy/50 p-3">
              <p className="text-xs text-slate-400">Per Kg</p>
              <p className="text-lg font-bold text-white">&#x20B9;{fmt(rates.silverPerKg)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 py-3 text-center text-xs text-slate-500">
        Making charges extra &middot; Visit store for final price
      </div>
    </div>
  );
}
