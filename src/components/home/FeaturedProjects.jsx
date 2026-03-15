import projects from "@/data/projects.json";

export default function FeaturedProjects() {
  if (!projects || projects.length === 0) {
    return (
      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <p>No projects available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="featured-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const image =
              project.image || "/images/projects/sample-project.jpg";

            return (
              <div className="project-card" key={`${project.id}-${index}`}>
                <div className="project-image">
                  <img src={image} alt={project.name} />
                </div>

                <div className="project-content">
                  <h3>{project.name}</h3>

                  <p className="location">{project.location}</p>

                  <p className="price">{project.price}</p>

                  <a href={`/properties/${project.id}`} className="view-btn">
                    View Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
