import projects from "../data/projects";
import "../styles/Projects.css";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}>



        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",              // 1 column
              sm: "repeat(2, 1fr)",   // 2 columns
              md: "repeat(3, 1fr)",   // 3 columns
            },
            gap: 3,
          }}
        >
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


              {/* buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mt: "auto",
                  pb: 2,
                }}
              >
                {project.link && project.link.length > 0 && (
                  <Button
                    component="a"
                    href={project.link[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                  >
                    View
                  </Button>
                )}

                <Button
                  component="a"
                  href={project.github[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                >
                  GitHub
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </section >
  );
}

export default Projects;