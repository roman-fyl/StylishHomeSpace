import React from "react";
import Banner from "./Banner";

import AddSlider_1 from "../../../assets/images/Slides/add-slider1.png";
import AddSlider_2 from "../../../assets/images/Slides/add-slider2.png";
import AddSlider_3 from "../../../assets/images/Slides/add-slider3.png";
import AddSlider_4 from "../../../assets/images/Slides/add-slider4.png";

const Banner_1 = () => {
  const images = [
    { src: AddSlider_1, alt: "AddSlider 1" },
    { src: AddSlider_2, alt: "AddSlider 2" },
    { src: AddSlider_3, alt: "AddSlider 3" },
    { src: AddSlider_4, alt: "AddSlider 4" },
  ];

  return <Banner images={images} autoSlideInterval={5000} />;
};

export default Banner_1;
