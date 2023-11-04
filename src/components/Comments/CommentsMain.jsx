import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const CommentsMain = () => {
  return (
    <section className="gap no-top">
      <div className="container">
        <Swiper
          grabCursor={true}
          spaceBetween={60}
          slidesPerView={1}
          modules={[Pagination, EffectCreative, Autoplay]}
          pagination={{ clickable: true }}
          effect="creative"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [180, 0, 0],
            },
            next: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [-180, 0, 0],
            },
          }}
        >
          <SwiperSlide>
            <div className="quotation">
              <div className="quotation-mark">
                <img alt="quotation" src="/img/quotation-mark.png" />
                <p>
                  "consultancy has been a very enjoyable and professional
                  experience . The effort that Conjunct Consulting puts in to
                  ensure well trained consulting teams lead by well trained and
                  knowledgeable team leaders is very evident.”
                </p>
                <h5>Thomas Willimes</h5>
                <h6>Director of Information Technology</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="quotation">
              <div className="quotation-mark">
                <img alt="quotation" src="/img/quotation-mark.png" />
                <p>
                  "consultancy has been a very enjoyable and professional
                  experience . The effort that Conjunct Consulting puts in to
                  ensure well trained consulting teams lead by well trained and
                  knowledgeable team leaders is very evident.”
                </p>
                <h5>Thomas Willimes</h5>
                <h6>Director of Information Technology</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="quotation">
              <div className="quotation-mark">
                <img alt="quotation" src="/img/quotation-mark.png" />
                <p>
                  "consultancy has been a very enjoyable and professional
                  experience . The effort that Conjunct Consulting puts in to
                  ensure well trained consulting teams lead by well trained and
                  knowledgeable team leaders is very evident.”
                </p>
                <h5>Thomas Willimes</h5>
                <h6>Director of Information Technology</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="quotation">
              <div className="quotation-mark">
                <img alt="quotation" src="/img/quotation-mark.png" />
                <p>
                  "consultancy has been a very enjoyable and professional
                  experience . The effort that Conjunct Consulting puts in to
                  ensure well trained consulting teams lead by well trained and
                  knowledgeable team leaders is very evident.”
                </p>
                <h5>Thomas Willimes</h5>
                <h6>Director of Information Technology</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CommentsMain;
