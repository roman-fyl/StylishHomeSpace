
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./BannersGroup.scss";

const Banner = ({ images, autoSlideInterval }) => {
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
      <div className="banner_content">
        <div className="banner_slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`banner_slide ${currentSlide === index + 1 ? "active" : ""}`}
            >
              <a href="#">
                <img src={image.src} alt={image.alt} />
              </a>
            </div>
          ))}
        </div>
        <div className="banner_navigation">
          {images.map((_, index) => (
            <label
              key={index}
              className={`bar ${currentSlide === index + 1 ? "active" : ""}`}
              onClick={() => handleNavigation(index + 1)}
            ></label>
          ))}
        </div>
      </div>
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoSlideInterval: PropTypes.number,
};

Banner.defaultProps = {
  autoSlideInterval: 3000,
};

export default Banner;
