import { colors, styled } from "@mui/material";
import { Colors, DrawerWidth } from "../theme";
import { Typography, Box, Button } from "@mui/material";
import "@fontsource/waterfall";
import "@fontsource/water-brush"
// npm install polished to change the brightness of the colors used
export const BannerContainer = styled(Box)(({ matches, theme }) => ({
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
    // backgroundImage: `url(/images/banner/banner.png)`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
}));


export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    // backgroundImage: `url(${src})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    width: "500px",
    [theme.breakpoints.down("md")]: {
        width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "320px",
        height: "300px",
    },
}));


export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
    color: Colors.black,
    // backgroundImage: `url(/images/banner/banner3blur.png)`,
    // backgroundSize:'cover',

}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "77px",
    marginBottom: "20px",
    fontWeight: 500,
    fontFamily: '"Waterfall", "cursive"',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }
}));

export const BannerButton = styled(Button, {
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

export const BannerHeader = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1,
    fontSize: "67px",
    marginBottom: "20px",
    fontWeight: 500,
    fontFamily: '"Water Brush", "cursive"',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }

}))


export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "2em",

    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "2em",
    },
}));