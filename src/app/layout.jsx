import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Best Real Estate Developer in Gurgaon | Greenaria BuildTech",
    template: "%s | Greenaria BuildTech",
  },
  description: "Greenaria BuildTech – Trusted real estate developer in Gurgaon, Delhi NCR & Dubai. Premium RERA-verified properties. 10+ years, 8000+ transactions.",
  keywords: ["real estate consultant gurgaon","property consultant gurgaon","greenaria buildtech","buy property gurgaon","luxury homes gurgaon"],
  openGraph: {
    title: "Greenaria BuildTech – Best Real Estate Developer in Gurgaon",
    description: "Premium RERA-verified properties in Gurgaon, Noida, Delhi & Dubai.",
    url: "https://greenariabuildtech.com",
    siteName: "Greenaria BuildTech",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e7d32",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
