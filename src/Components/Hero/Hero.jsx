import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Transforming Education, Empowering Futures</h1>
        <p>
          Our innovative curriculum equips students with the knowledge, skills
          and real-world experiences to thrive in a dynamic global landscape.
        </p>
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <button className="btn">Explore with us</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
