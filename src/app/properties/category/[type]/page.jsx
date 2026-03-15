import "../../../../../styles/property/property-grid.css"
import properties from "../../../../data/properties.json"

export default function PropertyCategoryPage({ params }) {

  const filtered = properties.filter(
    (item) => item.type === params.type
  )

  return (

    <div className="properties-page">

      <section className="page-header">

        <div className="container">

          <h1>{params.type} Properties</h1>

        </div>

      </section>

      <section className="container property-grid">

        {filtered.map((property) => (

          <div key={property.id} className="property-card">

            <img
              src={property.image}
              alt={property.title}
            />

            <div className="property-content">

              <h3>{property.title}</h3>

              <p>{property.location}</p>

              <p>{property.price}</p>

              <a href={`/properties/${property.id}`}>
                View Details
              </a>

            </div>

          </div>

        ))}

      </section>

    </div>

  )

}