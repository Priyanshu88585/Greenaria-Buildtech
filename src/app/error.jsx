"use client"

export default function GlobalError({ error, reset }) {

  return (
    <div className="error-page">

      <div className="error-box">

        <h1>Something went wrong</h1>

        <p>
          Sorry, something unexpected happened while loading the page.
        </p>

        <button
          className="btn-primary"
          onClick={() => reset()}
        >
          Try Again
        </button>

      </div>

    </div>
  )
}