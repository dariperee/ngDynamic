import { useEffect } from "react";
import "../styles/hero.css";

import ParallaxSlider from "./ParallaxSlider";
import Presentation from "./Presentation";
import Information from "./Information";

const Hero = () => {
  useEffect(() => {
    document.title = "NG Dynamic";
  }, []);

  return (
    <section id="heroMain">
      <ParallaxSlider />
      <Presentation />
      <Information />
    </section>
  );
};

export default Hero;
