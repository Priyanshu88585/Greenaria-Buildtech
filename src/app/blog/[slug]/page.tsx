// src/app/blog/[slug]/page.tsx

import Container from "@/components/layout/Container";
import { getBlogBySlug } from "@/services/blog.service";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.content?.slice(0, 150),
    openGraph: {
      title: blog.title,
      description: blog.content?.slice(0, 150),
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <Container className="py-20 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {blog.title}
        </h1>

        <p className="text-gray-500 text-sm">
          Published on {new Date(blog.createdAt).toDateString()}
        </p>
      </header>

      <article
        className="
          prose
          prose-lg
          max-w-none
          prose-headings:font-semibold
          prose-a:text-blue-600
        "
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </Container>
  );
}
