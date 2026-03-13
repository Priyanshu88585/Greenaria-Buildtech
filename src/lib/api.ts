// src/lib/api.ts

import { NextResponse } from "next/server";

interface ApiSuccess<T = unknown> {
  success: true;
  message: string;
  data: T;
}

interface ApiError {
  success: false;
  message: string;
}

/**
 * Standard success API response
 */
export function successResponse<T = unknown>(
  data: T,
  message = "Success",
  status = 200,
) {
  const response: ApiSuccess<T> = {
    success: true,
    message,
    data,
  };

  return NextResponse.json(response, { status });
}

/**
 * Standard error API response
 */
export function errorResponse(message = "Something went wrong", status = 500) {
  const response: ApiError = {
    success: false,
    message,
  };

  return NextResponse.json(response, { status });
}

/**
 * Wrap API handlers with automatic error handling
 */
export async function handleApiRequest(handler: () => Promise<any>) {
  try {
    const result = await handler();

    return successResponse(result);
  } catch (error: any) {
    console.error("API Error:", error);

    if (error?.status) {
      return errorResponse(error.message, error.status);
    }

    return errorResponse(error?.message || "Internal server error", 500);
  }
}

/**
 * Helper for parsing request body safely
 */
export async function parseBody<T>(req: Request): Promise<T> {
  try {
    return await req.json();
  } catch {
    throw new Error("Invalid JSON body");
  }
}

/**
 * Helper for missing resource responses
 */
export function notFoundResponse(message = "Resource not found") {
  return errorResponse(message, 404);
}
