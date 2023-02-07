import { colors, styled } from "@mui/material";
import { Colors, DrawerWidth } from "../theme";
import { Typography, Box, Button, IconButton } from "@mui/material";
import "@fontsource/waterfall";
import "@fontsource/water-brush"
// npm install polished to change the brightness of the colors used
export const ActionContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent: "center",
}));

export const ActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const CarousalContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    // overflow: "hidden",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.white,
    // [theme.breakpoints.down("sm")]: {
    //     flexDirection: "column",
    //     alignItems: "center",
    // },
}));