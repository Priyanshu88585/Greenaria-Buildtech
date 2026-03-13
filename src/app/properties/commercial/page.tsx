// src/app/properties/commercial/page.tsx

import Container from "@/components/layout/Container";
import PropertyCard from "@/components/property/PropertyCard";
import prisma from "@/lib/prisma";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Properties | Greenaria Buildtech",
  description:
    "Explore commercial real estate opportunities including office spaces, retail shops and investment properties.",
};

export const revalidate = 1800;

export default async function CommercialProperties() {
  const properties = await prisma.property.findMany({
    where: {
      category: "COMMERCIAL",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container className="py-20">
      {/* PAGE HEADER */}

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Commercial Properties</h1>

        <p className="text-gray-600 max-w-xl">
          Discover premium commercial properties including offices, retail
          spaces and investment opportunities.
        </p>
      </div>

      {/* EMPTY STATE */}

      {properties.length === 0 && (
        <div className="text-gray-500">No commercial properties available.</div>
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
