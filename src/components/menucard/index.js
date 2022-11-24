import React from 'react'
import { Card,CardMedia,CardActionArea,CardContent,Typography } from '@mui/material';
import Divider from '@mui/material/Divider';


const MenuCard = (props) => {
  console.log(props.menu.Name,'Menucard');


  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.menu.Name}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary">
        Please notice that ingredients we use in restaurant might change from what has been premeditated so diet markings and informative labels might differ from web sites and actual selection. We recommend people with allergy to check always the suitability of the food for own diet. Thank you for your understanding!
(G) Gluten free, (L) Lactose free, (VL) Low lactose, (M) Milk-free, (*) Comply with Finnish nutrition recommendations, (Veg) Suitable for vegans, (ILM) Climate-friendly, (VS) Contains fresh garlic, (A) Contains allergens
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default MenuCard