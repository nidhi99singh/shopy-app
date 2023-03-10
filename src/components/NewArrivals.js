import React from "react";
import data from "../json-data/data.json";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaHeart } from "react-icons/fa";
import { CgMaximizeAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export default function NewArrivals(props) {
  return (
    <div className="responsive">
      <div className="new-arrivals">
        <p className="new-arrivals__title">new arrivals</p>
        <div className="new-arrivals__sub-title">
          <span>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections
          </span>
        </div>
      </div>
      <div className="product-list">
        {data.Clothing.map((k, i) => {
          return (
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
                    style={{ backgroundColor: "transparent", border: "none" }}
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
                      style={{ backgroundColor: "transparent", border: "none" }}
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
                <div className="rating">
                  <FaStar className="rating-icon" />
                  <FaStar className="rating-icon" />
                  <FaStar className="rating-icon" />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
