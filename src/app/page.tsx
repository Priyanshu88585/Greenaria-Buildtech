// src/app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ServicesSection from "@/components/home/ServicesSection";
import BuildersSection from "@/components/home/BuildersSection";
import Testimonials from "@/components/home/Testimonials";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenaria Buildtech | Real Estate Platform",
  description:
    "Explore premium residential, commercial and plot properties with Greenaria Buildtech. Discover investment opportunities and verified listings.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative">
        <HeroSection />
      </section>

      {/* FEATURED PROPERTIES */}

      <section className="section-padding bg-gray-50">
        <FeaturedProperties />
      </section>

      {/* SERVICES */}

      <section className="section-padding">
        <ServicesSection />
      </section>

      {/* TRUSTED BUILDERS */}

      <section className="section-padding bg-gray-50">
        <BuildersSection />
      </section>

      {/* TESTIMONIALS */}

      <section className="section-padding">
        <Testimonials />
      </section>
    </main>
  );
}
