export default function PropertyTypes() {

  const types = [
    "Apartment",
    "Builder Floor",
    "Office",
    "Retail Shops",
    "Residential Plots",
    "Industrial Plots",
    "Agriculture Land",
    "Villas"
  ]

  return (

    <section className="property-types">

      <div className="container">

        <h2>What Are You Looking For?</h2>

        <div className="types-grid">

          {types.map((type,index)=>(
            <a
              key={index}
              href={`/properties/category/${type.toLowerCase()}`}
              className="type-card"
            >
              {type}
            </a>
          ))}

        </div>

      </div>

    </section>

  )

}