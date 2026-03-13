// src/app/properties/page.tsx

import Container from "@/components/layout/Container";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyFilters from "@/components/filters/PropertyFilters";
// import { getAllProperties } from "@/services/property.service";
import { properties } from "@/mock/properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Properties | Greenaria Buildtech",
  description:
    "Explore residential, commercial and plot properties available for sale. Find the perfect investment with Greenaria Buildtech.",
};

export const revalidate = 1800;

export default async function PropertiesPage() {
const data = properties;
  return (
    <Container className="py-20">
      {/* PAGE HEADER */}

      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">All Properties</h1>

        <p className="text-gray-600 max-w-xl">
          Browse all available properties including residential, commercial
          spaces and investment plots.
        </p>
      </div>

      {/* FILTERS */}

      <div className="mb-12">
        <PropertyFilters />
      </div>

      {/* EMPTY STATE */}

      {properties.length === 0 && (
        <div className="text-gray-500">No properties found.</div>
      )}

      {/* PROPERTY GRID */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </Container>
  );
}
