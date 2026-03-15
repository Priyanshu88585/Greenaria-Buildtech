import { NextResponse } from "next/server"
import properties from "../../../data/properties.json"

export async function GET() {

  try {

    return NextResponse.json({
      success: true,
      data: properties
    })

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch properties"
      },
      { status: 500 }
    )

  }

}