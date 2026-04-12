"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Photo = { url: string; alt: string };

const CURATED: Photo[] = [
  { url: "/images/hero-necklace.png", alt: "Gold Kundan Necklace" },
  { url: "/images/rani-haar.png", alt: "Rani Haar — Bridal Necklace" },
  { url: "/images/diamond-set.png", alt: "Diamond Necklace & Earrings" },
  { url: "/images/bridal-set.png", alt: "Complete Bridal Collection" },
  { url: "/images/gold-mohar.png", alt: "Gold Mohar Pendant" },
  { url: "/images/gold-bangles.png", alt: "Gold Meenakari Bangles" },
  { url: "/images/lakchha-beri.png", alt: "Lakchha Beri — Twisted Bangles" },
  { url: "/images/gold-jhumka.png", alt: "Gold Jhumka Earrings" },
  { url: "/images/maang-tikka.png", alt: "Kundan Maang Tikka" },
  { url: "/images/kamarband.png", alt: "Gold Kamarband — Waist Chain" },
  { url: "/images/marathi-mala.png", alt: "Marathi Mala — Silver Temple Necklace" },
  { url: "/images/gold-rings.png", alt: "Gold Rings Collection" },
  { url: "/images/gold-coins.png", alt: "24K Gold Lakshmi Coins" },
  { url: "/images/silver-payal.png", alt: "Silver Payal — Anklets" },
  { url: "/images/silver-bichhiya.png", alt: "Silver Bichhiya — Toe Rings" },
  { url: "/images/silver-items.png", alt: "Silver Puja Thali Set" },
  { url: "/images/jewelry-flatlay.png", alt: "Mangalsutra & Gold Chains" },
  { url: "/images/gold-macro.png", alt: "Gold Filigree Detail" },
];

export default function GalleryGrid({ photos }: { photos: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  const allPhotos: Photo[] = [
    ...CURATED,
    ...photos.map((url, i) => ({ url, alt: `Collection piece ${i + 1}` })),
  ];

  return (
    <>
      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {allPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-3 break-inside-avoid"
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
                className="w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-all duration-500 group-hover:bg-charcoal/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal/90 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{photo.alt}</p>
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/97 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allPhotos[selected].url}
                alt={allPhotos[selected].alt}
                width={1400}
                height={1050}
                className="max-h-[85vh] w-auto object-contain"
              />
              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.3em] text-ivory/40">
                {allPhotos[selected].alt}
              </p>
            </motion.div>

            <button
              onClick={() => setSelected(null)}
              className="absolute right-8 top-8 text-ivory/40 transition-colors hover:text-ivory"
              aria-label="Close"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selected > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-ivory/10 p-3 text-ivory/40 transition-all hover:border-ivory/30 hover:text-ivory"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selected < allPhotos.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-ivory/10 p-3 text-ivory/40 transition-all hover:border-ivory/30 hover:text-ivory"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
