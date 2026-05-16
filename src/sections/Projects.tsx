import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
     <section className="section">
      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-content" key={project.id}>
            <h3>{project.title}</h3>
            
            <p>{project.description}</p>

            {project.languages && (
              <p className="project-meta">
                <span className="meta-label">Languages:</span>
                {project.languages.join(", ")}
              </p>
            )}

            {project.frameworks && (
              <p className="project-meta">
                <span className="meta-label">Frameworks:</span>
                {project.frameworks.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects