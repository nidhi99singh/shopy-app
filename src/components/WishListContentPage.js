import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
export default function WishListContentPage(props) {
 
  const wishlistData = props.cartItem;
  return (
    <div className="wishlist-container">
      <section className="wishlist-container__heading-container">
        <h1 className="wishlist-container__heading-container__title">
          wishlist
        </h1>
        <div>
          <p className="wishlist-container__heading-container__subtitle">
            You have {wishlistData.length} items in your wishlist. See a version
            of this template for signed-in customer.
          </p>
        </div>
      </section>
      <section className="wishlist-container__cart-items">
        {wishlistData.map((items, i) => {
          return (
            <div className="wishlist-container__cart-items__list">
              <div className="container">
                <div className="wishlist-container__cart-items__list__product-image">
                  <img
                    src={items.productImagePath}
                    alt={items.productName}
                    className="wishlist-container__cart-items__list__product-image-img"
                  />
                </div>
                <div className="wishlist-container__cart-items__list__product-desc">
                  <p className="product-name">{items.productName}</p>
                  <p>Size: Large</p>
                  <p>Color: Red</p>

                  <p className="price"> Price: {items.price}</p>
                </div>
              </div>
              <div className="container">
                <div className="add-to-cart-btn">
                  <button className="add-to-cart-btn__btn">add to cart</button>
                </div>
                <div className="remove-item">
                  <button
                    className="remove-item__btn"
                    onClick={() => props.removeWishlistData(items)}
                  >
                    <CgClose />
                  </button>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </section>
    </div>
  );
}
