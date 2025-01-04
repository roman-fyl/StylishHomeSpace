
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import "./Slider.scss";

const Slider = ({ images, autoSlideInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval, totalSlides]);

  const handleNavigation = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
      <div className="slider_main">
      <div className="slider_content">
        <div className="slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index + 1 ? "active" : ""}`}
            >
              <Link to={image.link}>
                <img src={image.src} alt={image.alt} />
              </Link>
            </div>
          ))}
        </div>
        <div className="navigation">
          {images.map((_, index) => (
            <label
              key={index}
              className={`bar ${currentSlide === index + 1 ? "active" : ""}`}
              onClick={() => handleNavigation(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoSlideInterval: PropTypes.number,
};


export default Slider;
