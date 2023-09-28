import React from "react";
import Image from "next/image";

import upperUnion from "../assets/upperunion.svg";
import bottomUnion from "../assets/bottomunion.svg";
import portrait from "../assets/portrait_right_base.png";

import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero-info">
        <div className="home__hero-info-hero">
          <div className="home__hero-info-hero-frame">
            <h1 className="home__hero-info-title">Elevating Life</h1>
            <Image className="home__hero-info-image" src={upperUnion} alt="upper-union" />
          </div>
          <h1 className="home__hero-info-title">To Pro-Level Precision</h1>
          <div className="home__hero-info-hero-frame">
            <Image className="home__hero-info-image" src={bottomUnion} alt="bottom-union" />
            <h1 className="home__hero-info-title">With Vision Pro</h1>
          </div>
        </div>
        <p className="home__hero-info-text">
          With Vision Pro, you have an infinite canvas that transforms how you use the apps you
          love. Arrange apps anywhere and scale them to the perfect size, making the workspace of
          your dreams a reality — all while staying present in the world around you
        </p>
        <button className="home__hero-info-btn">Pre-Order Now</button>
      </div>
      <div className="home__slider">
        <div className="home__slider-first-layer">
          <div className="home__slider-second-layer">
            <div className="home__slider-third-layer">
              <Image className="home__slider-portrait" src={portrait} alt="Model Vision Pro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
