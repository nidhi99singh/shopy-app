import React, { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function SingleProductPage(props) {
  const { productImagePath, category } = props.productDetails;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"' +
        "style=background:url('" +
        productImagePath +
        "')  >" +
        "</span>"
      );
    },
  };

  return (
    <div className="singleProduct_contianer">
      <div className="singleProduct_contianer__content">
        <div className="singleProduct_contianer__content__breadcrumb">
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <Link href={category}>{category}</Link>
            <Typography>{category}</Typography>
          </Breadcrumbs>
        </div>
        <div className="singleProduct_contianer__content__product_description">
          {" "}
          <div>
            <Swiper
              spaceBetween={-3}
              direction={"vertical"}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={
                ({
                  clickable: true,
                },
                pagination)
              }
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="h">
                {/* <img src={productImagePath} /> */}
              </SwiperSlide>
              <SwiperSlide className="h">Slide 2</SwiperSlide>
              <SwiperSlide className="h">Slide 3</SwiperSlide>
              <SwiperSlide className="h">Slide 4</SwiperSlide>
            </Swiper>
          </div>
          <div>2</div>
        </div>
      </div>
      SingleProductPage
    </div>
  );
}

export default SingleProductPage;
