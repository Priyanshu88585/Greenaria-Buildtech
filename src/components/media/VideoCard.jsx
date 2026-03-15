export default function VideoCard({ video }) {

  return (

    <div className="video-card">

      <div className="video-frame">

        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allowFullScreen
        ></iframe>

      </div>

      <div className="video-info">

        <h3>{video.title}</h3>

        <p>{video.description}</p>

      </div>

    </div>

  )

}