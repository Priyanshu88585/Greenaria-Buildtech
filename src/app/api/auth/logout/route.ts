import { NextResponse } from "next/server"
import { successResponse, errorResponse } from "@/lib/api"

export async function POST() {

  try {

    const response = successResponse({}, "Logged out successfully")

    // Remove auth cookie

    response.cookies.set({
      name: "auth_token",
      value: "",
      httpOnly: true,
      path: "/",
      expires: new Date(0)
    })

    return response

  } catch (error) {

    console.error("Logout error:", error)

    return errorResponse("Logout failed", 500)

  }

}