"use client"

import Navbar from "./Navbar"

export default function Header() {

  return (

    <header className="site-header">

      <div className="top-header">

        <div className="container header-inner">

          <div className="logo">

            <a href="/">
              Greenaria <span>Buildtech</span>
            </a>

          </div>

          <div className="header-contact">

            <a href="tel:+918218035989">
              📞 +91 82180 35989
            </a>

          </div>

        </div>

      </div>

      <Navbar />

    </header>

  )

}