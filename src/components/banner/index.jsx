import {  useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { BannerContainer,BannerButton, BannerContent, BannerDescription,BannerImage, BannerHeader } from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
           <BannerImage src="/images/banner/banner1.png" />
      <BannerContent>
        <BannerHeader>Its just not food, its an experience!!</BannerHeader>
        <BannerDescription variant='subtitle'>
        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>
      <BannerButton color="primary">View this week's menu</BannerButton>

      </BannerContent>


    </BannerContainer>
  );
};

export default Banner;
