import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    // TODO: Validate & save to database
    console.log("New property submission:", body);
    return NextResponse.json({ success: true, message: "Property added successfully (dev mode)." });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
