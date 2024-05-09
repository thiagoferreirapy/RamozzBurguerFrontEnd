import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper/modules";

import { ContentSlider, ImageSlider } from "./style";

import imgburguer1 from "../../../images/ImagesSlider/imagemBurguer1.svg";
import imgburguer2 from "../../../images/ImagesSlider/imagemBurguer2.svg";
import imgburguer3 from "../../../images/ImagesSlider/imagemBurguer3.svg";
import imgburguer4 from "../../../images/ImagesSlider/imagemBurguer4.svg";
import imgburguer5 from "../../../images/ImagesSlider/imagemBurguer5.svg";
import imgburguer6 from "../../../images/ImagesSlider/imagemBurguer6.svg";
import imgburguer7 from "../../../images/ImagesSlider/imagemBurguer7.svg";

export default function Slider() {
  return (
    <Swiper
      lazy={true}
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{
        "--swiper-pagination-color": "#ffffff9d",
        "--swiper-navigation-color": "#ffffff9d",
      }}
      effect="fade"
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer1} alt="slider1" />
        </ContentSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer2} alt="slider2" />
        </ContentSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer3} alt="slider2" />
        </ContentSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer4} alt="slider2" />
        </ContentSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer5} alt="slider2" />
        </ContentSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer6} alt="slider2" />
        </ContentSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider>
          <ImageSlider src={imgburguer7} alt="slider2" />
        </ContentSlider>
      </SwiperSlide>
    </Swiper>
  );
}
