export default function PropertyCard({ property }) {

  return (

    <div className="property-card">

      <div className="property-image">

        <img
          src={property.image}
          alt={property.title}
        />

      </div>

      <div className="property-info">

        <h3>{property.title}</h3>

        <p className="location">
          {property.location}
        </p>

        <p className="price">
          {property.price}
        </p>

        <a
          href={`/properties/${property.id}`}
          className="view-btn"
        >
          View Details
        </a>

      </div>

    </div>

  )

}