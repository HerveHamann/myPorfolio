import React from "react";
import Astronaut from "../../assets/img/Astronaut.png";

const Footer = () => {
  return (
    <div className="footer" data-scroll-section>
      <svg className="maybe-earth" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff5e37"
          fillOpacity="1"
          d="M0,96L60,117.3C120,139,240,181,360,202.7C480,224,600,224,720,192C840,160,960,96,1080,69.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <svg
        className="second-earth"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="#ffc371"
          fillOpacity="1"
          d="M0,96L60,117.3C120,139,240,181,360,202.7C480,224,600,224,720,192C840,160,960,96,1080,69.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div className="footer-container">
        <div className="astronaut-container">
          <img className="astronaut" src={Astronaut} alt="Astronaut" />
          <div className="shadow"></div>
        </div>
        <p>
          Hervé Hamann <br /> Développeur Front end
        </p>
      </div>
    </div>
  );
};

export default Footer;
