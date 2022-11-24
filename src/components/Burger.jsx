import React, { useState } from "react";

const Burger = () => {
  const [MenuOpen, SetMenuOpen] = useState(false);

  return (
    <div className="menu-container">
      <div
        className="burger-container"
        onClick={() => {
          MenuOpen ? SetMenuOpen(false) : SetMenuOpen(true);
        }}>
        <div className={MenuOpen ? "bar-close" : "bar"}></div>
        <div className={MenuOpen ? "bar-close" : "bar"}></div>
        <div className={MenuOpen ? "bar-close" : "bar"}></div>
      </div>
      <div className={MenuOpen ? "dropdown-container" : "dropdown-container hidden"}>
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
    </div>
  );
};

export default Burger;
