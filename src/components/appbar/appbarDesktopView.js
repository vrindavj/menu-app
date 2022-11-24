import { ListItemButton, ListItemIcon, ListItemText,Divider  } from "@mui/material";
import React from "react";
import {
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";

const AppbarDesktopView = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
      <AppbarContainer>
        <AppbarHeader>FoodFactori </AppbarHeader>
        <MyList type="row">
        <ListItemButton sx={{justifyContent:'flex-end'}}>
            <ListItemIcon sx={{justifyContent:'flex-end'}}>
              <SearchIcon></SearchIcon>
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemText sx={{flex:'0.3 1 auto'}} primary="Home"></ListItemText>
          <Divider orientation="vertical" flexItem />
          <ListItemText sx={{flex:'0.3 1 auto'}} primary="Blogs"></ListItemText>
          <Divider orientation="vertical" flexItem />
          <ListItemText sx={{flex:'0.3 1 auto'}} primary="About us"></ListItemText>

        </MyList>
      </AppbarContainer>
  );
};

export default AppbarDesktopView;
