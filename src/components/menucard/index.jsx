import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,CardActions,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { CardWrapper,CardName,SubTitleText } from "../../styles/menuCard";
import SubMenuItem from "../subMenuItem";
import { Colors } from "../../styles/theme";


const MenuCard = (props) => {
  console.log(props, "Menucard");

  return (
    
    <CardWrapper className="wrapperCard">
   
      <CardContent style={{ marginBottom: "auto" }}>
        <CardName >
          {props.menuData.Name}
        </CardName>
        <Divider color={Colors.secondary} sx={{ marginTop:'5px',marginBottom:'10px' }}  />

        {props.menuData.Meals.map((item) => (
          <SubMenuItem key={item.RecipeId} itemData={item}></SubMenuItem>
        ))}
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent:'center'}}>
      <SubTitleText sx={{ marginTop:'15px'}}  variant="subtitle1">{props.menuData.Price}</SubTitleText>
      </CardActions>
      

    </CardWrapper>
  );
};

export default MenuCard;
