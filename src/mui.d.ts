
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    section: string;
  }

  interface PaletteOptions {
    section?: string;
  }
}
