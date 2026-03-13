// import { NextRequest } from "next/server"
// import { getBlogs, createBlog } from "@/services/blog.service"
// import { successResponse, errorResponse } from "@/lib/api"

// export async function GET() {
//   try {
//     const blogs = await getBlogs()

//     return successResponse(blogs)
//   } catch {
//     return errorResponse("Failed to fetch blogs")
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json()

//     const blog = await createBlog(body)

//     return successResponse(blog, "Blog created")
//   } catch {
//     return errorResponse("Blog creation failed")
//   }
// }
