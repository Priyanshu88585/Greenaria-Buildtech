// src/app/properties/[slug]/page.tsx

import Container from "@/components/layout/Container";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyLocation from "@/components/property/PropertyLocation";
import PropertyFloorPlan from "@/components/property/PropertyFloorPlan";
import PropertyEnquiryForm from "@/components/forms/PropertyEnquiryForm";

import { getPropertyBySlug } from "@/services/property.service";

import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} | Greenaria Buildtech`,
    description: property.description?.slice(0, 160),
    openGraph: {
      title: property.title,
      description: property.description?.slice(0, 160),
      images: property.images?.[0] ? [property.images[0]] : [],
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  return (
    <Container className="py-16">
      {/* GALLERY */}

      <PropertyGallery images={property.images} />

      {/* PROPERTY HEADER */}

      <div className="mt-10 mb-8">
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>

        <p className="text-gray-500">{property.city}</p>
      </div>

      {/* MAIN GRID */}

      <div className="grid lg:grid-cols-[1fr_380px] gap-10">
        {/* LEFT CONTENT */}

        <div className="space-y-12">
          <PropertyDetails property={property} />

          <PropertyAmenities amenities={property.amenities} />

          <PropertyFloorPlan floorPlans={property.floorPlans} />

          {property.latitude && property.longitude && (
            <PropertyLocation
              latitude={property.latitude}
              longitude={property.longitude}
            />
          )}
        </div>

        {/* RIGHT SIDEBAR */}

        <div className="lg:sticky lg:top-24 h-fit">
          <div className="border rounded-xl p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4">
              Enquire About Property
            </h2>

            <PropertyEnquiryForm propertyId={property.id} />
          </div>
        </div>
      </div>
    </Container>
  );
}
