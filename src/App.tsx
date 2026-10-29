import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

import { theme } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;