import "../../../styles/pages/sell-property.css"

export default function SellPropertyPage() {

  return (
    <div className="sell-property-page">

      <section className="page-header">
        <div className="container">
          <h1>Sell Your Property</h1>
          <p>List your property with Greenaria Buildtech.</p>
        </div>
      </section>

      <section className="container">

        <form className="sell-property-form">

          <input type="text" placeholder="Owner Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="tel" placeholder="Phone Number" required />

          <input type="text" placeholder="Property Location" required />

          <textarea placeholder="Property Description"></textarea>

          <button type="submit">Submit Property</button>

        </form>

      </section>

    </div>
  )
}