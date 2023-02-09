import React from "react";
import { DietDiv, WrapperDiv } from "../../styles/subMenuItem";
import { Button, Tooltip,Typography } from "@mui/material";
import { ActionButton } from "../../styles/menuCarousel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const SubMenuItem = (props) => {
  console.log(props, "inside menuitem");
  const dietInfo = props.itemData.Diets.join();
  const longtext =
    "(G) Gluten-free,\n (L) Lactose-free,\n (VL) Low-lactose,\n (M) Dairy-free,\n (*) In accordance with Finnish nutritional recommendations, \n(Veg) Suitable for a vegan diet,\n (ILM) Climate-friendly,\n (VS) Contains fresh garlic,\n (A) Incl. Allergens";

  return (
    <WrapperDiv>
      <Typography>{props.itemData.Name}</Typography>
      <DietDiv>
        {dietInfo}
        <ActionButton>
          <Tooltip
            title={<div style={{ whiteSpace: "pre-line" }}>{longtext}</div>} >
            <InfoOutlinedIcon />
          </Tooltip>
        </ActionButton>
      </DietDiv>
    </WrapperDiv>
  );
};

export default SubMenuItem;
