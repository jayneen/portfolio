import { useParams } from "react-router-dom";
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

    const project = projects.find((project) => project.slug === slug);

    // returns to home page
    // restore scroll position if able
    const returnButton = () => {
        return (
            <Button onClick={() => {
                if (location.state?.from === "/") {
                    navigate(-1);
                } else {
                    navigate("/");
                }
            }}
                sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}
            >
                ← Back to portfolio
            </Button>)
    }

    if (!project) {
        return (
            <Box>
                {returnButton()}
                <Box component="section">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Project not found
                    </Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Box>
            {returnButton()}

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

                <Box sx={{ px: { xs: 2, md: 5 } }}>
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