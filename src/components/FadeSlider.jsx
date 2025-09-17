import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/fadeSlider.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const FadeSlider = ({ className, images }) => {
  if (!images || images.length === 0) return null; // evita crash si images está vacío

  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className={className}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i} style={{ position: "relative" }}>
          <img src={img} alt={`slide-${i}`} style={{ width: "100%", height: "100%" }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(57, 139, 247, 0.38), rgba(255, 255, 255, 0.14))"
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FadeSlider;
