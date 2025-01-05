import { FC } from "react";
import { Slider } from "components/base";

import Slide1 from "assets/images/Slides/slide1.png";
import Slide2 from "assets/images/Slides/slide2.png";
import Slide3 from "assets/images/Slides/slide3.png";
import Slide4 from "assets/images/Slides/slide4.png";

const images = [
  { src: Slide1, alt: "Slide 1" },
  { src: Slide2, alt: "Slide 2" },
  { src: Slide3, alt: "Slide 3" },
  { src: Slide4, alt: "Slide 4" },
];

const CategorySlider: FC = () => (
  <Slider images={images} autoSlideInterval={5000} />
);

export default CategorySlider;
