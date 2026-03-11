import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { randomBytes } from "crypto";

const TOKEN_NAME = "auth_token";
const TOKEN_EXPIRY = 60 * 60 * 24 * 7; // 7 days

/**
 * Hash user password
 */
export async function hashPassword(password: string) {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

/**
 * Verify password against stored hash
 */
export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

/**
 * Generate secure session token
 */
export function generateAuthToken() {
  return randomBytes(32).toString("hex");
}

/**
 * Set auth cookie
 */
export function setAuthCookie(token: string) {
  cookies().set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: TOKEN_EXPIRY,
  });
}

/**
 * Remove auth cookie (logout)
 */
export function removeAuthCookie() {
  cookies().delete(TOKEN_NAME);
}

/**
 * Get current auth token
 */
export function getAuthToken() {
  return cookies().get(TOKEN_NAME)?.value;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated() {
  const token = getAuthToken();
  return Boolean(token);
}

/**
 * Get authenticated user id from token (placeholder for future session lookup)
 */
export function getAuthUserId() {
  const token = getAuthToken();

  if (!token) return null;

  // In production this should query a session table
  return token;
}
