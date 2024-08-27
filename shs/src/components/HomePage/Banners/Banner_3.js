import React from "react";
import Banner from "./Banner";

import Rebates_1 from "../../../assets/images/Slides/rebates1.png";
import Rebates_2 from "../../../assets/images/Slides/rebates2.png";
import Rebates_3 from "../../../assets/images/Slides/rebates3.png";
import Rebates_4 from "../../../assets/images/Slides/rebates4.png";

const Banner_3 = () => {
  const images = [
    { src: Rebates_1, alt: "Rebates 1" },
    { src: Rebates_2, alt: "Rebates 2" },
    { src: Rebates_3, alt: "Rebates 3" },
    { src: Rebates_4, alt: "Rebates 4" },
  ];

  return <Banner images={images} autoSlideInterval={9000} />;
};

export default Banner_3;
