import { NextResponse } from "next/server"
import posts from "../../../data/blog.json"

export async function GET() {

  try {

    return NextResponse.json({
      success: true,
      data: posts
    })

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog posts"
      },
      { status: 500 }
    )

  }

}