import React from "react";
import photoHerve from "../assets/img/photoHerve.png";
const Presentation = () => {
  return (
    <section
      id="presentation"
      className="presentation-section"
      data-scroll-section
      data-scroll
      data-scroll-repeat="true">
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
            Je suis développeur front end, je crée des expériences,
            <br /> des aventures uniques qui laissent leurs marques
            <br /> sur ceux qui voyagent à travers mes projets .
          </p>
          <div className="discover">
            <h2 className="appear" data-scroll data-scroll-repeat="true">
              Découvrez mon travail{" "}
            </h2>
            <div className="arrow-container" data-scroll data-scroll-repeat="true">
              <svg
                className="arrowdown"
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.5 16.5L12 13L8.5 16.5"
                  stroke="#ffc371"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 10.5L12 7L8.5 10.5"
                  stroke="#ffc371"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <img className="photo" data-scroll data-scroll-repeat="true" src={photoHerve} alt="Hervé" />
      </div>
    </section>
  );
};

export default Presentation;
