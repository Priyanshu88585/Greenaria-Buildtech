import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export interface CreateUserInput {
  name?: string;
  email: string;
  password: string;
  role?: "ADMIN" | "USER";
}

/**
 * Create new user with hashed password
 */
export async function createUser(data: CreateUserInput) {
  if (!data.email || !data.password) {
    throw new Error("Email and password are required");
  }

  const existing = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existing) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role || "USER"
    }
  });
}

/**
 * Find user by email (used for login)
 */
export async function getUserByEmail(email: string) {
  if (!email) throw new Error("Email is required");

  return prisma.user.findUnique({
    where: { email }
  });
}

/**
 * Get user by id (used for dashboard auth)
 */
export async function getUserById(id: string) {
  if (!id) throw new Error("User id is required");

  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
}