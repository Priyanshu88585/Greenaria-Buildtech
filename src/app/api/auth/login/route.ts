import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/services/user.service";
import { verifyPassword, createAuthToken } from "@/lib/auth";
import { successResponse, errorResponse } from "@/lib/api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const email = body.email;
    const password = body.password;

    // Validate input

    if (!email || !password) {
      return errorResponse("Email and password are required", 400);
    }

    // Find user

    const user = await getUserByEmail(email);

    if (!user) {
      return errorResponse("Invalid credentials", 401);
    }

    // Verify password

    const validPassword = await verifyPassword(password, user.password);

    if (!validPassword) {
      return errorResponse("Invalid credentials", 401);
    }

    // Create JWT token

    const token = createAuthToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // Remove password before returning user

    const { password: _password, ...safeUser } = user;

    const response = successResponse({ user: safeUser }, "Login successful");

    // Set cookie

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);

    return errorResponse("Login failed", 500);
  }
}
