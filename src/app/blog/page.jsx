import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGrid from "@/components/blog/BlogGrid";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { getAllPosts } from "@/lib/fetchBlog";

export const metadata = {
  title: "Real Estate Blog | Greenaria BuildTech",
  description: "Latest real estate insights, market trends, and investment guides from Greenaria BuildTech.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="relative flex items-center justify-center" style={{ minHeight:280, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>From the Greenaria Desk</h1>
            <p className="text-white/70">Insights Market Trends &amp; Real Estate Stories</p>
          </div>
        </section>
        <section className="section-pad" style={{ background:"#faf8f4" }}>
          <div className="max-content">
            <BlogGrid posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
