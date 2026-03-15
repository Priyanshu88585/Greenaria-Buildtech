export default function PropertyGallery({ images }) {

  return (

    <div className="property-gallery">

      {images.map((img, index) => (

        <div key={index} className="gallery-item">

          <img src={img} alt="Property Image" />

        </div>

      ))}

    </div>

  )

}