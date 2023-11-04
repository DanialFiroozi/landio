import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomersMain = () => {
  return (
    <div className="container gap no-top">
      <div className="clients-slider">
        <Swiper
          spaceBetween={32}
          slidesPerView={5}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5
            },
          }}
        >
          <SwiperSlide>
            <img alt="clients" src="/img/clients-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="clients" src="/img/clients-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="clients" src="/img/clients-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="clients" src="/img/clients-4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="clients" src="/img/clients-5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="clients" src="/img/clients-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="clients" src="/img/clients-4.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomersMain;
