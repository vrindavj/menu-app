import { colors, styled } from "@mui/material";
import { Colors, DrawerWidth } from "../theme";
import { Typography, Box, Button, TextField } from "@mui/material";
import "@fontsource/waterfall";
import "@fontsource/water-brush";
import "@fontsource/sorts-mill-goudy";
// npm install polished to change the brightness of the colors used
export const BookingContainer = styled(Box)(({ matches, theme }) => ({
    marginTop: "20px",
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.white,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
    },
}));


export const BookingImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "400px",
    marginRight: '20px',

    [theme.breakpoints.down("md")]: {
        width: "300px",
        marginRight: '0px'
    },
    [theme.breakpoints.down("sm")]: {
        width: "280px",
        height: "300px",
        marginRight: '0px'

    },
}));


export const BookingContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
    color: Colors.black,

}));

export const BookingFormButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'color',
    name: 'BannerBtn',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary
    ],
})(({ theme }) => ({
    padding: "10px 0px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
        fontSize: "14px",
    },
}));

export const BookingHeader = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "35px",
    marginBottom: "20px",
    fontWeight: 500,
    fontFamily: "Sorts Mill Goudy, serif",

    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }

}))


export const BookingForm = styled(Box)(({ comp, theme }) => ({
    component: comp,

}));


export const StyledTextField = styled(TextField)(({ comp, theme }) => ({
    width: '200px',
    marginBottom: '20px',
    marginRight: '6px',
    [theme.breakpoints.down("md")]: {
        width: '300px',

    },
    [theme.breakpoints.down("md")]: {
        width: '200px',

    },

}));

export const FormFieldGroup = styled(Box)(({ comp, theme }) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: 'center'
    },

}));