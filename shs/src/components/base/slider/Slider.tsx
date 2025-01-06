import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";

import "./Slider.scss";

interface SliderImageProps {
  src: string;
  alt: string;
  link?: string | null;
}

export interface SliderProps {
  images: SliderImageProps[];
  autoSlideInterval?: number;
}

export const Slider: FC<SliderProps> = ({
  images,
  autoSlideInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval, totalSlides]);

  const handleNavigation = (slideNumber: number) => {
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
              <Link to={image?.link || ""}>
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
