import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Links from './sections/Links'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Experience from './sections/Experience';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a29faa",
    },
    secondary: {
      main: "#333333",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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