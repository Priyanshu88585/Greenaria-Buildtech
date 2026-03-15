import BlogCard from "./BlogCard"

export default function BlogGrid({ posts }) {

  return (

    <div className="blog-grid">

      {posts.map((post)=>(
        <BlogCard
          key={post.slug}
          post={post}
        />
      ))}

    </div>

  )

}