import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import astronaut from "../assets/img/test/astronaut.png";
import celebrating from "../assets/img/test/celebrating.png";
import education from "../assets/img/test/education.png";
import taken from "../assets/img/test/taken.png";

// import css
import '../carousel.css';

const images = [astronaut, celebrating, education, taken];

const MissionCarousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

   const [imageIndex, setImageIndex] = useState(0);

   const settings = {
     infinite: true,
     lazyLoad: true,
     speed: 300,
     slidesToShow: 3,
     centerMode: true,
     centerPadding: 0,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
     beforeChange: (current, next) => setImageIndex(next),
   };

  return (
    <section className="flex justify-center">
      <div className="w-3/4">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MissionCarousel;
