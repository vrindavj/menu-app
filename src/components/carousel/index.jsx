import React, { useState } from "react";
import { menuData } from "../../MenuData";
import { useMediaQuery,Tooltip} from "@mui/material";
import {
  CarouselContainer,
  CardPanel,
  ActionButton,
  ActionContainer,
} from "../../styles/menuCarousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuCard from "../menucard";



const menuItems = menuData.LunchMenus[0].SetMenus ;
// [
//   {
//     id: 1,
//     name: "Pizza Margherita",
//     description: "Tomato sauce, mozzarella, basil",
//     price: 12.99,
//   },
//   {
//     id: 2,
//     name: "Spaghetti Bolognese",
//     description: "Ground beef, tomato sauce, herbs",
//     price: 14.99,
//   },
//   {
//     id: 3,
//     name: "Lasagna",
//     description: " Layers of pasta, meat sauce, mozzarella Layers of pasta, meat sauce, mozzarella Layers of pasta, meat sauce, mozzarella Layers of pasta, meat sauce, mozzarella",
//     price: 16.99,
//   },
//   {
//     id: 4,
//     name: "4Spaghetti Bolognese",
//     description: "Ground beef, tomato sauce, herbs",
//     price: 14.99,
//   },
//   {
//     id: 5,
//     name: "5Lasagna",
//     description: "Layers of pasta, meat sauce, mozzarella",
//     price: 16.99,
//   },
// ];

function MenuCarousel() {
  const [index, setIndex] = useState(0);
  const matches = useMediaQuery("(min-width:1024px)");
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrevious, setDisablePrevious] = useState(true);

  window.addEventListener("resize", () => {
    // function body
    setIndex(0);
    setDisablePrevious(true);
    setDisableNext(false);
  });

  const handleNext = () => {
    console.log(index + (matches ? 3 : 1), "NEXT");
    if (matches) {
      console.log("3 check");
      setDisablePrevious(false);
      setDisableNext(index + (matches ? 3 : 1) >= 3 ? true : false);
    } else {
      console.log("5 check");
      setDisablePrevious(false);
      setDisableNext(index + (matches ? 3 : 1) >= 4 ? true : false);
    }
    setIndex(index + (matches ? 3 : 1));
  };

  const handlePrev = () => {
    console.log(index - (matches ? 3 : 1), "PRE");
    setDisablePrevious(index - (matches ? 3 : 1) <= 0 ? true : false);
    setDisableNext(false);
    setIndex(index - (matches ? 3 : 1));
  };

  const getVisibleItems = () => {
    return menuItems.slice(index, index + (matches ? 3 : 1));
  };

  return (
  <div style={{marginTop: "40px",}}>
      <CarouselContainer className="containerClass">
        {getVisibleItems().map((item,index) => (
          <CardPanel key={index}>
            <MenuCard menuData={item}></MenuCard>
          </CardPanel>
        ))}
      </CarouselContainer>
      <ActionContainer>
        <ActionButton disabled={disablePrevious} onClick={handlePrev}>
          <Tooltip placement="left" title="share this product">
            <ArrowBackIosIcon
              color={disablePrevious ? "disabled" : "primary"}
            />
          </Tooltip>
        </ActionButton>
        <ActionButton disabled={disableNext} onClick={handleNext}>
          <Tooltip placement="left" title="share this product">
            <ArrowForwardIosIcon color={disableNext ? "disabled" : "primary"} />
          </Tooltip>
        </ActionButton>
      </ActionContainer>
    </div>
  );
}
export default MenuCarousel;
