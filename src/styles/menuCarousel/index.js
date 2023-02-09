import { styled } from "@mui/material";
import { Colors } from "../theme";
import { Box, IconButton } from "@mui/material";
import "@fontsource/waterfall";
import "@fontsource/water-brush";

// npm install polished to change the brightness of the colors used
export const ActionContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent: "center",
}));

export const ActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const CarouselContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
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

export const WrapperDiv = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.white,
}));

export const CardPanel = styled(Box)(({ matches, theme }) => ({
    minWidth: "340px",
    // margin: "0 auto",
    textAlign: "center",
    display: "flex",
    alignContent: "stretch"
        // [theme.breakpoints.down("sm")]: {
        //     flexDirection: "column",
        //     alignItems: "center",
        // },
}));