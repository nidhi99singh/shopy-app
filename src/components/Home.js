import React from "react";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import Slider from "./SwiperSlider";
import DODsection from "./DODsection";
export default function Home(props) {
  return (
    <>
      <Categories />
      <NewArrivals
        setwishlistData={props.setwishlistData}
        cartItem={props.cartItem}
        singleProductDetails={props.singleProductDetails}
      />
      <DODsection />
      <Slider />
    </>
  );
}
