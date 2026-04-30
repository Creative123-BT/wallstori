import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Space_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Wall Stori Developers",
  description:
    "Wall Stori Developers – A thought-led pioneer and alternative challenger brand in the Real Estate Terrain of South India.",
  keywords: "Wall Stori, real estate, Chennai, South India, property developer, home buyers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
