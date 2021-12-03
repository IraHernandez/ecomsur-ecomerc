import React from "react";
import { HeroContainer } from "../componetsCss/Styles";
import heroImage from "../images/hero.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <img src={heroImage} alt="hero's image" height="400" />
    </HeroContainer>
  );
};

export default Hero;
