import { NextRequest } from "next/server"
import { createLead, getLeads } from "@/services/lead.service"
import { successResponse, errorResponse } from "@/lib/api"

export async function GET() {
  try {
    const leads = await getLeads()

    return successResponse(leads)
  } catch {
    return errorResponse("Failed to fetch leads")
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const lead = await createLead(body)

    return successResponse(lead, "Lead submitted successfully")
  } catch {
    return errorResponse("Lead submission failed")
  }
}