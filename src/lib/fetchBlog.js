import blogData from "@/data/blog.json";
export async function getAllPosts()          { return blogData; }
export async function getPostBySlug(slug)    { return blogData.find(p => p.slug === slug) || null; }
export async function getRecentPosts(n = 3)  { return blogData.slice(0, n); }
