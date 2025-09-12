import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

import agroexportacion from "../assets/agroexportacion.jpg";
import logistica from "../assets/logistica1.jpg";
import catering from "../assets/catering.jpg";

import "../styles/heroParalaxx.css"; // estilos separados

export default function HeroParallax() {
  return (
    <section className="hero-parallax">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800}
        parallax={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiperParallax"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${agroexportacion})` }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            Agroexportación
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Producción y calidad
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${logistica})` }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            Logística
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Transporte y eficiencia
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${catering})` }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            Catering
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Eventos y servicio
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
