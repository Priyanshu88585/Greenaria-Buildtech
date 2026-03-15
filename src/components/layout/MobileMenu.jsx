"use client"

import { useState } from "react"

export default function MobileMenu() {

  const [open, setOpen] = useState(false)

  return (

    <div className="mobile-menu">

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (

        <div className="mobile-nav">

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/properties">Properties</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>

        </div>

      )}

    </div>

  )

}