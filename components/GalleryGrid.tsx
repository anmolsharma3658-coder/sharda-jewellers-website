"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Photo = { url: string; alt: string };

export default function GalleryGrid({ photos }: { photos: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  const allPhotos: Photo[] = [
    { url: "/images/hero-necklace.png", alt: "Gold Kundan Necklace" },
    { url: "/images/diamond-set.png", alt: "Diamond Necklace Set" },
    { url: "/images/bridal-set.png", alt: "Bridal Jewellery Collection" },
    { url: "/images/gold-bangles.png", alt: "Gold Meenakari Bangles" },
    { url: "/images/gold-jhumka.png", alt: "Gold Jhumka Earrings" },
    { url: "/images/gold-rings.png", alt: "Gold Rings Collection" },
    { url: "/images/gold-coins.png", alt: "24K Gold Coins" },
    { url: "/images/silver-items.png", alt: "Silver Puja Items" },
    { url: "/images/jewelry-flatlay.png", alt: "Gold Mangalsutra & Chains" },
    ...photos.map((url, i) => ({ url, alt: `Jewellery ${i + 1}` })),
  ];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {allPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="mb-4 break-inside-avoid"
          >
            <button
              onClick={() => setSelected(i)}
              className="image-shine group relative block w-full overflow-hidden bg-cream"
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                width={600}
                height={i % 3 === 0 ? 750 : i % 3 === 1 ? 600 : 500}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-ivory">{photo.alt}</p>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allPhotos[selected].url}
                alt={allPhotos[selected].alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto object-contain"
              />
              <p className="mt-3 text-center text-sm text-ivory/60">
                {allPhotos[selected].alt}
              </p>
            </motion.div>

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 text-ivory/60 transition-colors hover:text-ivory"
              aria-label="Close"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev / Next */}
            {selected > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-ivory/20 p-3 text-ivory/60 transition-all hover:border-ivory/40 hover:text-ivory"
                aria-label="Previous"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selected < allPhotos.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-ivory/20 p-3 text-ivory/60 transition-all hover:border-ivory/40 hover:text-ivory"
                aria-label="Next"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
