import { useEffect } from "react";
import HeroParallax from "./HeroParallax";
import "../styles/hero.css";


const Hero = () => {

  useEffect(() => {document.title = "Home | NG Dynamic";}, []);

  return (
    <section id="hero">
      {/*Swiper, estilo parallax, imagenes con texto*/}
      <HeroParallax/>

      {/*Swiper 1, estilo pagination solo con imagenes pasando automatica o manualmente
      <Swiper modules={[Autoplay, Pagination, Navigation]}
      autoplay={{delay: 2500,disableOnInteraction: false,}} className="mySwiper">
          <SwiperSlide><img src={agroexportacion} alt="agroexportacion" /></SwiperSlide>
          <SwiperSlide><img src={catering} alt="catering" /></SwiperSlide>
          <SwiperSlide><img src={logistica} alt="logistica" /></SwiperSlide>
      </Swiper>*/}
    </section>
  )
}

export default Hero
