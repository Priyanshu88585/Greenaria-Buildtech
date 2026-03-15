"use client"

import { useState } from "react"

export default function SearchBar() {

  const [keyword, setKeyword] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    window.location.href = `/properties?search=${keyword}`
  }

  return (

    <section className="search-section">

      <div className="container">

        <form onSubmit={handleSearch} className="search-form">

          <input
            type="text"
            placeholder="Search by location or project"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <button type="submit">
            Search
          </button>

        </form>

      </div>

    </section>

  )

}