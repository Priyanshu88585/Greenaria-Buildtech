import "../../styles/pages/about.css"

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* Page Banner */}

      <section className="about-banner">
        <div className="container">
          <h1>About Greenaria Buildtech</h1>
          <p>
            Trusted Real Estate Consultant across Noida, Greater Noida and Yamuna Expressway.
          </p>
        </div>
      </section>


      {/* Company Introduction */}

      <section className="about-intro container">

        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Greenaria Buildtech Pvt Ltd is a trusted real estate consulting
            company specializing in residential, commercial and land investments
            across Noida, Greater Noida and Yamuna Expressway.
          </p>

          <p>
            Our team helps investors and homebuyers find the right property at
            the right location and right price with full transparency.
          </p>
        </div>

      </section>


      {/* Mission Vision */}

      <section className="mission-section">

        <div className="container mission-grid">

          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To provide transparent real estate consulting and help investors
              make confident property decisions.
            </p>
          </div>

          <div className="mission-box">
            <h3>Our Vision</h3>
            <p>
              To become the most trusted real estate consultant in NCR region.
            </p>
          </div>

        </div>

      </section>


      {/* Stats */}

      <section className="stats-section">

        <div className="container stats-grid">

          <div className="stat">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat">
            <h3>120+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>50+</h3>
            <p>Developers</p>
          </div>

          <div className="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

        </div>

      </section>

    </div>
  )
}