// import { NextRequest } from "next/server";
// import { getBlogBySlug } from "@/services/blog.service";
// import { successResponse, errorResponse } from "@/lib/api";

// interface RouteParams {
//   params: {
//     slug: string;
//   };
// }

// export async function GET(req: NextRequest, { params }: RouteParams) {
//   try {
//     const slug = params?.slug;

//     // Validate slug

//     if (!slug || typeof slug !== "string") {
//       return errorResponse("Invalid blog slug", 400);
//     }

//     // Fetch blog

//     const blog = await getBlogBySlug(slug);

//     if (!blog) {
//       return errorResponse("Blog not found", 404);
//     }

//     return successResponse(blog);
//   } catch (error) {
//     console.error("Blog fetch error:", error);

//     return errorResponse("Failed to fetch blog", 500);
//   }
// }
