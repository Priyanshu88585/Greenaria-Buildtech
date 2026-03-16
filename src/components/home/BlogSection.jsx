"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import blogData from "@/data/blog.json";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogSection() {
  const posts = blogData.slice(0, 3);
  return (
    <section className="section-pad" style={{ background:"#faf8f4" }}>
      <div className="max-content">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-[52px]">
          <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>From the Greenaria Desk</h2>
          <div className="gold-divider" />
          <p style={{ color:"#6b7280", fontSize:15 }}>Insights Market Trends &amp; Real Estate Stories</p>
        </motion.div>
        <BlogGrid posts={posts} />
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mt-12">
          <Link href="/blog" className="btn-primary inline-flex">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
