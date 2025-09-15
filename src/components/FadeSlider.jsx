import { Swiper, SwiperSlide } from "swiper/react";

/*Slider*/
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/fadeSlider.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

/*Media*/
import logistica1 from "../assets/rubros-images/logistica1.jpg";
import logistica2 from "../assets/rubros-images/logistica2.jpg";
import logistica3 from "../assets/rubros-images/logistica3.jpg";

const FadeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiperFade"
      >
        <SwiperSlide>
          <img src={logistica1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logistica2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logistica3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FadeSlider;
