export default function BlogCard({ post }) {

  return (

    <div className="blog-card">

      <div className="blog-image">

        <img
          src={post.image}
          alt={post.title}
        />

      </div>

      <div className="blog-content">

        <h3>{post.title}</h3>

        <p className="blog-excerpt">
          {post.excerpt}
        </p>

        <a
          href={`/blog/${post.slug}`}
          className="read-more"
        >
          Read More
        </a>

      </div>

    </div>

  )

}