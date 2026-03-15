import "../../../../styles/pages/location.css"
import properties from "../../../data/properties.json"

export default function LocationPage({ params }) {

  const city = params.city

  const filtered = properties.filter(
    (p) => p.location.toLowerCase().includes(city.toLowerCase())
  )

  return (
    <div className="location-page">

      <section className="page-header">
        <div className="container">
          <h1>Properties in {city}</h1>
          <p>Explore the best properties available in {city}.</p>
        </div>
      </section>

      <section className="container property-grid">

        {filtered.map((property) => (
          <div key={property.id} className="property-card">

            <img src={property.image} alt={property.title} />

            <div className="property-content">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{property.price}</p>

              <a href={`/properties/${property.id}`} className="view-btn">
                View Details
              </a>
            </div>

          </div>
        ))}

      </section>

    </div>
  )
}