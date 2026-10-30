import projects from "../data/projects";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { Link as RouterLink } from "react-router-dom";

function ProjectMeta({
  label,
  items,
}: {
  label: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <Typography
      component="p"
      variant="body1"
      sx={{ textAlign: "left" }}
    >
      <Box component="span" sx={{ fontWeight: "bold", mr: 1 }}>
        {label}:
      </Box>
      {items.join(", ")}
    </Typography>
  );
}

function Projects() {
  return (
    <Box component="section">
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }} gutterBottom>
                {project.title}
              </Typography>

              {project.image && (
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={`${project.title} preview`}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "center",
                    p: 1,
                    boxSizing: "border-box",
                  }}
                />
              )}

              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {project.description}
              </Typography>
            </CardContent>

            <Box sx={{ px: 2, pb: 2, mt: "auto" }}>
              <Box sx={{ mb: 2 }}>
                <ProjectMeta label="Languages" items={project.languages} />
                <ProjectMeta label="Frameworks" items={project.frameworks} />
              </Box>

              <Button
                component={RouterLink}
                to={`/projects/${project.slug}`}
                variant="outlined"
              >
                View Project
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;