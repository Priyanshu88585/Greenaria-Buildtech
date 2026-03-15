import "../../../styles/pages/media.css"

export default function MediaPage() {

  return (
    <div className="media-page">

      <section className="page-header">
        <div className="container">
          <h1>Media Gallery</h1>
        </div>
      </section>

      <section className="container media-grid">

        <img src="/images/media/media1.jpg" />
        <img src="/images/media/media2.jpg" />
        <img src="/images/media/media3.jpg" />

      </section>

    </div>
  )
}