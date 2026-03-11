// src/app/dashboard/page.tsx

import Container from "@/components/layout/Container";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/auth";
import Link from "next/link";
import {
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default async function DashboardPage() {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/");
  }

  const [properties, leads, blogs] = await Promise.all([
    prisma.property.count(),
    prisma.lead.count(),
    prisma.blog.count(),
  ]);

  return (
    <Container className="py-16">
      {/* HEADER */}

      <div className="mb-10">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>

        <p className="text-gray-500 mt-2">
          Monitor your platform performance and activity
        </p>
      </div>

      {/* KPI GRID */}

      <div className="grid md:grid-cols-3 gap-6">
        {/* PROPERTIES */}

        <Link
          href="/dashboard/properties"
          className="bg-white border rounded-xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition"
        >
          <div>
            <p className="text-sm text-gray-500">Properties</p>

            <p className="text-3xl font-bold mt-1">{properties}</p>
          </div>

          <HomeIcon className="w-10 h-10 text-blue-500" />
        </Link>

        {/* LEADS */}

        <Link
          href="/dashboard/leads"
          className="bg-white border rounded-xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition"
        >
          <div>
            <p className="text-sm text-gray-500">Leads</p>

            <p className="text-3xl font-bold mt-1">{leads}</p>
          </div>

          <UsersIcon className="w-10 h-10 text-green-500" />
        </Link>

        {/* BLOGS */}

        <Link
          href="/dashboard/blogs"
          className="bg-white border rounded-xl shadow-sm p-6 flex items-center justify-between hover:shadow-md transition"
        >
          <div>
            <p className="text-sm text-gray-500">Blog Articles</p>

            <p className="text-3xl font-bold mt-1">{blogs}</p>
          </div>

          <DocumentTextIcon className="w-10 h-10 text-purple-500" />
        </Link>
      </div>

      {/* QUICK ACTIONS */}

      <div className="mt-12 bg-white border rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/dashboard/properties/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Property
          </Link>

          <Link
            href="/dashboard/blogs/new"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Create Blog
          </Link>
        </div>
      </div>
    </Container>
  );
}
