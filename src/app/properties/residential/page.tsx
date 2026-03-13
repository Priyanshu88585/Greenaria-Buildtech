// src/app/properties/residential/page.tsx

import Container from "@/components/layout/Container";
import PropertyCard from "@/components/property/PropertyCard";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Properties | Greenaria Buildtech",
  description:
    "Browse apartments, villas and residential projects available for sale. Find your perfect home with Greenaria Buildtech.",
};

export const revalidate = 1800;

export default async function ResidentialProperties() {
  const properties = await prisma.property.findMany({
    where: {
      category: "RESIDENTIAL",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container className="py-20">
      {/* PAGE HEADER */}

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Residential Properties</h1>

        <p className="text-gray-600 max-w-xl">
          Explore modern apartments, villas and premium residential developments
          available for purchase.
        </p>
      </div>

      {/* EMPTY STATE */}

      {properties.length === 0 && (
        <div className="text-gray-500">
          No residential properties available right now.
        </div>
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
