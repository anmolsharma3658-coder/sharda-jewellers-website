import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sharda Jewellers — Since 1971 | Bemetara, Chhattisgarh",
    template: "%s | Sharda Jewellers",
  },
  description:
    "Sharda Jewellers, Bemetara — your trusted family jeweller since 1971. Gold, Silver & Diamond jewellery with in-house manufacturing, full customization, and BIS Hallmark certification.",
  keywords: [
    "Sharda Jewellers", "Bemetara", "Chhattisgarh", "gold jewellery",
    "silver jewellery", "diamond jewellery", "hallmark jewellery",
    "custom jewellery", "bridal sets", "शारदा ज्वेलर्स", "बेमेतरा",
  ],
  openGraph: {
    title: "Sharda Jewellers — Since 1971",
    description: "Your trusted family jeweller in Bemetara, Chhattisgarh. Gold, Silver & Diamond jewellery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
