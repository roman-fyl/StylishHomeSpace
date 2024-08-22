import React, { useState, useEffect } from "react";
import "./MainSlider.scss";

import Slide1 from "../../../assets/images/Slides/slide1.png";
import Slide2 from "../../../assets/images/Slides/slide2.png";
import Slide3 from "../../../assets/images/Slides/slide3.png";
import Slide4 from "../../../assets/images/Slides/slide4.png";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="main-slider">
      <div className="main-slider_content">
        <div className="slides">
          <input type="radio" name="r" id="r1" checked={currentSlide === 1} readOnly />
          <input type="radio" name="r" id="r2" checked={currentSlide === 2} readOnly />
          <input type="radio" name="r" id="r3" checked={currentSlide === 3} readOnly />
          <input type="radio" name="r" id="r4" checked={currentSlide === 4} readOnly />

          <div className={`slide slide1 ${currentSlide === 1 ? "active" : ""}`}>
           <a href="#"> <img src={Slide1} alt="Slide 1" /></a>
          </div>

          <div className={`slide slide2 ${currentSlide === 2 ? "active" : ""}`}>
           <a href="#"> <img src={Slide2} alt="Slide 2" /></a>
          </div>

          <div className={`slide slide3 ${currentSlide === 3 ? "active" : ""}`}>
            <a href="#"> <img src={Slide3} alt="Slide 3" /></a>
          </div>

          <div className={`slide slide4 ${currentSlide === 4 ? "active" : ""}`}>
           <a href="#"> <img src={Slide4} alt="Slide 4" /></a>
          </div>
        </div>

        <div className="navigation">
          <label htmlFor="r1" className="bar" onClick={() => handleNavigation(1)}></label>
          <label htmlFor="r2" className="bar" onClick={() => handleNavigation(2)}></label>
          <label htmlFor="r3" className="bar" onClick={() => handleNavigation(3)}></label>
          <label htmlFor="r4" className="bar" onClick={() => handleNavigation(4)}></label>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
