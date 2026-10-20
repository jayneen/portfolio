import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Contacts() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        mb: 4,
      }}
    >
      <Link
        href="https://www.linkedin.com/in/evgeniia-nemynova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>

      <Link
        href="https://www.github.com/jayneen"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>

      <Link
        href="mailto:evgeniianemynova@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </Link>
    </Box>
  )
}

export default Contacts