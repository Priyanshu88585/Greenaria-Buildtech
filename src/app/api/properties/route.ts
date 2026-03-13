// // src/app/api/properties/route.ts

// import { NextRequest } from "next/server";
// import { getAllProperties, createProperty } from "@/services/property.service";
// import { successResponse, errorResponse } from "@/lib/api";
// import { getAuthUser } from "@/lib/auth";

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);

//     const page = Number(searchParams.get("page") || 1);
//     const limit = Number(searchParams.get("limit") || 12);

//     const properties = await getAllProperties({
//       page,
//       limit,
//     });

//     return successResponse(properties);
//   } catch (error) {
//     console.error("Property fetch error:", error);

//     return errorResponse("Failed to fetch properties", 500);
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const user = await getAuthUser();

//     if (!user || user.role !== "ADMIN") {
//       return errorResponse("Unauthorized", 401);
//     }

//     const body = await req.json();

//     // Basic validation

//     if (!body.title || !body.price || !body.location) {
//       return errorResponse("Missing required property fields", 400);
//     }

//     const property = await createProperty({
//       title: body.title,
//       slug: body.slug,
//       description: body.description,
//       location: body.location,
//       city: body.city,
//       state: body.state,
//       propertyType: body.propertyType,
//       propertyCategory: body.propertyCategory,
//       price: Number(body.price),
//       area: Number(body.area),
//       bedrooms: body.bedrooms,
//       bathrooms: body.bathrooms,
//       builderId: body.builderId,
//       images: body.images || [],
//       floorPlans: body.floorPlans || [],
//       latitude: body.latitude,
//       longitude: body.longitude,
//     });

//     return successResponse(property, "Property created successfully");
//   } catch (error) {
//     console.error("Property creation error:", error);

//     return errorResponse("Property creation failed", 500);
//   }
// }


export async function GET() {
  return Response.json({ message: "API disabled in demo mode" });
}