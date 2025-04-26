import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="my-20 !flex justify-center h-32"
    >
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-4.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-5.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-6.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-7.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-32" src="./image/slider/client-8.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
export default Slider;
