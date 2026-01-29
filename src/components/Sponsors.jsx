import React from "react";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <section className="sponsor-section">

      {/* GLITCH HEADING */}
      <h1 className="sponsor-heading glitch">
        <span aria-hidden="true">OUR SPONSORS</span>
        OUR SPONSORS
        <span aria-hidden="true">OUR SPONSORS</span>
      </h1>

      <div className="orbit-container">

        <div className="orbit-glow"></div>
<div className="orbit-ring"></div>
<div className="orbit-ring-light"></div>


        {/* LOGOS MOVING LIKE A FAIR WHEEL */}
        <div className="logo l1">LOGO</div>
        <div className="logo l2">LOGO</div>
        <div className="logo l3">LOGO</div>
        <div className="logo l4">LOGO</div>
        <div className="logo l5">LOGO</div>
        <div className="logo l6">LOGO</div>

        {/* CENTER FLIPPING CIRCLE */}
        <div className="center-flip">

          {/* FRONT SIDE */}
          <div className="center-face front">
            <div className="star-wrapper">
              <span className="star-main">✦</span>
              <span className="star-orbit">✦</span>
            </div>
            <p className="center-title">OUR SPONSORS</p>
            <p className="center-subtitle">OUR PARTNERS</p>
          </div>

          {/* BACK SIDE */}
          <div className="center-face back">
            <div className="star-wrapper">
              <span className="star-main">✦</span>
              <span className="star-orbit">✦</span>
            </div>
            <p className="center-title">OUR SPONSORS</p>
            <p className="center-subtitle">OUR PARTNERS</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sponsors;
