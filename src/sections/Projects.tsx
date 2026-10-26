
import projects from "../data/projects";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ProjectMeta({
  label,
  items,
}: {
  label: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <Typography component="p" variant="body1" sx={{ mt: 0.5, textAlign: "left" }}>
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
      <Typography variant="h4" component="h3" gutterBottom>
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
              <Typography variant="h6" component="h3" gutterBottom>
                {project.title}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "left" }}>
                {project.description}
              </Typography>

              <ProjectMeta label="Languages" items={project.languages} />
              <ProjectMeta label="Frameworks" items={project.frameworks} />
            </CardContent>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, p: 2, pt: 0 }}>
              {project.link?.[0] && (
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

              {project.github?.[0] && (
                <Button
                  component="a"
                  href={project.github[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                >
                  GitHub
                </Button>
              )}
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
