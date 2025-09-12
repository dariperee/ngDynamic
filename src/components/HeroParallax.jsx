import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

import agroexportacion from "../assets/agroexportacion.jpg";
import catering from "../assets/catering.jpg";
import ingeniera from "../assets/ingeniera.jpg";
import main from "../assets/main.jpg";
import waifu from "../assets/waifu.jpg";

import "../styles/heroParalaxx.css"; // estilos separados

export default function HeroParallax() {
  return (

    <section id="hero-parallax">

      <Swiper speed={800} parallax={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="mySwiperParallax">

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="parallax-bg" 
          style={{backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0, 0, 0, 0.53)), url(${ingeniera})`}}  
          data-swiper-parallax="-0%"></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">Líderes en soluciones integrales para empresas</div>
            <div className="subtitle" data-swiper-parallax="-3000">Somos NG Dynamic</div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="parallax-bg" 
          style={{backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${agroexportacion})`}}  
          data-swiper-parallax="-0%"></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">Agroexportación</div>
            <div className="subtitle" data-swiper-parallax="-3000">Transporte y eficiencia</div>
          </div>
        </SwiperSlide>

           {/* Slide 3 */}
        <SwiperSlide>
          <div className="parallax-bg" 
          style={{backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${catering})`}}  
          data-swiper-parallax="-0%"></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">Catering</div>
            <div className="subtitle" data-swiper-parallax="-3000">Mi cabeza...</div>
          </div>
        </SwiperSlide>
 
      </Swiper>
    </section>
  );
}
