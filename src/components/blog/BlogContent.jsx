export default function BlogContent({ post }) {

  return (

    <article className="blog-article">

      <div className="blog-header">

        <h1>{post.title}</h1>

        <img
          src={post.image}
          alt={post.title}
          className="blog-cover"
        />

      </div>

      <div className="blog-body">

        <p>
          {post.content}
        </p>

      </div>

    </article>

  )

}