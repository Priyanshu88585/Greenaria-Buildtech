// src/app/dashboard/properties/page.tsx

import Container from "@/components/layout/Container";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardProperties() {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/");
  }

  const properties = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container className="py-16">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold">Manage Properties</h1>

          <p className="text-gray-500 mt-2">
            View and manage all listed properties
          </p>
        </div>

        <Link
          href="/dashboard/properties/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Property
        </Link>
      </div>

      {/* EMPTY STATE */}

      {properties.length === 0 && (
        <div className="text-gray-500">No properties available.</div>
      )}

      {/* TABLE */}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">City</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {properties.map((property) => (
              <tr key={property.id} className="hover:bg-gray-50">
                {/* TITLE */}

                <td className="px-6 py-4 font-medium">{property.title}</td>

                {/* CITY */}

                <td className="px-6 py-4 text-gray-600">{property.city}</td>

                {/* PRICE */}

                <td className="px-6 py-4">
                  ₹{property.price?.toLocaleString()}
                </td>

                {/* CATEGORY */}

                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                    {property.propertyCategory}
                  </span>
                </td>

                {/* ACTIONS */}

                <td className="px-6 py-4 flex gap-3">
                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>

                  <Link
                    href={`/dashboard/properties/${property.id}`}
                    className="text-yellow-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
