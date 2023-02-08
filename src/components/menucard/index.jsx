import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";

const MenuCard = (props) => {
  console.log(props, "Menucard");

  return (
    <Card
      style={{
        maxWidth: "345px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.menuData.name}
        </Typography>
        <Typography>{props.menuData.description}</Typography>
        <Typography variant="subtitle1">{props.menuData.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
