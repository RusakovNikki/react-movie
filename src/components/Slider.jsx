import React, { useState } from "react";
import { useEffect } from "react";
import { getPremiers } from "../utils/api";

import "../css/Slider.css";
import rightIcon from "../images/right-icon1.png";
import leftIcon from "../images/left-icon1.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [premiers, setPremiers] = useState([]);

  useEffect(() => {
    getPremiers().then((res) => {
      setPremiers(res.items.slice(0, 15));
    });
  }, []);

  const handleLeftButtonClick = () => {
    if (currentSlide === 0) {
      setCurrentSlide(premiers.length);
    }
    setCurrentSlide((prevState) => prevState - 1);
  };

  const handleRightButtonClick = () => {
    if (currentSlide === premiers.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prevState) => prevState + 1);
  };

  return (
    <div className="slider-container">
      <button
        className="slider-button left-button"
        onClick={handleLeftButtonClick}
      >
        <img src={leftIcon} alt="left" />
      </button>
      <div>
        <img
          className="slider-image"
          src={premiers.length !== 0 ? premiers[currentSlide].posterUrl : null}
          alt={premiers.length !== 0 ? premiers[currentSlide].nameRu : null}
        ></img>
      </div>
      <div className="slider-description-container">
        <h3 className="slider-description-name">
          {premiers.length !== 0 ? premiers[currentSlide].nameRu : null}
        </h3>
        <p>{premiers.length !== 0 ? premiers[currentSlide].year : null}</p>
        <p>
          Продолжительность:{" "}
          {premiers.length !== 0 ? premiers[currentSlide].duration : null} мин
        </p>
        <p className="slider-description-genre">
          {premiers.length !== 0
            ? premiers[currentSlide].genres[0].genre
            : null}
        </p>
      </div>
      <button className="slider-button" onClick={handleRightButtonClick}>
        <img src={rightIcon} alt="right" />
      </button>
    </div>
  );
};

export { Slider };
