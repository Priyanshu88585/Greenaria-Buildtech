export default function Footer() {

  return (

    <footer className="site-footer">

      <div className="container footer-grid">

        <div className="footer-about">

          <h3>Greenaria Buildtech</h3>

          <p>
            Trusted real estate consultant across Noida,
            Greater Noida and Yamuna Expressway.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <ul>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/projects">Projects</a>
            </li>

            <li>
              <a href="/properties">Properties</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>

          </ul>

        </div>

        <div className="footer-contact">

          <h4>Contact</h4>

          <p>Phone: +91 82180 35989</p>

          <p>Email: info@greenariabuildtech.com</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Greenaria Buildtech.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  )

}