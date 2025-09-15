import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";

import agropecuaria from "../assets/hero-slider/agropecuaria.jpg";
import catering from "../assets/hero-slider/catering.jpg";
import waifu from "../assets/hero-slider/waifu.jpg";
import nutricion from "../assets/hero-slider/nutricion.jpg";
import consultoria from "../assets/hero-slider/consultoria.jpg";
import limpieza from "../assets/hero-slider/limpieza.jpg";

import "../styles/parallaxSlider.css"; // estilos separados

export default function ParallaxSlider() {
  return (
    <section id="hero-parallax">
      <Swiper
        speed={800}
        parallax={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }} // <--- esto agrega los bullets
        className="mySwiperParallax"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0, 0, 0, 0.53)), url(${waifu})`
            }}
            data-swiper-parallax="-0%"
          ></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">
              Versatilidad que transforma.
            </div>
            <div className="subtitle" data-swiper-parallax="-3000">
              Somos NG Dynamic.
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${agropecuaria})`
            }}
            data-swiper-parallax="-0%"
          ></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">
              Agropecuaria
            </div>
            <div className="subtitle" data-swiper-parallax="-3000">
              Innovación en producción y manejo agrícola y ganadero.
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${catering})`
            }}
            data-swiper-parallax="-0%"
          ></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">
              Catering
            </div>
            <div className="subtitle" data-swiper-parallax="-3000">
              Gastronomía de primer nivel para empresas.
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${nutricion})`
            }}
            data-swiper-parallax="-0%"
          ></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">
              Nutrición Animal
            </div>
            <div className="subtitle" data-swiper-parallax="-3000">
              Soluciones completas para la alimentación de ganado y animales industriales.
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${consultoria})`
            }}
            data-swiper-parallax="-0%"
          ></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">
              Consultoría
            </div>
            <div className="subtitle" data-swiper-parallax="-3000">
              Asesoría estratégica para potenciar tu negocio.
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 94, 206, 0.56), rgba(0,0,0,0.53)), url(${limpieza})`
            }}
            data-swiper-parallax="-0%"
          ></div>
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-2000">
              Limpieza y Mantenimiento
            </div>
            <div className="subtitle" data-swiper-parallax="-3000">
              Cuidado integral de tus instalaciones.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
