import React from "react";
import "../Styles/AboutUs.css";
import { Link } from "react-router-dom";
import gitHubLogo from "../assets/GitHub-Logo.png";

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <div className="vasco">
        <h3>Vasco Godinho</h3>
        <img src="./src/assets/Vasco.jpg"></img>
      </div>
      <div className="victor">
        <h3>Victor Silva</h3>
        <img src="./src/assets/Victor.jpg"></img>
        <p>My name is Victor Silva, I am 24 years old.</p>
        <p>
          I was born in Brazil but came to Portugal when I was five years old,
          since then I have lived in Lisbon. I have a background in Management,
          but I have always been interested in technology, which is why I
          decided not to pursue the area of economics. I really like playing
          football and playing computer games.
        </p>
        <Link to="https://github.com/Vini1602" className="gitHub">
          <img src={gitHubLogo} alt="Github Page"></img>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
