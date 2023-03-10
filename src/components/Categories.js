import React from "react";
import slide1 from "../images/index2-slide-1.jpg";
import slide2 from "../images/index2-slide-2.jpg";

export default function Categories() {
  return (
    <div className="main-container">
      <div className="category-content">
        <div className="category-one">
          <img src={slide2} className="images" />
          <div className="card">
            <div className="card-title">
              <p>cotton cardigons</p>
            </div>
            <div>
              <button className="card__button">shop now</button>
            </div>
          </div>
        </div>
        <div className="category-two">
          <img src={slide1} className="images" />
          <div className="card">
            <div className="card-title">
              <p>fancy jewellery</p>
            </div>
            <div>
              <button className="card__button">shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
