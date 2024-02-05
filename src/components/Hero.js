import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              {" "}
              <span className="primary-color">online business</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              similique ducimus mollitia, corporis cupiditate voluptas beatae
              atque repellendus blanditiis modi nulla quas officiis
              exercitationem qui rem, ex praesentium animi. Tempore!
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase /> Staxx
                </i>
                <i>
                  <FaAsterisk /> Star AI
                </i>
                <i>
                  <FaAccusoft /> Accosoft
                </i>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
