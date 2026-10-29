
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Contacts() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        pb: 3
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
        href="https://github.com/jayneen"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>

      <Link href="mailto:evgeniianemynova@gmail.com">
        Email
      </Link>
    </Box>
  );
}

export default Contacts;
