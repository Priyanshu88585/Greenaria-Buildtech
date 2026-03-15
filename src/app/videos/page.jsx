import "../../../styles/pages/videos.css"

export default function VideosPage() {

  return (
    <div className="videos-page">

      <section className="page-header">
        <div className="container">
          <h1>Property Videos</h1>
        </div>
      </section>

      <section className="container video-grid">

        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Property Video"
          allowFullScreen
        ></iframe>

      </section>

    </div>
  )
}