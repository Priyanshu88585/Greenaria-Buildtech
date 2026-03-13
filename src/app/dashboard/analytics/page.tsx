import Container from "@/components/layout/Container";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/auth";
import { HomeIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default async function AnalyticsPage() {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/");
  }

  const [totalLeads, totalProperties, totalBlogs, totalBuilders] =
    await Promise.all([
      prisma.lead.count(),
      prisma.property.count(),
      prisma.blog.count(),
      prisma.builder.count(),
    ]);

  return (
    <Container className="py-16">
      {/* PAGE HEADER */}

      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>

        <p className="text-gray-500">
          Overview of platform performance and activity
        </p>
      </div>

      {/* KPI GRID */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* PROPERTIES */}

        <div className="bg-white shadow-sm border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Properties</p>

            <p className="text-3xl font-bold mt-1">{totalProperties}</p>
          </div>

          <HomeIcon className="w-10 h-10 text-blue-500" />
        </div>

        {/* LEADS */}

        <div className="bg-white shadow-sm border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Leads</p>

            <p className="text-3xl font-bold mt-1">{totalLeads}</p>
          </div>

          <UsersIcon className="w-10 h-10 text-green-500" />
        </div>

        {/* BLOG POSTS */}

        <div className="bg-white shadow-sm border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Blog Articles</p>

            <p className="text-3xl font-bold mt-1">{totalBlogs}</p>
          </div>

          <ChartBarIcon className="w-10 h-10 text-purple-500" />
        </div>

        {/* BUILDERS */}

        <div className="bg-white shadow-sm border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Builders</p>

            <p className="text-3xl font-bold mt-1">{totalBuilders}</p>
          </div>

          <ChartBarIcon className="w-10 h-10 text-orange-500" />
        </div>
      </div>

      {/* ANALYTICS PANEL */}

      <div className="mt-12 bg-white border rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Platform Activity</h2>

        <p className="text-gray-600">
          Track property listings, user leads, blog performance and builder
          engagement across the Greenaria Buildtech platform.
        </p>
      </div>
    </Container>
  );
}
