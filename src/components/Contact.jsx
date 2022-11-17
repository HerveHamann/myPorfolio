import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact-page-container" data-scroll-section>
      <div className="contact-container">
        <div className="planet" data-scroll data-scroll-repeat="true">
          <div className="planet-body"></div>
          <div className="planet-ring"></div>
          <div className="planet-ring-two"></div>
        </div>

        <ContactForm />
      </div>
      <div className="close-sun" data-scroll data-scroll-repeat="true"></div>
    </section>
  );
};

export default Contact;
