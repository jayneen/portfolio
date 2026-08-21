import projects from "../data/projects";
import "./Projects.css";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
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
            </CardContent>

            <Box sx={{ mt: "auto", p: 2 }}>
              <Button
                component="a"
                href={project.link[0]}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
              >
                View on GitHub
              </Button>
            </Box>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;