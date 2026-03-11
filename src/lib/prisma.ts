// src/lib/prisma.ts

// import { PrismaClient } from "@prisma/client"

// /**
//  * Prevent multiple Prisma instances in development (Next.js hot reload issue)
//  */
// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined
// }

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
//   })

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma
// }

// export default prisma

// Temporary prisma bypass so app runs without database
const prisma = {
  property: {
    findMany: async () => []
  }
};

export default prisma;