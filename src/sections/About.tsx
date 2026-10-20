import Box from "@mui/material/Box";

function About() {
  return (
    <section>
      <h2>About</h2>

      <Box
        sx={{
          padding: 4,
          mx: "auto",
          maxWidth: "800px",
          backgroundColor: "#18181b",
          borderRadius: 2,
        }}
      >
        <p>
          I am a software developer focused on building full-stack applications and developer tools from zero to deployment. I enjoy engaging with the community, solving real problems in creative ways, and am always looking to acquire new skills.
        </p>
      </Box>
    </section>
  );
}

export default About;