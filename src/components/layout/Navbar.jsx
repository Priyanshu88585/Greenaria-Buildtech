"use client"

import MobileMenu from "./MobileMenu"

export default function Navbar() {

  return (

    <nav className="main-navbar">

      <div className="container nav-inner">

        <ul className="nav-links">

          <li>
            <a href="/">Home</a>
          </li>

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
            <a href="/services">Services</a>
          </li>

          <li>
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>

        </ul>

        <MobileMenu />

      </div>

    </nav>

  )

}