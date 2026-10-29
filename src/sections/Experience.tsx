
import experience from "../data/experience";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Experience() {
    return (
        <Box component="section">
            <Typography variant="h4" component="h2" gutterBottom>
                Experience
            </Typography>

            <Box sx={{ textAlign: "left" }}>
                {experience.map((exp) => (
                    <Box key={exp.id}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {exp.title}
                        </Typography>

                        <Box sx={{ px: { xs: 1, sm: 4 } }}>
                            {exp.company && (
                                < Typography variant="body1" sx={{ mb: 0.5 }}>
                                    <Box component="span" sx={{ fontWeight: "bold", mr: 1 }}>
                                        Company:
                                    </Box>
                                    {exp.company}
                                </Typography>
                            )}

                            <Typography variant="body1" sx={{ mb: 1 }}>
                                <Box component="span" sx={{ fontWeight: "bold", mr: 1 }}>
                                    Duration:
                                </Box>
                                {exp.duration}
                            </Typography>

                            <List sx={{
                                listStyleType: "disc",
                                pl: 2,
                                py: 0
                            }}>
                                {exp.description.map((paragraph, index) => (
                                    <ListItem
                                        key={index}
                                        sx={{
                                            display: "list-item",
                                            py: 0.5,
                                            px: { xs: 1, sm: 2 }
                                        }}
                                    >
                                        <Typography variant="body1">
                                            {paragraph}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box >
    );
}

export default Experience;
