
import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import "@fontsource/montez";


export const TextContainer = styled(Typography)(({variant,matches,theme}) => ({
    padding: "4px",
    variant:variant
    
  }));