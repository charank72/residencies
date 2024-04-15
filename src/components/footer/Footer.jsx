import React from "react";
import './footer.css'
function Footer() {
  return (
    <footer className="f-wrapper">
      <div className="f-container paddings innerWidth flexStart">
        <div className="fhead flexColStart">
          <img src="./logo2.png" alt="" />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>
        <div className="flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <ul>
            <li>Property</li>
            <li>Services</li>
            <li>Product</li>
            <li>About US</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
