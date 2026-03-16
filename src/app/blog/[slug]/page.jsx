import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { getPostBySlug, getAllPosts, getRecentPosts } from "@/lib/fetchBlog";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Greenaria BuildTech`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const related = (await getRecentPosts(4)).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="section-pad" style={{ background: "#faf8f4" }}>
          <div className="max-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Left — Article */}
              <div className="lg:col-span-2">
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                  <a href="/" className="hover:text-[#2e7d32]">Home</a>
                  <span>/</span>
                  <a href="/blog" className="hover:text-[#2e7d32]">Blog</a>
                  <span>/</span>
                  <span className="text-navy font-medium truncate">{post.title}</span>
                </nav>

                <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,.07)" }}>
                  <div className="overflow-hidden" style={{ aspectRatio: "16/8", background: "#f0f0f0" }}>
                    {/* No onError — server component safe */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    {post.category && (
                      <span className="badge badge-green mb-3 inline-block">{post.category}</span>
                    )}
                    <h1
                      className="font-heading font-black text-navy mb-3"
                      style={{ fontSize: "clamp(1.5rem,3vw,2rem)", lineHeight: 1.3 }}
                    >
                      {post.title}
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                      {post.date} · By {post.author}
                    </p>
                    <p style={{ fontSize: 15, lineHeight: 1.85, color: "#374151" }}>
                      {post.excerpt}
                    </p>
                    <p className="mt-4" style={{ fontSize: 15, lineHeight: 1.85, color: "#374151" }}>
                      {post.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Sidebar */}
              <aside className="space-y-6">
                <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,0,.07)" }}>
                  <h3 className="font-heading font-bold text-navy mb-5" style={{ fontSize: 15 }}>
                    Related Posts
                  </h3>
                  <div className="space-y-4">
                    {related.map((p) => (
                      <a key={p.id} href={`/blog/${p.slug}`} className="flex gap-3 group">
                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-navy group-hover:text-[#2e7d32] transition-colors line-clamp-2">
                            {p.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{p.date}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "linear-gradient(135deg,#2e7d32,#4caf50)", boxShadow: "0 8px 28px rgba(46,125,50,.35)" }}
                >
                  <p className="font-heading font-bold text-white text-lg mb-2">Need Expert Advice?</p>
                  <p className="text-white/80 text-sm mb-4">Talk to our property consultants today.</p>
                  <a
                    href="/contact"
                    className="inline-block bg-white text-[#2e7d32] font-heading font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5"
                  >
                    Contact Us
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
