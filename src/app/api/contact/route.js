import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    // TODO: Integrate email service (e.g., Nodemailer, SendGrid, Resend)
    console.log("New contact form submission:", { name, email, phone, message });

    return NextResponse.json({ success: true, message: "Message received! We will contact you soon." });
  } catch (err) {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
