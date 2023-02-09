import { styled } from "@mui/material";
import { Colors } from "../theme";
import { Card, Typography } from "@mui/material";
import "@fontsource/waterfall";
import "@fontsource/water-brush";

// npm install polished to change the brightness of the colors used
export const CardWrapper = styled(Card)(({ matches, theme }) => ({
    width: "320px",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
        width: "300px !important",
        // background: Colors.primary,
    },
}));

export const CardName = styled(Typography)(({ matches, theme }) => ({
    fontWeight: "600",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
    },
}));

export const SubTitleText = styled(Typography)(({ matches, theme }) => ({
    // position: 'relative',
    // bottom: '-25px'
    color: Colors.black,
    fontWeight: '550'
}));