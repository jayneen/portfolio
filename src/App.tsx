import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App