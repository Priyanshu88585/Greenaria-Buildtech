// User type definitions

export type UserRole = "ADMIN" | "AGENT" | "USER"

export interface UserProfile {
  avatar?: string
  phone?: string
  bio?: string
}

export interface User {
  id: string

  name: string
  email: string

  role: UserRole

  profile?: UserProfile

  isActive?: boolean

  createdAt: string
  updatedAt?: string
}

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
}