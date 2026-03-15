import "@/styles/blog/blog.css"
import blogPosts from "../../data/blog.json"

export default function BlogPage() {

  return (

    <div className="blog-page">

      <section className="page-header">
        <div className="container">
          <h1>Real Estate Blog</h1>
        </div>
      </section>

      <section className="container blog-grid">

        {blogPosts.map((post) => (

          <div key={post.slug} className="blog-card">

            <img src={post.image} alt={post.title} />

            <h3>{post.title}</h3>

            <p>{post.excerpt}</p>

            <a href={`/blog/${post.slug}`}>
              Read More
            </a>

          </div>

        ))}

      </section>

    </div>

  )

}