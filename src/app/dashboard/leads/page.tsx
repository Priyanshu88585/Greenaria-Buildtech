// src/app/dashboard/leads/page.tsx

import Container from "@/components/layout/Container";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardLeads() {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/");
  }

  const leads = await prisma.lead.findMany({
    include: {
      property: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container className="py-16">
      {/* HEADER */}

      <div className="mb-10">
        <h1 className="text-3xl font-bold">Lead Management</h1>

        <p className="text-gray-500 mt-2">
          Manage customer enquiries and property visit requests
        </p>
      </div>

      {/* EMPTY STATE */}

      {leads.length === 0 && (
        <div className="text-gray-500">No leads found.</div>
      )}

      {/* TABLE */}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Property</th>
              <th className="px-6 py-4">Lead Type</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                {/* NAME */}

                <td className="px-6 py-4 font-medium">{lead.name}</td>

                {/* PHONE */}

                <td className="px-6 py-4 text-gray-600">{lead.phone}</td>

                {/* PROPERTY */}

                <td className="px-6 py-4">
                  {lead.property ? (
                    <Link
                      href={`/properties/${lead.property.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {lead.property.title}
                    </Link>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>

                {/* LEAD TYPE */}

                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                    {lead.leadType || "Enquiry"}
                  </span>
                </td>

                {/* DATE */}

                <td className="px-6 py-4 text-gray-500 text-sm">
                  {new Date(lead.createdAt).toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
