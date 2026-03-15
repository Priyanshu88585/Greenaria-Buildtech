import "@/styles/pages/services.css"
export default function ServicesPage() {

  return (
    <div className="services-page">

      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
        </div>
      </section>

      <section className="container services-grid">

        <div className="service-box">
          <h3>Property Buying</h3>
          <p>Find the best residential and commercial properties.</p>
        </div>

        <div className="service-box">
          <h3>Property Selling</h3>
          <p>Sell your property quickly with expert assistance.</p>
        </div>

        <div className="service-box">
          <h3>Investment Consulting</h3>
          <p>Guidance for real estate investments in NCR.</p>
        </div>

        <div className="service-box">
          <h3>Property Leasing</h3>
          <p>Commercial and office spaces available for lease.</p>
        </div>

      </section>

    </div>
  )
}