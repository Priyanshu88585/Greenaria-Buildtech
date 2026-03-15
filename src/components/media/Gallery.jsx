export default function Gallery({ images }) {

  return (

    <div className="media-gallery">

      {images.map((img,index)=>(

        <div key={index} className="gallery-item">

          <img
            src={img}
            alt="Gallery Image"
          />

        </div>

      ))}

    </div>

  )

}