import React from "react";
import photoHerve from "../assets/img/photoHerve.png";
const Presentation = () => {
  return (
    <section className="presentation-section">
      <div className="container">
        <div className="text-container">
          <p>Bonjour, je m'appelle</p>
          <h1>Hervé Hamann</h1>
          <h2>Je conte des histoires avec du code</h2>
          <p>
            Je suis développeur front-end, je veux créer des expériences,
            <br /> des aventures uniques qui laissent leurs marques
            <br /> sur ceux qui voyagent à travers mes histoires.
          </p>
        </div>

        <img className="photo" src={photoHerve} alt="Hervé" />
      </div>
    </section>
  );
};

export default Presentation;
