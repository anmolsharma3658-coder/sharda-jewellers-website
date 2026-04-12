"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryGrid({ photos }: { photos: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  if (!photos.length) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-slate-400">Photos coming soon.</p>
        <p className="mt-2 text-sm text-slate-500">
          Visit our store in Bemetara to see our collection.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((url, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-gold/10 bg-navy-light transition hover:border-gold/30"
          >
            <Image
              src={url}
              alt={`Sharda Jewellers collection ${i + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-h-[85vh] max-w-4xl">
            <Image
              src={photos[selected]}
              alt={`Sharda Jewellers collection ${selected + 1}`}
              width={800}
              height={800}
              className="max-h-[85vh] rounded-lg object-contain"
            />
          </div>

          {selected > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              aria-label="Previous"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selected < photos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              aria-label="Next"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
