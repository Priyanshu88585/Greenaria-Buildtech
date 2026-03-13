// src/app/services/page.tsx

import Container from "@/components/layout/Container";
import ServicesSection from "@/components/home/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services | Greenaria Buildtech",
  description:
    "Greenaria Buildtech offers expert real estate services including property consultation, investment advisory, project marketing and site visit assistance.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* PAGE HERO */}

      <section className="bg-gray-100 py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>

          <p className="text-gray-600 max-w-2xl">
            Greenaria Buildtech provides professional real estate services to
            help buyers, investors and developers find the best opportunities in
            the property market.
          </p>
        </Container>
      </section>

      {/* SERVICES SECTION */}

      <section className="py-20">
        <Container>
          <ServicesSection />
        </Container>
      </section>
    </div>
  );
}
