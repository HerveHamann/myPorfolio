import React, { useState, useEffect } from "react";
import wolf from "../assets/img/wolf.svg";

const message = ["Hervé Hamann", "Développeur Front End", "Javascript React", "Bienvenue"];

const Modale = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    let handleChange = () => {
      if (i <= message.length - 1) setText(message[i++]);
    };

    let interval = setInterval(() => handleChange(), 1500);
    if (i === message.length - 1) {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="modale-container">
      <div className="container">
        <img src={wolf} alt="wolf" className="wolf"></img>
        <h1 className={text !== "" ? "modale-text" : ""}>{text}</h1>
      </div>
    </div>
  );
};

export default Modale;
