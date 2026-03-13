// src/components/home/HeroSection.tsx

"use client";

import { useFilterStore } from "@/store/filterStore";
import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import { LOCATIONS } from "@/constants/locations";

import Button from "../ui/button";
import Container from "../layout/Container";

export default function HeroSection() {
  const { location, type, setLocation, setType } = useFilterStore();

  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{
        backgroundImage: "url('/images/hero-property.jpg')",
      }}
    >
      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/50"></div>

      <Container>
        <div className="relative z-10 max-w-3xl text-white">
          {/* HEADLINE */}

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Find Your Perfect Property
          </h1>

          <p className="text-lg text-gray-200 mb-10">
            Discover premium residential and commercial properties with
            Greenaria Buildtech.
          </p>
        </div>

        {/* SEARCH PANEL */}

        <div className="relative z-10 mt-10 bg-white p-6 rounded-xl shadow-lg grid gap-4 md:grid-cols-4">
          {/* LOCATION */}

          <select
            value={location ?? ""}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Location</option>

            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* PROPERTY TYPE */}

          <select
            value={type ?? ""}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Property Type</option>

            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* BUDGET */}

          <input
            placeholder="Budget"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* SEARCH BUTTON */}

          <Button className="w-full">Search</Button>
        </div>
      </Container>
    </section>
  );
}
