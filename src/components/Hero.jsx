import { useEffect } from "react";
import "../styles/hero.css";

import ParallaxSlider from "./ParallaxSlider";
import ExperienceSection from "./ExperienceSection";
import Presentation from "./Presentation";
import Information from "./Information";

const Hero = () => {
  useEffect(() => {
    document.title = "NG Dynamic";
  }, []);

  return (
    <section id="hero">
      <ParallaxSlider />
      <Presentation />
      <Information />
    </section>
  );
};

export default Hero;
