import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataCarousel } from "./Data";
import "./style.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {dataCarousel.map((item, index) => (
          <div className="card">
            <div className="card__Top">
              <img className="card__Image" src={item.image} alt={item.name} />
            </div>
            <div className="card__Botton">
              <h1 className="card__Botton--h1">{item.name} </h1>
              <p className="card__Botton--p">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
