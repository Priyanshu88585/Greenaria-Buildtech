import "@/styles/pages/contact.css"

export default function ContactPage() {

  return (
    <div className="contact-page">

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="container contact-grid">

        <form className="contact-form">

          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="tel" placeholder="Phone Number" required />

          <textarea placeholder="Message"></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>
  )
}