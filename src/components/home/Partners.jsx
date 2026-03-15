export default function Partners() {

  const partners = [
    "DLF",
    "Godrej",
    "Emaar",
    "Gaurs",
    "Oasis",
    "AIPL"
  ]

  return (

    <section className="partners-section">

      <div className="container">

        <h2>Our Developer Partners</h2>

        <div className="partners-grid">

          {partners.map((partner,index)=>(
            <div key={index} className="partner-card">
              {partner}
            </div>
          ))}

        </div>

      </div>

    </section>

  )

}