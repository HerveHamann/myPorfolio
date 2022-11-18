import React from "react";

import wolfLogo from "../../assets/img/wolfLogo.svg";

const Header = () => {
  return (
    <div id="header" className="header" data-scroll-section>
      <div className="logocontainer">
        <img src={wolfLogo} alt="wolfLogo" className="wolf" />
        <span>Hervé Hamann - Portfolio</span>
      </div>

      <ul>
        <li>
          <a href="#presentation" data-scroll-to>
            Présentation
          </a>
        </li>
        <li>
          <a href="#about" data-scroll-to>
            A propos
          </a>
        </li>
        <li>
          <a href="#stack" data-scroll-to>
            Stack & Skills
          </a>
        </li>
        <li>
          <a href="#projet" data-scroll-to>
            Projets
          </a>
        </li>
        <li>
          <a href="#contact" data-scroll-to>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
