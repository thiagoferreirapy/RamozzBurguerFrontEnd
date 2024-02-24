import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// Import Swiper effects
import { EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import {ContentSlider, ImageSlider } from './style';

import imgburguer1 from '../../../images/ImagesGalery/imagesFullWidth/img1.jpg'
import imgburguer2 from '../../../images/ImagesGalery/imagesFullWidth/img2.jpg'
import imgburguer3 from '../../../images/ImagesGalery/imagesFullWidth/img4.jpg'
import imgburguer4 from '../../../images/ImagesGalery/imagesFullWidth/img5.jpg'
import imgburguer5 from '../../../images/ImagesGalery/imagesFullWidth/img6.jpg'
import imgburguer6 from '../../../images/ImagesGalery/imagesFullWidth/img7.jpg'
import imgburguer7 from '../../../images/ImagesGalery/imagesFullWidth/img8.jpg'


export default function SliderImages (){
  
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        style={{
          '--swiper-pagination-color': '#ffffff9d',
          '--swiper-navigation-color': '#ffffff9d',
        }}
        
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        
          
        <SwiperSlide>
          <ContentSlider>
            <ImageSlider src={imgburguer1}
            alt="slider1"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider>
          <ImageSlider src={imgburguer2}
            alt="slider2"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider>
          <ImageSlider src={imgburguer3}
            alt="slider2"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider>
          <ImageSlider src={imgburguer4}
            alt="slider2"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider>
          <ImageSlider src={imgburguer5}
            alt="slider2"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider>
          <ImageSlider src={imgburguer6}
            alt="slider2"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider>
          <ImageSlider src={imgburguer7}
            alt="slider2"
            />
            
          </ContentSlider>
          
        </SwiperSlide>
  
      </Swiper>
    );
  };
  
 