// src/services/property.service.ts

import prisma from "@/lib/prisma";

export interface CreatePropertyInput {
  title: string;
  slug: string;
  price: number;
  city?: string;
  description?: string;
  builderId?: string;
  images?: string[];
  latitude?: number;
  longitude?: number;
  category?: "RESIDENTIAL" | "COMMERCIAL" | "PLOT";
}

/**
 * Get all properties (used by properties page)
 */
export async function getAllProperties() {
  return prisma.property.findMany({
    include: {
      builder: true,
      amenities: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * Get single property by slug
 */
export async function getPropertyBySlug(slug: string) {
  if (!slug) throw new Error("Property slug is required");

  return prisma.property.findUnique({
    where: { slug },
    include: {
      builder: true,
      amenities: true,
    },
  });
}

/**
 * Homepage featured properties
 */
export async function getFeaturedProperties(limit: number = 6) {
  return prisma.property.findMany({
    take: limit,
    include: {
      builder: true,
      amenities: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * Create new property
 */
export async function createProperty(data: CreatePropertyInput) {
  if (!data.title || !data.slug || data.price === undefined) {
    throw new Error("Missing required property fields");
  }

  const existing = await prisma.property.findUnique({
    where: { slug: data.slug },
  });

  if (existing) {
    throw new Error("Property with this slug already exists");
  }

  return prisma.property.create({
    data,
  });
}

/**
 * Update property
 */
export async function updateProperty(
  id: string,
  data: Partial<CreatePropertyInput>,
) {
  if (!id) throw new Error("Property id is required");

  const existing = await prisma.property.findUnique({ where: { id } });

  if (!existing) {
    throw new Error("Property not found");
  }

  return prisma.property.update({
    where: { id },
    data,
  });
}

/**
 * Delete property
 */
export async function deleteProperty(id: string) {
  if (!id) throw new Error("Property id is required");

  const existing = await prisma.property.findUnique({ where: { id } });

  if (!existing) {
    throw new Error("Property not found");
  }

  await prisma.property.delete({
    where: { id },
  });

  return { success: true };
}
