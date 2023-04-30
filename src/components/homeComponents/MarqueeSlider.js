import React from "react";
import brand1 from "../../images/brand-01.png";
import brand2 from "../../images/brand-02.png";
import brand3 from "../../images/brand-03.png";
import brand4 from "../../images/brand-04.png";
import brand5 from "../../images/brand-05.png";
import brand6 from "../../images/brand-06.png";
import brand7 from "../../images/brand-07.png";
import brand8 from "../../images/brand-08.png";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <div className="marquee-inner-wrapper">
      <Marquee className="d-flex justify-content-between">
        <div className="mx-4 w-25">
          <img src={brand1} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand2} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand3} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand4} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand5} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand6} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand7} alt="brand" />
        </div>
        <div className="mx-4 w-25">
          <img src={brand8} alt="brand" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
