// import { NextRequest } from "next/server"
// import { getPropertyBySlug } from "@/services/property.service"
// import { successResponse, errorResponse } from "@/lib/api"

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     const property = await getPropertyBySlug(params.slug)

//     if (!property) {
//       return errorResponse("Property not found", 404)
//     }

//     return successResponse(property)
//   } catch (error) {
//     return errorResponse("Error fetching property")
//   }
// }
