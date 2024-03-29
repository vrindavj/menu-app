import { createTheme } from "@mui/material";
import { lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
    primary: "#d32f12", //#ed482b', //"#D92102",
    secondary: "#ef5d43", //"#f7c0ad",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    bgLight: "#FEECE9", //'#FFD2CA',
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        white: {
            main: Colors.white
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: DrawerWidth,
                    background: Colors.primary,
                    color: Colors.white,
                    borderRadius: "0px 100px 0px 0px",
                    borderRight: `1px solid ${Colors.primary}`,
                },
            },
        },
        BannerBtn: {
            styleOverrides: {
                root: { color: Colors.white },
                primary: {
                    background: Colors.primary,
                    "&:hover": { background: Colors.secondary },
                },
                secondary: {
                    background: Colors.secondary,
                    "&:hover": { background: lighten(0.05, Colors.secondary) },
                },
            },
        },
    },
});

export default theme;