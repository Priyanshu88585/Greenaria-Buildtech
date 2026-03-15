export default function Locations() {

  const cities = [
    "Noida",
    "Greater Noida",
    "Yamuna Expressway",
    "Gurugram",
    "Mumbai",
    "Lucknow",
    "Bangalore",
    "Dubai"
  ]

  return (

    <section className="locations-section">

      <div className="container">

        <h2>Serving Prime Locations</h2>

        <div className="locations-grid">

          {cities.map((city,index)=>(
            <a
              key={index}
              href={`/locations/${city.toLowerCase().replace(" ","-")}`}
              className="location-card"
            >
              {city}
            </a>
          ))}

        </div>

      </div>

    </section>

  )

}