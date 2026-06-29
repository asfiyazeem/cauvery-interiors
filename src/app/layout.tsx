import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-luxury",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cauvery Interiors",
  description:
    "Cauvery Interior Studio designs luxury modular kitchens, wardrobes, TV units, office interiors, and custom woodwork across Bangalore.",
  keywords: [
    "interior design Bangalore",
    "modular kitchen",
    "custom woodworking",
    "CNC jaali",
    "premium interiors",
  ],
  alternates: {
    canonical: "https://cauveryinteriors.com",
  },
  openGraph: {
    title: "Cauvery Interiors",
    description: "Premium interiors and custom woodworking crafted in Bangalore.",
    type: "website",
    url: "https://cauveryinteriors.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-stone-100">{children}</body>
    </html>
  );
}
