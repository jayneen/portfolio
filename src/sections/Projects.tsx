import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
     <section className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            // href={project.link}
            className="project-card"
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects