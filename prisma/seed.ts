// Prisma seed placeholder

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  const builder = await prisma.builder.create({
    data: {
      name: "Greenaria Developers",
      slug: "greenaria-developers",
      description: "Premium real estate developer specializing in luxury residential and commercial spaces."
    }
  })


  const amenities = await prisma.amenity.createMany({
    data: [
      { name: "Swimming Pool" },
      { name: "Gym" },
      { name: "Clubhouse" },
      { name: "Children Park" },
      { name: "24x7 Security" },
      { name: "Parking" }
    ]
  })


  const property = await prisma.property.create({
    data: {
      title: "Greenaria Luxury Residences",
      slug: "greenaria-luxury-residences",
      description: "Luxury residential apartments with world-class amenities.",
      location: "Sector 102",
      city: "Gurgaon",
      state: "Haryana",
      propertyType: "Apartment",
      category: "RESIDENTIAL",
      price: 15000000,
      area: 1800,
      bedrooms: 3,
      bathrooms: 3,
      images: [
        "/images/property1.jpg",
        "/images/property2.jpg"
      ],
      floorPlans: [
        "/images/floorplan1.jpg"
      ],
      builderId: builder.id
    }
  })


  await prisma.blog.create({
    data: {
      title: "Why Gurgaon is a Top Real Estate Investment Destination",
      slug: "gurgaon-real-estate-investment",
      content: "Gurgaon has emerged as one of India's most attractive property markets...",
      authorId: (await prisma.user.create({
        data: {
          name: "Admin",
          email: "admin@greenaria.com",
          password: "hashedpassword"
        }
      })).id,
      tags: ["real estate", "investment"]
    }
  })

  console.log("Seed data created")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })