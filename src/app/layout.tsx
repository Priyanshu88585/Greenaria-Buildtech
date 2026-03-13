// src/app/layout.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css"
import "./globals.css"
import "../styles/main.css"
import "../styles/elementor-layout.css"
import "../styles/property-widgets.css"
import "../styles/style.css"
import "../styles/animations.css"
import "../styles/responsive.css"

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Greenaria Buildtech",
    template: "%s | Greenaria Buildtech",
  },
  description:
    "Greenaria Buildtech is a premium real estate platform offering residential, commercial and plot investment opportunities.",
  keywords: [
    "real estate",
    "property listings",
    "buy property",
    "commercial property",
    "apartments for sale",
    "plots for sale",
  ],
  metadataBase: new URL("https://greenariabuildtech.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
