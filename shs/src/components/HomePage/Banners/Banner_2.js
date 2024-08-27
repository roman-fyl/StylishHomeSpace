import React from "react";
import Banner from "./Banner";

import HotDeal_1 from "../../../assets/images/Slides/hotdeal1.png";
import HotDeal_2 from "../../../assets/images/Slides/hotdeal2.png";
import HotDeal_3 from "../../../assets/images/Slides/hotdeal3.png";
import HotDeal_4 from "../../../assets/images/Slides/hotdeal4.png";

const Banner_2 = () => {
  const images = [
    { src: HotDeal_1, alt: "HotDeal 1" },
    { src: HotDeal_2, alt: "HotDeal 2" },
    { src: HotDeal_3, alt: "HotDeal 3" },
    { src: HotDeal_4, alt: "HotDeal 4" },
  ];

  return <Banner images={images} autoSlideInterval={7000} />;
};

export default Banner_2;
