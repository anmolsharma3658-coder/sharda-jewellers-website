/** Canonical site URL and shared SEO constants (NAP, schema). */
export const SITE_URL = "https://www.shardazaveri.com";

/** Appended to image alt text for local relevance (avoid stuffing visible copy). */
export const IMAGE_ALT_SUFFIX = " — Sharda Jewellers, Bemetara";

export const BUSINESS = {
  name: "Sharda Jewellers",
  alternateNames: ["Sharda Zaveri Jewellers", "शारदा ज्वैलर्स"],
  locality: "Bemetara",
  region: "Chhattisgarh",
  country: "IN",
  phones: ["+919425561850", "+917000344110"],
  whatsappE164: "+919137761477",
  foundingYear: "1971",
  googleBusinessUrl:
    "https://business.google.com/n/5073554692225386022/searchprofile?hl=en",
} as const;

/** Bemetara approximate coordinates (maps pin area). */
const GEO = { latitude: 21.7134, longitude: 81.5349 };

export function localBusinessJsonLd() {
  const storeId = `${SITE_URL}/#jewelrystore`;
  const websiteId = `${SITE_URL}/#website`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["JewelryStore", "LocalBusiness"],
        "@id": storeId,
        name: BUSINESS.name,
        alternateName: [...BUSINESS.alternateNames],
        description:
          "Family-run gold, silver and diamond jewellers in Bemetara, Chhattisgarh since 1971. BIS hallmarked jewellery, bridal sets, custom design and in-house manufacturing.",
        url: SITE_URL,
        image: `${SITE_URL}/sharda-logo.png`,
        telephone: BUSINESS.phones,
        priceRange: "$$",
        foundingDate: BUSINESS.foundingYear,
        address: {
          "@type": "PostalAddress",
          addressLocality: BUSINESS.locality,
          addressRegion: BUSINESS.region,
          addressCountry: BUSINESS.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "20:00",
          },
        ],
        sameAs: [BUSINESS.googleBusinessUrl],
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Chhattisgarh",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: BUSINESS.name,
        inLanguage: ["en-IN", "hi-IN"],
        publisher: { "@id": storeId },
      },
    ],
  };
}
