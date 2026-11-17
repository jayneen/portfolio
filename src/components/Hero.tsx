import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Box
      sx={{
        padding: "2rem 0 1rem 0",
        animation: "hero-enter 750ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
      }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          color: "primary.main",
          background: "linear-gradient(100deg, #8fe3d2 15%, #c8a7ff 50%, #8fe3d2 85%)",
          backgroundSize: "200% auto",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "accent-shift 8s ease-in-out infinite",
          fontSize: { xs: "2rem", sm: "2.5rem" },
        }}
      >
        Evgeniia "Jayne" Nemynova
      </Typography>

      <Typography variant="h5" component="p" color="text.secondary">
        Fullstack Software Developer
      </Typography>
    </Box>
  );
}

export default Hero;