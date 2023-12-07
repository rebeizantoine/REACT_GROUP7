import React from "react";
import "../Styles/brands.css";
import image1 from "../Svgs/image1.png";
import image2 from "../Svgs/image2.png";
import image3 from "../Svgs/image3.png";
import image5 from "../Svgs/image5.png";
import image6 from "../Svgs/image6.png";
import image7 from "../Svgs/image7.png";

const Brands = () => {
  return (
    <div className="brands">
      <div class="horizontal-line"></div>
      <div className="Brands">
        <div className="brand">
          <img src={image1} className="b" />
        </div>
        <div className="brand">
          <img src={image2} className="b" />
        </div>
        <div className="brand">
          <img src={image3} className="b" />
        </div>
        <div className="brand">
          <img src={image5} className="b" />
        </div>
        <div className="brand">
          <img src={image6} className="b" />
        </div>
        <div className="brand">
          <img src={image7} className="b" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
