import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiDiscount1 } from "react-icons/ci";
import { MdSupportAgent, MdCopyright } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section1">
        <div className="footer__section1__content">
          <div className="grid">
            <div className="grid__icon">
              <FaShippingFast />
            </div>
            <div className="grid__heading">
              <p className="grid__heading__title">Free Shipping & Return</p>
              <p className="grid__heading__subtitle">Free Shipping Over $300</p>
            </div>
          </div>
          <div className="grid">
            <div className="grid__icon">
              <HiOutlineCurrencyDollar />
            </div>
            <div className="grid__heading">
              <p className="grid__heading__title">Money back guarantee</p>
              <p className="grid__heading__subtitle">
                30 Days Money Back Guarantee
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="grid__icon">
              <CiDiscount1 />
            </div>
            <div className="grid__heading">
              <p className="grid__heading__title">Best prices</p>
              <p className="grid__heading__subtitle">Free Shipping Over $300</p>
            </div>
          </div>
          <div className="grid">
            <div className="grid__icon">
              <MdSupportAgent />
            </div>
            <div className="grid__heading">
              <p className="grid__heading__title">123-45-789-010</p>
              <p className="grid__heading__subtitle">24/7 Available Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__section2">
        <div className="footer__section2__content">
          <div className="footer__section2__content__contact-card">
            <p className="footer__section2__content__contact-card-title">
              Be in touch
            </p>
            <p className="footer__section2__content__contact-card-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
            <div style={{ position: "relative" }}>
              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="input-field"
                />
                <button className="envolope-btn">
                  {" "}
                  <SlEnvolope />
                </button>
              </form>
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <h3>Shop</h3>
            <ul className="footer-list">
              <li>For Women</li>
              <li>For Men</li>
              <li>Stores</li>
              <li>Our Blog</li>
              <li>Shops</li>
            </ul>
          </div>
          <div style={{ padding: "20px" }}>
            <h3>Company</h3>
            <ul className="footer-list">
              <li>Login</li>
              <li>Register</li>
              <li>Wishlist</li>
              <li>Our Products</li>
              <li>Checkouts</li>
            </ul>
          </div>
          <div style={{ padding: "20px" }}>
            <h3>Your Account</h3>
            <ul className="footer-list">
              <li>Login</li>
              <li>Register</li>
              <li>Wishlist</li>
              <li>Our Products</li>
              <li>Checkouts</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__section3">
        <div className="footer__section3__copyright-section">
          <p>
            <MdCopyright style={{ fontSize: "12px" }} />
            All Rights Reserved.
          </p>
        </div>
        <div className="footer__section3__others-section">
          <p>
            <span className="pd"> Terms and Conditions</span>
            <span className="pd"> Privacy and Cookies</span>
            <span className="pd"> Accessibility</span>
            <span className="pd"> Customer Data promise</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
