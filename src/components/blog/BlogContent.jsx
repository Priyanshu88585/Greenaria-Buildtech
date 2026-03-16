export default function BlogContent({ content }) {
  return (
    <article className="prose max-w-none" style={{ fontSize:15, lineHeight:1.8, color:"#2d2d2d" }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
