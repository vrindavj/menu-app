import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/sorts-mill-goudy";


export const TextContainer = styled(Typography)(({ variant, matches, theme }) => ({
    padding: "4px",
    variant: variant,
    fontFamily: "Sorts Mill Goudy, serif",

    [theme.breakpoints.down("sm")]: {
        fontSize: '35px'
    },
}));