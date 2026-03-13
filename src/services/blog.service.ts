import prisma from "@/lib/prisma";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  coverImage?: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBlogInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  published?: boolean;
}

export interface PaginationResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export async function getBlogs(page: number = 1, limit: number = 10): Promise<PaginationResult<Blog>> {
  if (page < 1) page = 1;
  if (limit < 1) limit = 10;
  const skip = (page - 1) * limit;
  try {
    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.blog.count(),
    ]);
    return {
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Blog fetch error:", error);

    // Return safe empty result so the page does not crash
    return {
      data: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
    };
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!slug) throw new Error("Slug is required");
  try {
    const blog = await prisma.blog.findUnique({ where: { slug } });
    return blog;
  } catch (error) {
    console.error("Fetch blog by slug error:", error);
    return null;
  }
}

export async function createBlog(data: CreateBlogInput): Promise<Blog> {
  if (!data.title || !data.slug || !data.content) {
    throw new Error("Missing required blog fields");
  }
  try {
    const existing = await prisma.blog.findUnique({ where: { slug: data.slug } });
    if (existing) {
      throw new Error("Blog with this slug already exists");
    }
    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        published: data.published ?? true,
      },
    });
    return blog;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to create blog");
  }
}

export async function updateBlog(id: string, data: Partial<CreateBlogInput>): Promise<Blog> {
  if (!id) throw new Error("Blog id is required");
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data,
    });
    return blog;
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new Error("Blog not found");
    }
    throw new Error(error?.message || "Failed to update blog");
  }
}

export async function deleteBlog(id: string): Promise<{ success: boolean }> {
  if (!id) throw new Error("Blog id is required");
  try {
    await prisma.blog.delete({ where: { id } });
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new Error("Blog not found");
    }
    throw new Error(error?.message || "Failed to delete blog");
  }
}