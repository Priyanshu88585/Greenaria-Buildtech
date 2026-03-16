"use client";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  if (!posts?.length) return <p className="text-center text-gray-500 py-20">No posts found.</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <motion.div key={post.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.1 }}>
          <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}
