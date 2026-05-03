import type { Metadata } from "next";
import { FullBleedImage, FadeInSection } from "@/components/ScrollReveal";
import AnimateIn from "@/components/AnimateIn";
import GalleryGrid from "@/components/GalleryGrid";
import { getStorePhotos } from "@/lib/photos";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gold & Diamond Jewellery Collections",
  description:
    "Browse gold, silver, diamond and bridal jewellery at Sharda Jewellers, Bemetara — in-house craftsmanship, hallmark pieces and custom orders for Chhattisgarh.",
  alternates: { canonical: new URL("/gallery", SITE_URL).toString() },
  openGraph: {
    title: "Jewellery Collections | Sharda Jewellers Bemetara",
    description:
      "Gold necklaces, bangles, bridal sets and diamond jewellery from family jewellers in Bemetara since 1971.",
    url: new URL("/gallery", SITE_URL).toString(),
  },
};

export default async function GalleryPage() {
  const photos = await getStorePhotos(12);

  return (
    <>
      <FullBleedImage
        src="/images/jewelry-flatlay.png"
        alt="Gold and diamond jewellery collection at Sharda Jewellers, Bemetara jewellers showroom"
        overlay="dark"
        priority
      >
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimateIn delay={0.3}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/60">
              Our Portfolio
            </p>
            <h1 className="mt-4 font-serif text-5xl font-bold text-ivory sm:text-7xl">
              Collections
            </h1>
            <div className="section-divider mt-6" />
            <p className="mx-auto mt-6 max-w-md text-ivory/40">
              Each piece is a conversation between tradition and artistry — crafted to be worn, cherished, and passed on.
            </p>
          </AnimateIn>
        </div>
      </FullBleedImage>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GalleryGrid photos={photos} />
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <FadeInSection className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-ivory sm:text-4xl">
            Your Design. Our Hands.
          </h2>
          <p className="mt-4 text-ivory/40">
            Don&apos;t see what you&apos;re looking for? We create custom pieces from your vision.
          </p>
          <a
            href="https://wa.me/919137761477?text=I%20have%20a%20custom%20jewellery%20design%20in%20mind"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-gold-light"
          >
            Discuss Your Design
          </a>
        </FadeInSection>
      </section>
    </>
  );
}
