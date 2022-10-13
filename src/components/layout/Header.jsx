import React from "react";
import wolfLogo from "../../assets/img/wolfLogo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img src={wolfLogo} alt="wolfLogo" className="wolf" />
        <span>Hervé Hamann- Portfolio</span>
      </div>

      <ul>
        <li>Présentation</li>
        <li>Philosopie</li>
        <li>Stack</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
