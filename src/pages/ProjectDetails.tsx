import { useParams, Link as RouterLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import projects from "../data/projects";

function ProjectDetails() {
    const { slug } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    // return to home page
    // restore scroll position if able
    const handleBack = () => {
        if (location.state?.from === "/") {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return (
            <Box component="section">
                <Typography variant="h4" component="h1" gutterBottom>
                    Project not found
                </Typography>

                <Button component={RouterLink} to="/">
                    Back to portfolio
                </Button>
            </Box>
        );
    }

    return (
        <Box>
            <Button onClick={handleBack}
                sx={{ display: "flex", justifyContent: "flex-start", py: 1 }}
            >
                ← Back to portfolio
            </Button>

            <Typography variant="h3" component="h1" gutterBottom>
                {project.title}
            </Typography>

            <Box component="section">
                {
                    project.image && (
                        <CardMedia
                            component="img"
                            image={"../../" + project.image}
                            alt={`${project.title} preview`}
                            sx={{
                                width: "100%",
                                maxHeight: 400,
                                objectFit: "contain",
                                mb: 3,
                            }}
                        />
                    )
                }

                <Box sx={{ px: {xs: 2, md: 5} }}>
                    <Box sx={{ textAlign: "left", py: 2 }}>
                        {project.details.map((paragraph, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{ pb: 1 }}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>

                    <Box>
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            <strong>Languages:</strong>{" "}
                            {project.languages?.join(", ") || "Not specified"}
                        </Typography>

                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            <strong>Frameworks:</strong>{" "}
                            {project.frameworks?.join(", ") || "Not specified"}
                        </Typography>

                    </Box>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, py: 4 }}>
                        {project.link?.[0] && (
                            <Button
                                component="a"
                                href={project.link[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                            >
                                View Live
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
                                GitHub Repository
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default ProjectDetails;