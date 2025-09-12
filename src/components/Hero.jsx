import { useEffect } from "react";
import agroexportacion from "../assets/agroexportacion.jpg";
import logistica from "../assets/logistica1.jpg";
import catering from "../assets/catering.jpg";
import "../styles/hero.css";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
      <Swiper 
      style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff',}}
      speed={600} parallax={true} pagination={{clickable: true,}} navigation={true}
      modules={[Parallax, Pagination, Navigation]} className="mySwiper2">
        <div slot="container-start" className="parallax-bg"
          style={{'background-image':'url(https://swiperjs.com/demos/images/nature-1.jpg)',}}
          data-swiper-parallax="-23%">
        </div>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 1</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100"><p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 2</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100"><p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">Slide 3</div>
          <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
          <div className="text" data-swiper-parallax="-100"><p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  )
}

export default Hero
