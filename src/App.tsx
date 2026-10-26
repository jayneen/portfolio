import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Links from './sections/Links'
import { ThemeProvider, CssBaseline } from "@mui/material";
import Experience from './sections/Experience';
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Links />
      </main>
    </ThemeProvider>
  )
}

export default App