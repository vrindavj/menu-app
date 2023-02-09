import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { useUIContext } from "../../context/ui";

const AppbarMobileView = ({ matches }) => {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
     
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Menu></Menu>
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        FoodFactori
      </AppbarHeader>
      <IconButton  onClick={() => setShowSearchBox(true)}>
        <Search></Search>
      </IconButton>
    </AppbarContainer>
  );
};

export default AppbarMobileView;
