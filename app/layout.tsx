import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const apollo = localFont({
  src: [
    {
      path: "../public/fonts/apollo/APOLLO.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/apollo/APOLLOItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-apollo-local",
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
    <html lang="en" className={`${apollo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
