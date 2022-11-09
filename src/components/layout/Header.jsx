import React from "react";
import wolfLogo from "../../assets/img/wolfLogo.svg";
const Header = () => {
  return (
    <div className="header" data-scroll-section>
      <div className="logocontainer">
        <img src={wolfLogo} alt="wolfLogo" className="wolf" />
        <span>Hervé Hamann - Portfolio</span>
      </div>

      <ul>
        <li>Présentation</li>
        <li>A propos</li>
        <li>Stack & Skills</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
