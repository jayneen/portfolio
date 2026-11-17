
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#8fe3d2",
        },

        secondary: {
            main: "#c8a7ff",
        },

        background: {
            default: "#191a20",
            paper: "#1f212b",
        },

        text: {
            primary: "#c2c8d3",
            secondary: "#8d98ad",
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
                    backgroundImage:
                        "radial-gradient(ellipse at 12% 8%, rgba(143, 227, 210, 0.11), transparent 34%), radial-gradient(ellipse at 88% 18%, rgba(200, 167, 255, 0.1), transparent 32%)",
                    backgroundSize: "160% 160%",
                    backgroundPosition: "0% 50%",
                    backgroundAttachment: "fixed",
                    animation: "ambient-drift 24s ease-in-out infinite alternate",
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
                    "@media (prefers-reduced-motion: reduce)": {
                        "&, & *, & *::before, & *::after": {
                            animationDuration: "0.01ms !important",
                            animationIterationCount: "1 !important",
                            scrollBehavior: "auto !important",
                            transitionDuration: "0.01ms !important",
                        },
                    },
                },

                section: {
                    margin: "2rem 2rem 0rem 2rem",
                    padding: "1rem 1rem",
                    backgroundColor: theme.palette.section,
                    border: "1px solid rgba(143, 227, 210, 0.14)",
                    borderRadius: "1rem",
                    boxShadow: "0 0.5rem 2rem rgba(143, 227, 210, 0.035)",
                    "& > h2::after": {
                        content: '""',
                        display: "block",
                        width: "3rem",
                        height: "2px",
                        margin: "0.55rem auto 0",
                        borderRadius: "2px",
                        background:
                            "linear-gradient(90deg, #8fe3d2, #c8a7ff)",
                    },
                    "@media (max-width: 1024px)": {
                        margin: "1rem 1rem",
                    },
                },

                "@keyframes ambient-drift": {
                    from: { backgroundPosition: "0% 50%" },
                    to: { backgroundPosition: "100% 50%" },
                },

                "@keyframes accent-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },

                "@keyframes hero-enter": {
                    from: { opacity: 0, transform: "translateY(12px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
            }),
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    border: "1px solid rgba(143, 227, 210, 0.12)",
                    transition:
                        "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(143, 227, 210, 0.42)",
                        boxShadow: "0 0.75rem 2rem rgba(143, 227, 210, 0.09)",
                    },
                },
            },
        },

        MuiLink: {
            styleOverrides: {
                root: {
                    transition: "color 180ms ease",
                    "&:hover": {
                        color: "#c8a7ff",
                    },
                },
            },
        },
    },
});
