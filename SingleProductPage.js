import React, { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { SlArrowDown } from "react-icons/sl";
import data from "../json-data/data.json";
import { FiHeart } from "react-icons/fi";
import { CgMaximizeAlt } from "react-icons/cg";
import {
  FaShoppingCart,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaRegHeart,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function SingleProductPage(props) {
  const { productName, productImagePath, category, price } =
    props.productDetails;
  const description = props.productDetails.description;
  const [images] = useState({
    productImage: props.productDetails.productImagePath,
    productImageFront: props.productDetails.productImagefront,
    prodcutImsgeBack: props.productDetails.productImageback,
  });
  const [display, setDisplay] = useState("none");
  const [val, setValue] = useState("small");
  const handleDropdown = () => {
    if (display === "none") setDisplay("block");
    else setDisplay("none");
  };
  const setDropdownButtonValue = (e) => {
    setValue(e.target.id);
  };
  const [infoDisplay, setInfoDisplay] = useState("grid");
  const [addInfo, setAddInfo] = useState("tabActive");
  const [review, setReview] = useState("");
  const tabHandler = (e) => {
    if (e.target.id === "review") {
      setReview("tabActive");
      setInfoDisplay("none");
      setAddInfo("");
    } else {
      setReview("");
      setAddInfo("tabActive");
    }
  };
  // Object.values(images).map((k, i) => {});

  // const pagination = {
  //   clickable: true,

  //   renderBullet: function (index, className) {
  //     return Object.values(images).map((k, i) => {
  //       return (
  //         '<img src="' + k + '" class="' + className + " pagination-img" + '"/>'
  //       );
  //     });
  //   },
  // };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<img src="' +
        productImagePath +
        '" class="' +
        className +
        " pagination-img" +
        '"/>'
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
              {Object.values(images).map((k, i) => {
                return (
                  <SwiperSlide className="h">
                    <img src={k} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="singleProduct_contianer__content__product_description__product_desc">
            <h1>{productName}</h1>
            <div>
              <ul>
                <li>
                  {price} <del>$90</del>
                </li>
                <li>ratings</li>
              </ul>
            </div>
            <p>
              Women Blue Pure Cotton Jogger High-Rise Non-Stretchable Clean Look
              Jeans
            </p>
            <div>
              <h4>
                Size <span className="required">(required)</span>
              </h4>
              <div className="size-dropdown">
                <button className="dropdown-btn" onClick={handleDropdown}>
                  {val}
                  <SlArrowDown />
                </button>
                <div className="dropdown-content" style={{ display: display }}>
                  <ul>
                    <li id="small" onClick={setDropdownButtonValue}>
                      small
                    </li>
                    <li id="medium" onClick={setDropdownButtonValue}>
                      medium
                    </li>
                    <li id="large" onClick={setDropdownButtonValue}>
                      large
                    </li>
                    <li id="extralarge" onClick={setDropdownButtonValue}>
                      extra large
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="singleProduct_contianer__content__product_description__product_desc__quantity-input">
              <input type="number" max="5" min="1" defaultValue="1" />
              <div>
                <NavLink to="/">
                  <button>
                    {" "}
                    <FaShoppingCart style={{ padding: "10px" }} />
                    add to cart
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="singleProduct_contianer__content__product_description__product_desc__wishlist">
              <div className="spp-wishlist">
                {" "}
                <FaRegHeart style={{ padding: "0 5px" }} />
                <span>Add to wishlist</span>
              </div>
              <div>
                <FaWhatsapp style={{ padding: "5px", cursor: "pointer" }} />{" "}
                <FaInstagram style={{ padding: "5px", cursor: "pointer" }} />{" "}
                <FaFacebookF style={{ padding: "5px", cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="singleProduct_contianer__additional_info">
        <div className="singleProduct_contianer__additional_info__tabs">
          <div className={addInfo} onClick={tabHandler} id="addInfo">
            additional information
          </div>
          <div className={review} onClick={tabHandler} id="review">
            reviews
          </div>
        </div>
        <div className="singleProduct_contianer__additional_info__details">
          <div>
            <table className="additional-info_table">
              <tbody>
                {Object.entries(description).map((key, value) => {
                  return (
                    <tr>
                      <td>{key[0]} </td>
                      <td className="textColor">{key[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table className="additional-info_table">
              <tbody>
                <tr>
                  <td>Product Name </td>
                  <td className="textColor">{productName}</td>
                </tr>
                <tr>
                  <td>Price </td>
                  <td className="textColor">{price}</td>
                </tr>
                <tr>
                  <td>category </td>
                  <td className="textColor">{category}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>No reviews.</div>

      <div className="productSlider">
        <h2>You might also like these</h2>
        <div>
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
              // 0: {
              //   slidesPerView: 3,
              //   spaceBetween: 10,
              //   slidesPerGroup: 3,
              // },
              1024: {
                slidesPerView: 5,
                spaceBetween: 90,
                slidesPerGroup: 5,
              },
            }}
            navigation={true}
            modules={[Pagination]}
            className="mySwiper items-slider"
          >
            {data.Clothing.map((k, i) => {
              return (
                <SwiperSlide>
                  {" "}
                  <div className="product-card">
                    <div className="img-container">
                      <img
                        src={k.productImagePath}
                        style={{ width: "100%" }}
                        className="product-img"
                      />
                      <div className={`add-to-cart`}>
                        <span className="cursor-type">Add to cart</span>{" "}
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => {
                            props.setwishlistData(k);
                          }}
                        >
                          {props.cartItem.find(
                            (datas) => datas.productId === k.productId
                          ) ? (
                            <FaHeart className="wishlist-icon cursor-type" />
                          ) : (
                            <FiHeart />
                          )}
                        </button>
                        <NavLink to="/singleProductPage">
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            onClick={() => {
                              props.singleProductDetails(k);
                            }}
                          >
                            <CgMaximizeAlt className="cursor-type" />
                          </button>
                        </NavLink>
                      </div>
                    </div>

                    <div className="product-desc">
                      <h3 className="product-name"> {k.productName}</h3>
                      <h4 className="product-price">{k.price}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
