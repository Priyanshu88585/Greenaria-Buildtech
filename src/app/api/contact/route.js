import { NextResponse } from "next/server"

export async function POST(request) {

  try {

    const body = await request.json()

    const { name, email, phone, message } = body

    if (!name || !email) {

      return NextResponse.json(
        {
          success: false,
          message: "Name and Email are required"
        },
        { status: 400 }
      )

    }

    console.log("New Contact Lead:", {
      name,
      email,
      phone,
      message
    })

    return NextResponse.json({
      success: true,
      message: "Message received successfully"
    })

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Server Error"
      },
      { status: 500 }
    )

  }

}