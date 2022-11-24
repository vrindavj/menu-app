import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { BannerContainer,BannerButton, BannerContent, BannerDescription, BannerTitle,BannerImage, BannerHeader } from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
           <BannerImage src="/images/banner/banner1.png" />
      <BannerContent>
        <BannerHeader>Its just not food, its an experience!!</BannerHeader>
        {/* <Typography variant="h6">Its just not food, its an experience !! </Typography> */}
        {/* <BannerTitle variant='h6'>
           Its just not food, its an experience !!
        </BannerTitle> */}
        <BannerDescription variant='subtitle'>
        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>
        <BannerButton color="secondary">View this week's menu</BannerButton>

      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
