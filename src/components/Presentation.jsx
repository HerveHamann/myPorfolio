import React from "react";
import photoHerve from "../assets/img/photoHerve.png";
const Presentation = () => {
  return (
    <section className="presentation-section">
      <h2>Présentation</h2>
      <div className="container">
        <p>
          Bonjour! Je m'appelle <span>Hervé</span>,
          <br />
          Je suis développeur <span> front-end </span> ,
          <br />
          Spécialisé en <span>Javascript</span> et <span>React</span>.
        </p>

        <img className="photo" src={photoHerve} alt="Hervé" />
      </div>
    </section>
  );
};

export default Presentation;
