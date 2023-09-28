import React from "react";
import Image from "next/image";

import rectangleFirst from "@/assets/rectanglefirst.svg";
import rectangleSecond from "@/assets/rectanglesecond.svg";
import slideImage from "@/assets/slideimage.svg";
import rectangleFourth from "@/assets/rectanglefourth.svg";
import rectangleFifth from "@/assets/rectanglefifth.svg";
import playCircleFill from "@/assets/play.circle.fill.svg";

import "../styles/SlideShow.scss";

const SlideShow = () => {
  return (
    <div className="slide-show">
      <div className="slide-show__rectangle">
        <Image className="slide-show__rectangle-image" src={rectangleFirst} alt="rectangle-first" />
        <span className="slide-show__rectangle-blur" />
        <h3 className="slide-show__rectangle-text">Silo</h3>
      </div>
      <div className="slide-show__rectangle">
        <Image
          className="slide-show__rectangle-image"
          src={rectangleSecond}
          alt="rectangle-second"
        />
        <span className="slide-show__rectangle-blur" />
        <h3 className="slide-show__rectangle-text">Platonic</h3>
      </div>
      <div className="slide-show__movie">
        <Image className="slide-show__movie-image" src={slideImage} alt="slide-image" />
        <div className="slide-show__movie-info">
          <h3 className="slide-show__movie-info-name">HIJACK</h3>
          <p className="slide-show__movie-info-genre">Thriller</p>
        </div>
        <button className="slide-show__movie-btn">
          <h3 className="slide-show__movie-btn-text">Stream Now</h3>
          <Image
            className="slide-show__movie-btn-image"
            src={playCircleFill}
            alt="play-circle-fill"
          />
        </button>
      </div>
      <div className="slide-show__rectangle">
        <Image
          className="slide-show__rectangle-image"
          src={rectangleFourth}
          alt="rectangle-first"
        />
        <span className="slide-show__rectangle-blur" />
        <h3 className="slide-show__rectangle-text">The Crodwen Room</h3>
      </div>
      <div className="slide-show__rectangle">
        <Image className="slide-show__rectangle-image" src={rectangleFifth} alt="rectangle-first" />
        <span className="slide-show__rectangle-blur" />
        <h3 className="slide-show__rectangle-text">Swagger</h3>
      </div>
    </div>
  );
};

export default SlideShow;
