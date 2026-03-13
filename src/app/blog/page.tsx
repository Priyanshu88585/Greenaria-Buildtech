// src/app/blog/page.tsx

import Container from "@/components/layout/Container";
// import { getBlogs } from "@/services/blog.service";
import { blogs } from "@/mock/blogs";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Greenaria Buildtech",
  description:
    "Latest real estate insights, property investment tips and market updates from Greenaria Buildtech.",
};

export const revalidate = 3600;

export default async function BlogPage() {

  // ✅ FIXED
  const blogList = blogs;

  return (
    <Container className="py-20">
      <header className="mb-14">
        <h1 className="text-4xl font-bold mb-3">Blog & Insights</h1>

        <p className="text-gray-600">
          Real estate news, investment strategies and property guides.
        </p>
      </header>

      {blogList.length === 0 && (
        <div className="text-gray-500">No blog posts available.</div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogList.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {blog.featuredImage && (
              <div className="relative h-52 w-full">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {new Date(blog.createdAt).toDateString()}
              </p>

              <p className="text-gray-600 text-sm line-clamp-3">
                {blog.content?.replace(/<[^>]*>?/gm, "").slice(0, 120)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
