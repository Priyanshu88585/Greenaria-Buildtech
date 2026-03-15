import properties from "../../data/properties.json"

export default function LatestProjects() {

  const latest = properties.slice(0,6)

  return (

    <section className="latest-projects">

      <div className="container">

        <h2>Latest Projects</h2>

        <div className="projects-grid">

          {latest.map((project) => (

            <div key={project.id} className="project-card">

              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>

              <p>{project.location}</p>

              <p className="price">
                {project.price}
              </p>

              <a href={`/properties/${project.id}`}>
                View Details
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}