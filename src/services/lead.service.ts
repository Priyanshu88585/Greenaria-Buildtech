import prisma from "@/lib/prisma";

export async function createLead(data: any) {
  return prisma.lead.create({
    data,
  });
}

export async function getLeads() {
  return prisma.lead.findMany({
    include: {
      property: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function updateLeadStatus(id: string, status: any) {
  return prisma.lead.update({
    where: { id },
    data: { status },
  });
}
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "VISIT_SCHEDULED"
  | "CLOSED"
  | "REJECTED";

export interface CreateLeadInput {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  propertyId?: string;
  type?: "CONTACT" | "ENQUIRY" | "VISIT";
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  status: LeadStatus;
  propertyId?: string | null;
  createdAt: Date;
}

const ALLOWED_STATUSES: LeadStatus[] = [
  "NEW",
  "CONTACTED",
  "VISIT_SCHEDULED",
  "CLOSED",
  "REJECTED",
];

const ALLOWED_TYPES = ["CONTACT", "ENQUIRY", "VISIT"];

function validateCreateLeadInput(data: CreateLeadInput) {
  if (
    !data.name ||
    typeof data.name !== "string" ||
    data.name.trim().length === 0
  ) {
    throw new Error("Name is required and must be a non-empty string");
  }
  if (
    !data.phone ||
    typeof data.phone !== "string" ||
    data.phone.trim().length === 0
  ) {
    throw new Error("Phone is required and must be a non-empty string");
  }
  if (data.email && typeof data.email !== "string") {
    throw new Error("Email must be a string");
  }
  if (data.type && !ALLOWED_TYPES.includes(data.type)) {
    throw new Error("Invalid lead type");
  }
}

/**
 * Create a new lead
 */
export async function createLead(data: CreateLeadInput): Promise<Lead> {
  validateCreateLeadInput(data);
  const lead = await prisma.lead.create({
    data: {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim(),
      message: data.message,
      propertyId: data.propertyId,
      type: data.type ?? "CONTACT",
      status: "NEW",
    },
  });
  return lead;
}

/**
 * Get leads with pagination
 */
export async function getLeads(
  page = 1,
  limit = 20,
): Promise<{
  leads: Lead[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}> {
  const safePage = Math.max(1, Number(page) || 1);
  const safeLimit = Math.max(1, Math.min(Number(limit) || 20, 100));
  const skip = (safePage - 1) * safeLimit;

  const [leads, total] = await Promise.all([
    prisma.lead.findMany({
      include: {
        property: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: safeLimit,
    }),
    prisma.lead.count(),
  ]);

  return {
    leads,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages: Math.ceil(total / safeLimit),
    },
  };
}

/**
 * Update lead status safely
 */
export async function updateLeadStatus(
  id: string,
  status: LeadStatus,
): Promise<Lead> {
  if (!id || typeof id !== "string") {
    throw new Error("Lead id is required");
  }
  if (!ALLOWED_STATUSES.includes(status)) {
    throw new Error("Invalid lead status");
  }
  // Optionally, ensure the lead exists before updating
  const existing = await prisma.lead.findUnique({ where: { id } });
  if (!existing) {
    throw new Error("Lead not found");
  }
  // Optionally, add business logic for allowed transitions
  const updated = await prisma.lead.update({
    where: { id },
    data: { status },
  });
  return updated;
}

/**
 * Delete lead (admin only)
 */
export async function deleteLead(id: string): Promise<{ success: boolean }> {
  if (!id || typeof id !== "string") {
    throw new Error("Lead id is required");
  }
  await prisma.lead.delete({
    where: { id },
  });
  return { success: true };
}
