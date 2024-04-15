import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container innerWidth paddings flexCenter">
        <div
          className="flexColStart hero-left 
         "
        >
          <div className="hero-title flexColStart">
            <span>
              {" "}
              discover
              <br /> most suitable <br />
              property
            </span>
            <div></div>
          </div>
          <div className="hero-description flexColStart">
            <span>Find a variety of properties that suit you very easily </span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter hero-stats ">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8000} end={9000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1000} end={2000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={10} end={30} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
