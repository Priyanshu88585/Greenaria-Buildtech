import "../../../../styles/pages/blog.css"
import blogPosts from "../../../data/blog.json"

export default function BlogDetail({ params }) {

  const post = blogPosts.find(
    (item) => item.slug === params.slug
  )

  if (!post) {
    return <h2>Post not found</h2>
  }

  return (

    <div className="blog-detail-page">

      <section className="container">

        <h1>{post.title}</h1>

        <img src={post.image} alt={post.title} />

        <p>{post.content}</p>

      </section>

    </div>

  )

}