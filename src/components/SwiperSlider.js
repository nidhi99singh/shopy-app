import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import brand1 from "../images/retrologo.jpg";
import brand2 from "../images/retrologo1.jpg";
import { Pagination, Navigation } from "swiper";

export default function SwiperSlider() {
  return (
    <div className="slider-container-main">
      <div className="slider-container-main__history-section">
        <h5 className="slider-container-main__history-section-heading">
          OUR HISTORY
        </h5>
        <p className="slider-container-main__history-section-subcontent">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </p>
        <p className="slider-container-main__history-section-subcontent">
          He must have tried it a hundred times, shut his eyes so that he
          wouldn't have to look at the floundering legs, and only stopped when
          he began to feel a mild, dull pain there that he had never felt
          before.
        </p>
      </div>
      <div className="slider-container__slider-section">
        <Swiper
          slidesPerView={5}
          spaceBetween={90}
          slidesPerGroup={5}
          pagination={{
            dynamicBullets: true,
            // Dynamic bulelts for pagination dots(size change on click).
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 90,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={brand1} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={brand2} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand1} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={brand2} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand1} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={brand2} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand1} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={brand2} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={brand2} alt="logo1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={brand2} alt="logo1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
