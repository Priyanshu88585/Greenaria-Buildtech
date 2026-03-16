import { NextResponse } from "next/server";
import blogData from "@/data/blog.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug  = searchParams.get("slug");
  const limit = parseInt(searchParams.get("limit") || "0");

  if (slug) return NextResponse.json(blogData.find(p => p.slug === slug) || null);
  const posts = limit > 0 ? blogData.slice(0, limit) : blogData;
  return NextResponse.json({ posts, total: posts.length });
}
