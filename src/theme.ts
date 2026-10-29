
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#a29faa",
        },

        secondary: {
            main: "#333333",
        },

        background: {
            default: "#191a20",
            paper: "#1f212b",
        },

        text: {
            primary: "#c2c8d3",
            secondary: "#c2c8d3",
        },

        divider: "#3b414d",

        // Custom section background color
        section: "#31313551",
    },


    typography: {
        fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
        fontSize: 17.6,

        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: "1.1rem",
            fontWeight: 600,
            lineHeight: 1.4,
        },

        body1: {
            fontSize: "1rem",
            lineHeight: 1.45,
            letterSpacing: "0.02rem",
        },

        button: {
            textTransform: "none",
        },
    },


    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                html: {
                    fontSize: "110%",
                    "@media (max-width: 1024px)": {
                        fontSize: "100%",
                    },
                },

                body: {
                    margin: 0,
                    minHeight: "100vh",
                },

                p: {
                    margin: 0,
                },

                "#root": {
                    width: "60rem",
                    maxWidth: "100%",
                    minHeight: "100vh",
                    margin: "0 auto",
                    textAlign: "center",
                    boxSizing: "border-box",
                    borderInline: `0.1rem solid ${theme.palette.divider}`,
                },

                section: {
                    margin: "2rem 2rem 0rem 2rem",
                    padding: "1rem 1rem",
                    backgroundColor: theme.palette.section,
                    "@media (max-width: 1024px)": {
                        margin: "1rem 1rem",
                    },
                },
            }),
        },
    },
});
