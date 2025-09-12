import { useEffect } from "react";
import HeroParallax from "./HeroParallax";
import agroexportacion from "../assets/agroexportacion.jpg";
import logistica from "../assets/logistica1.jpg";
import catering from "../assets/catering.jpg";
import "../styles/hero.css";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

const Hero = () => {

  useEffect(() => {document.title = "Home | NG Dynamic";}, []);

  return (
    <section id="hero">
        <h1>NG Dynamic</h1>
        <p>Nos dirigimos a ustedes con el fin de presentarles NG Dynamic, una organización fundada el 7 de febrero de 2003 con 
        la misión de brindar soluciones logísticas integrales en sectores estratégicos de la economía argentina.
        Con más de dos décadas de experiencia, nuestro objetivo principal es acompañar a cada cliente con un servicio confiable, 
        eficiente y adaptado a sus necesidades específicas. Nos enorgullece ser un socio estratégico que garantiza no solo el 
        transporte, sino la seguridad y la integridad de cada operación, respaldados por un equipo altamente capacitado y 
        recursos de primer nivel.</p>

      {/*Swiper 1, estilo pagination solo con imagenes pasando automatica o manualmente*/}
      <Swiper modules={[Autoplay, Pagination, Navigation]}
      autoplay={{delay: 2500,disableOnInteraction: false,}} className="mySwiper">
          <SwiperSlide><img src={agroexportacion} alt="agroexportacion" /></SwiperSlide>
          <SwiperSlide><img src={catering} alt="catering" /></SwiperSlide>
          <SwiperSlide><img src={logistica} alt="logistica" /></SwiperSlide>
      </Swiper>


      {/*Swiper 2, estilo parallax, imagenes con texto*/}
      <HeroParallax></HeroParallax>

    </section>
  )
}

export default Hero
