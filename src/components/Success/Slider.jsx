// Import necessary libraries
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Create a CSS file for custom styles


const SliderComponent = () => {
  // Image URLs (replace with your own images)
  const images = [
    "./testimonials/first.png",
    "./testimonials/second.png",
    "./testimonials/third.png",
    "./testimonials/fourth.png",
  ];

  const settings = {
    dots: true, // Enables dots below the slider
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (i) => (
      <div className="custom-dot">
        <span></span>
      </div>
    ),
    appendDots: (dots) => (
      <div style={{ bottom: '20px' }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  // Custom buttons
  function CustomNextArrow({ onClick }) {
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        &gt;
      </div>
    );
  }

  function CustomPrevArrow({ onClick }) {
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        &lt;
      </div>
    );
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
