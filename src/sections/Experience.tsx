import experience from "../data/experience";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Experience() {
    return (
        <section>
            <h2>Experience</h2>

            <Box
                sx={{
                    textAlign: "left",
                }}
            >

                <div>
                    {experience.map((exp) => (
                        <div key={exp.id}>
                            <h3>{exp.title}</h3>
                            <Box
                                sx={{px: 4}}>
                                <p>
                                    <span className="meta-label">Company:</span>{" "}
                                    {exp.company}
                                </p>

                                <p>
                                    <span className="meta-label">Duration:</span>{" "}
                                    {exp.duration}
                                </p>

                                {exp.description.map((paragraph, index) => (
                                    <Typography
                                        key={index}
                                        variant="body1"
                                    >
                                        {paragraph}
                                    </Typography>
                                ))}
                            </Box>
                        </div>
                    ))}
                </div>
            </Box>

        </section>
    );
}

export default Experience;