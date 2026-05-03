import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Gold & Diamond Jewellers in Bemetara, Chhattisgarh | Sharda Jewellers Since 1971",
    template: "%s | Sharda Jewellers Bemetara",
  },
  description:
    "Trusted family jewellers in Bemetara since 1971: 22K & 24K gold, silver, diamond and bridal jewellery, BIS hallmarked, custom design and in-house manufacturing. Serving Chhattisgarh and nearby districts.",
  keywords: [
    "Sharda Jewellers",
    "Sharda Zaveri",
    "gold jewellers Bemetara",
    "best jewellers near Bemetara",
    "diamond jewellery Chhattisgarh",
    "bridal gold jewellery Bemetara",
    "Bemetara",
    "Chhattisgarh",
    "gold jewellery",
    "silver jewellery",
    "diamond jewellery",
    "bridal sets",
    "hallmark",
    "custom jewellery",
    "Indian jeweller",
    "शारदा ज्वैलर्स",
    "बेमेतरा",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sharda Jewellers — Gold & Diamond Jewellers in Bemetara Since 1971",
    description:
      "Family-run jewellers in Bemetara, Chhattisgarh: gold, silver, diamond and bridal collections, hallmark certified, custom orders and live rates.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sharda Jewellers",
    images: [
      {
        url: "/sharda-logo.png",
        alt: "Sharda Jewellers — gold and diamond jewellers in Bemetara, Chhattisgarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharda Jewellers — Bemetara, Chhattisgarh Since 1971",
    description:
      "Gold, silver & diamond jewellery with in-house manufacturing. Visit or WhatsApp for rates and custom design.",
    images: ["/sharda-logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      { url: "/sharda-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/sharda-logo.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
