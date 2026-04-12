import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { getStorePhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our jewellery collection — gold, silver, diamond and bridal sets from Sharda Jewellers, Bemetara.",
};

export default async function GalleryPage() {
  const photos = await getStorePhotos(12);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Collection</h1>
        <p className="mt-2 text-slate-400">
          A glimpse of our jewellery — visit the store for the full experience
        </p>
        <p className="mt-1 text-sm italic text-gold/60">
          हमारे गहनों की एक झलक — पूरा कलेक्शन दुकान पर देखें
        </p>
      </div>

      <GalleryGrid photos={photos} />

      <div className="mt-12 text-center">
        <p className="text-slate-400">Want to see more designs?</p>
        <a
          href="https://wa.me/919425561850?text=I%20want%20to%20see%20more%20jewellery%20designs"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-500"
        >
          Request on WhatsApp
        </a>
      </div>
    </div>
  );
}
