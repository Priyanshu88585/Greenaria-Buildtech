import "@/styles/pages/projects.css"

export default function ProjectsPage() {
  return (

    <div className="projects-page">

      <section className="page-header">
        <div className="container">
          <h1>All Projects</h1>
          <p>Explore the best real estate projects across Noida and Yamuna Expressway.</p>
        </div>
      </section>

      <section className="container projects-links">

        <a href="/projects/exclusive" className="project-link">
          Exclusive Projects
        </a>

        <a href="/projects/latest" className="project-link">
          Latest Projects
        </a>

        <a href="/projects/upcoming" className="project-link">
          Upcoming Projects
        </a>

      </section>

    </div>

  )
}