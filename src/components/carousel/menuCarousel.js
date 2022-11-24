import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { menuData } from "../../MenuData";
import MenuCard from "../menucard";
import "./menuCarousal.css";
const MenuCarousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //calculating current day
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];
  console.log(currentDay);

  //extracting today's menu
  const todayMenu = menuData.LunchMenus.find(
    (item) => item.DayOfWeek === currentDay
  );
  console.log(todayMenu,'data available');

  return (
    <>
      <Slider {...settings}>
        {todayMenu.SetMenus.map((item,index) => (
            <MenuCard key={index} menu={item}></MenuCard>
        ))}
      </Slider>
    </>
  );
};

export default MenuCarousel;
