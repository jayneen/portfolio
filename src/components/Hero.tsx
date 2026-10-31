import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Box
      sx={{
        padding: "2rem 0 1rem 0"
      }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Evgeniia "Jayne" Nemynova
      </Typography>

      <Typography variant="h5" component="p" color="text.secondary">
        Fullstack Software Developer
      </Typography>
    </Box>
  );
}

export default Hero;