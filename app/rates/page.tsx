import type { Metadata } from "next";
import { getRates } from "@/lib/rates";

export const metadata: Metadata = {
  title: "Live Gold & Silver Rates",
  description: "Today's live gold and silver rates in India with import duty and GST included. 24K, 22K, 18K gold and 999 silver prices.",
};

function fmt(n: number) {
  return n.toLocaleString("en-IN");
}

export default async function RatesPage() {
  const rates = await getRates();

  if (!rates) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-white">Live Rates</h1>
        <p className="mt-4 text-lg text-slate-400">
          Rates are currently unavailable. Please try again later or call the store.
        </p>
        <a
          href="tel:+919425561850"
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-medium text-navy transition hover:bg-gold-dark"
        >
          Call +91 94255 61850
        </a>
      </div>
    );
  }

  const goldRows = [
    { purity: "24K (999)", gram: rates.gold24kPerGram, ten: rates.gold24kPer10Gram, desc: "Pure gold — investment grade" },
    { purity: "22K (916)", gram: rates.gold22kPerGram, ten: rates.gold22kPer10Gram, desc: "Most popular for jewellery" },
    { purity: "18K (750)", gram: rates.gold18kPerGram, ten: rates.gold18kPer10Gram, desc: "Diamond settings & modern designs" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Today&apos;s Gold &amp; Silver Rates
        </h1>
        <p className="mt-2 text-slate-400">
          India retail prices with Import Duty ({rates.importDuty}%) + GST ({rates.gst}%) included
        </p>
        <p className="mt-1 text-sm italic text-gold/60">
          आज के सोने-चाँदी के भाव (भारत)
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Last updated: {rates.updatedAt} &middot; Auto-refreshes every 30 minutes
        </p>
      </div>

      {/* Gold Table */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-gold/20 bg-navy-light">
        <div className="border-b border-gold/10 bg-gold/5 px-6 py-4">
          <h2 className="text-xl font-bold text-gold">✨ Gold Rates</h2>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50 text-left text-sm text-slate-400">
                <th className="px-6 py-3 font-medium">Purity</th>
                <th className="px-6 py-3 font-medium">Per Gram</th>
                <th className="px-6 py-3 font-medium">Per 10 Grams</th>
                <th className="px-6 py-3 font-medium">Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/30">
              {goldRows.map((row) => (
                <tr key={row.purity} className="transition hover:bg-navy/30">
                  <td className="px-6 py-4 font-semibold text-white">{row.purity}</td>
                  <td className="px-6 py-4 text-lg font-bold text-gold">&#x20B9;{fmt(row.gram)}</td>
                  <td className="px-6 py-4 text-white">&#x20B9;{fmt(row.ten)}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="divide-y divide-slate-700/30 sm:hidden">
          {goldRows.map((row) => (
            <div key={row.purity} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">{row.purity}</span>
                <span className="text-lg font-bold text-gold">&#x20B9;{fmt(row.gram)}/g</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xs text-slate-500">{row.desc}</span>
                <span className="text-sm text-slate-400">&#x20B9;{fmt(row.ten)}/10g</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Silver Table */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-600/30 bg-navy-light">
        <div className="border-b border-slate-600/20 bg-slate-700/10 px-6 py-4">
          <h2 className="text-xl font-bold text-slate-200">🤍 Silver Rates</h2>
        </div>
        <div className="grid divide-y divide-slate-700/30 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-5">
            <p className="text-sm text-slate-400">999 Fine Silver — Per Gram</p>
            <p className="mt-1 text-2xl font-bold text-white">&#x20B9;{fmt(rates.silverPerGram)}</p>
          </div>
          <div className="px-6 py-5">
            <p className="text-sm text-slate-400">999 Fine Silver — Per Kilogram</p>
            <p className="mt-1 text-2xl font-bold text-white">&#x20B9;{fmt(rates.silverPerKg)}</p>
          </div>
        </div>
      </div>

      {/* Tax Breakdown */}
      <div className="rounded-2xl border border-gold/10 bg-navy-light p-6">
        <h3 className="mb-4 font-bold text-white">Tax Breakdown</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-navy/50 p-4 text-center">
            <p className="text-2xl font-bold text-gold">{rates.importDuty}%</p>
            <p className="text-sm text-slate-400">Import Duty</p>
            <p className="text-xs text-slate-500">Budget 2026</p>
          </div>
          <div className="rounded-xl bg-navy/50 p-4 text-center">
            <p className="text-2xl font-bold text-gold">{rates.gst}%</p>
            <p className="text-sm text-slate-400">GST</p>
            <p className="text-xs text-slate-500">On precious metals</p>
          </div>
          <div className="rounded-xl bg-navy/50 p-4 text-center">
            <p className="text-2xl font-bold text-gold">Extra</p>
            <p className="text-sm text-slate-400">Making Charges</p>
            <p className="text-xs text-slate-500">Varies by design</p>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Rates shown are India retail prices (international spot + import duty + GST).
          Making charges are additional and vary based on the design complexity.
          Visit the store for final pricing.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <p className="text-slate-400">Want to know the exact price for a piece?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919425561850?text=I%20want%20to%20know%20today's%20exact%20jewellery%20prices"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-500"
          >
            Ask on WhatsApp
          </a>
          <a
            href="tel:+919425561850"
            className="rounded-full border border-gold/30 px-6 py-3 font-medium text-gold transition hover:bg-gold/10"
          >
            Call the Store
          </a>
        </div>
      </div>
    </div>
  );
}
