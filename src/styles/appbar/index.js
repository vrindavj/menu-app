import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";

//container
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px",
}));


//header
export const AppbarHeader = styled(Typography)(({ matches, theme }) => ({
    padding: "4px",
    flexGrow: 1,
    fontFamily: '"Montez", "cursive"',
    color: Colors.primary,
    fontSize: '67px',
    [theme.breakpoints.down("md")]: {
        fontSize: "67px",

    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '42px'
    },
}));

// list
export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 15,
    justifyContent: "center",
    alignItems: "center",
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))