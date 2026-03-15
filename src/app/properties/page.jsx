import "@/styles/property/property-grid.css"
import properties from "../../data/properties.json"

export default function PropertiesPage() {

  return (

    <div className="properties-page">

      <section className="page-header">
        <div className="container">
          <h1>All Properties</h1>
          <p>
            Explore the best real estate properties across Noida,
            Greater Noida and Yamuna Expressway.
          </p>
        </div>
      </section>

      <section className="container property-grid">

        {properties.map((property) => (

          <div key={property.id} className="property-card">

            <img
              src={property.image}
              alt={property.title}
              className="property-image"
            />

            <div className="property-content">

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

        ))}

      </section>

    </div>

  )

}