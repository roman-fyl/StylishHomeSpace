import React, { FC } from "react";
import { Slider } from 'components/base';


import Slide1 from "assets/images/Slides/slide1.png";
import Slide2 from "assets/images/Slides/slide2.png";
import Slide3 from "assets/images/Slides/slide3.png";
import Slide4 from "assets/images/Slides/slide4.png";

const MainSlider:FC = () => {
  const images = [
    { src: Slide1, alt: "Slide 1", link: "search?groups=bestseller" },
    { src: Slide2, alt: "Slide 2", link: "item/X2dj9" },
    { src: Slide3, alt: "Slide 3", link: null },
    { src: Slide4, alt: "Slide 4", link: null },
  ];

  return <Slider images={images} autoSlideInterval={3000} />;
};

export default MainSlider;
