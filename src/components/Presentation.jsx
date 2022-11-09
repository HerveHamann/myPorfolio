import React from "react";
import photoHerve from "../assets/img/photoHerve.png";
const Presentation = () => {
  return (
    <section className="presentation-section" data-scroll-section data-scroll data-scroll-repeat="true">
      <div className="container">
        <div className="text-container">
          <p className="appear hello" data-scroll data-scroll-repeat="true">
            Bonjour, je m'appelle
          </p>
          <h1 className="appear" data-scroll data-scroll-repeat="true">
            Hervé Hamann
          </h1>
          <h2 className="appear" data-scroll data-scroll-repeat="true">
            Je conte des histoires avec du code
          </h2>
          <p className="appear" data-scroll data-scroll-repeat="true">
            Je suis développeur front-end, je veux créer des expériences,
            <br /> des aventures uniques qui laissent leurs marques
            <br /> sur ceux qui voyagent à travers mes projets.
          </p>
        </div>

        <img className="photo" data-scroll data-scroll-repeat="true" src={photoHerve} alt="Hervé" />
      </div>
    </section>
  );
};

export default Presentation;
