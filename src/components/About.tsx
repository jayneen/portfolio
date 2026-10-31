
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Box component="section">
      <Typography variant="h4" component="h2" gutterBottom>
        About
      </Typography>

      <Typography variant="body1"
        sx={{
          maxWidth:"40rem",
          margin:"auto auto"
        }}>
        I am a software developer focused on building full-stack applications
        and developer tools from zero to deployment. I enjoy engaging with the
        community, solving real problems in creative ways, and am always
        looking to acquire new skills.
      </Typography>
    </Box>
  );
}

export default About;
