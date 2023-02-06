import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";

const AppbarMobileView = ({ matches }) => {
  return (
    <AppbarContainer>
     
      <IconButton>
        <Menu></Menu>
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        FoodFactori
      </AppbarHeader>
      <IconButton>
        <Search></Search>
      </IconButton>
    </AppbarContainer>
  );
};

export default AppbarMobileView;
