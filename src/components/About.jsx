import React from "react";

const About = () => {
  const stars = Array.from(Array(35).keys());

  return (
    <section id="about" className="about-section" data-scroll-section>
      <div className="nightsky-background">
        {stars.map((star) => (
          <div className="star" data-scroll data-scroll-repeat="true" id={star} key={star}></div>
        ))}
      </div>
      <div className="container">
        <div className="moon" data-scroll data-scroll-repeat="true"></div>
        <div className="text-container">
          <h2 data-scroll data-scroll-repeat="true">
            {" "}
            A propos{" "}
          </h2>
          <p data-scroll data-scroll-repeat="true">
            <br />
            Jeune reconverti dans la Tech de 34 ans. J'ai décidé de me spécialiser dans le développement front-end. Mon
            but est de créer des sites web et des applications uniques et innovantes. Ma philosophie s'articule en 3
            points:
          </p>

          <p data-scroll data-scroll-repeat="true">
            <span data-scroll data-scroll-repeat="true">
              {" "}
              Comprendre
            </span>
            <br />
            Depuis l'enfance, j'ai toujours été curieux d'apprendre ce qui m'a conduit à m'intéresser à une multitude de
            sujets, sciences et droit à travers mes études ou histoire et généalogie à travers mes loisirs. Le
            développement web nécéssite un apprentissage continuel pour se perfectionner et j'en suis ravi.
          </p>
          <p data-scroll data-scroll-repeat="true">
            <span data-scroll data-scroll-repeat="true">
              {" "}
              Collaborer
            </span>
            <br />
            Je crois dans les vertues d'une bonne organisation, juste et honnête pour réaliser des objectifs supérieurs.
            Qu'il s'agisse d'une société, d'une équipe de développement ou de la relation avec un client, l'équilibre,
            la confiance et la motivation sont primordiaux.
          </p>
          <p data-scroll data-scroll-repeat="true">
            <span data-scroll data-scroll-repeat="true">
              {" "}
              Créer
            </span>
            <br />
            Amener des sensations, transmettre de l'émotion, impressionner ou apporter une nouveauté. Que ce soit par
            l'innovation ou la narration d'une histoire, pour moi créer est essentiel. Laisser quelque chose de
            différent c'est laisser une marque de son passage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
