import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import GalleryGrid from "@/components/GalleryGrid";
import { getStorePhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse our curated collection of gold, silver, diamond and bridal jewellery from Sharda Jewellers.",
};

export default async function GalleryPage() {
  const photos = await getStorePhotos(12);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/jewelry-flatlay.png"
          alt="Jewellery collection"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
          <AnimateIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              Our Portfolio
            </p>
            <h1 className="mt-4 font-serif text-5xl font-bold text-ivory sm:text-6xl">
              Collections
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mx-auto mt-6 max-w-md text-base text-ivory/50">
              Each piece tells a story of heritage, craftsmanship, and timeless beauty
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GalleryGrid photos={photos} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/5 bg-cream py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              Looking for Something Special?
            </h2>
            <p className="mt-4 text-warm-gray">
              We create custom pieces tailored to your vision. Share your idea with us.
            </p>
            <a
              href="https://wa.me/919425561850?text=I%20have%20a%20custom%20jewellery%20design%20in%20mind"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-gold-light"
            >
              Discuss Your Design
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
