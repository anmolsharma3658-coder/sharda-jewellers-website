import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: {
    default: "Sharda Jewellers — Since 1971 | Bemetara",
    template: "%s | Sharda Jewellers",
  },
  description:
    "Three generations of trust. Gold, Silver & Diamond jewellery with in-house manufacturing and full customization. Bemetara, Chhattisgarh.",
  keywords: [
    "Sharda Jewellers", "Bemetara", "Chhattisgarh", "gold jewellery",
    "silver jewellery", "diamond jewellery", "bridal sets", "hallmark",
    "custom jewellery", "Indian jeweller", "शारदा ज्वैलर्स", "बेमेतरा",
  ],
  openGraph: {
    title: "Sharda Jewellers — Since 1971",
    description: "Three generations of trust in gold, silver & diamond jewellery.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
