import React from "react";
import './getstart.css'
function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
