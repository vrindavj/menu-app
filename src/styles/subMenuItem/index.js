import { styled, Typography, Box } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/waterfall";
import "@fontsource/water-brush";

// npm install polished to change the brightness of the colors used
export const ItemName = styled(Typography)(({ matches, theme }) => ({

}));

export const WrapperDiv = styled(Box)(({ matches, theme }) => ({

}));
export const DietDiv = styled(Typography)(() => ({
    color: Colors.dim_grey,
}));