import "../../../../styles/property/property-details.css"
import properties from "../../../data/properties.json"

export default function PropertyDetail({ params }) {

  const property = properties.find(
    (item) => item.id === params.slug
  )

  if (!property) {
    return <h2>Property not found</h2>
  }

  return (

    <div className="property-detail-page">

      <section className="property-hero">

        <img
          src={property.image}
          alt={property.title}
          className="hero-image"
        />

      </section>

      <section className="container property-details">

        <h1>{property.title}</h1>

        <p className="location">
          {property.location}
        </p>

        <p className="price">
          {property.price}
        </p>

        <p className="description">
          {property.description}
        </p>

        <h3>Amenities</h3>

        <ul className="amenities">

          {property.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ul>

      </section>

    </div>

  )

}