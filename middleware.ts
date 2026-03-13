// src/middleware.ts

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token = request.cookies.get("auth_token")?.value

  const protectedRoutes = [
    "/dashboard",
    "/dashboard/properties",
    "/dashboard/leads",
    "/dashboard/analytics",
  ]

  const adminRoutes = [
    "/dashboard/admin",
    "/dashboard/users",
  ]

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  const isAdminRoute = adminRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Redirect unauthenticated users
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Example: admin check (future ready)
  if (isAdminRoute) {
    const role = request.cookies.get("user_role")?.value

    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
}