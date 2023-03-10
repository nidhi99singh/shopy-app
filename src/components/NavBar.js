import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  FiSearch,
  FiGlobe,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import Burger from "./Burger";
const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 15px;
  .nav {
    width: 80%;
    justify-content: space-between;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  .navbar-lists {
    display: flex;
    list-style: none;
    font-size: 16px;
    text-decoration: none;
  }
  .navbar-list-items {
    padding: 20px;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid black;
    }
    .navbar-link {
      text-decoration: none;
      color: black;
    }
    .sale-link {
      color: #dc3545;
      &:hover {
        border-bottom: #dc3545 !important;
      }
    }
  }
  .icons {
    padding: 0 10px;
    color: #4d4646;
    font-size: 18px;
  }
  .template-drop-down {
    position: absolute;
    width: 100%;
    top: 80px;
    left: 0%;
    border: 1px solid #e9e9e9;
    display: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    z-index: 9999;
    background-color: #fff;
    .template-drop-down-container {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      .list-one {
        padding: 10px;
        font-weight: 500;
        line-height: 2;
      }
    }
    .drop-down-list {
      list-style: none;

      .drop-down-list-items {
        &:hover {
          color: #777777;
        }
      }
    }
    .shop-span {
      display: inline-block;
      font-size: 0.75rem;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }
  .template:hover .template-drop-down {
    display: block;
  }
  .search-box,
  .globe-section,
  .login-container {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    position: absolute;
    padding: 30px;
    right: 320px;
    top: 80px;
    display: none;
    z-index: 9999;
    background-color: #fff;

    .input-field {
      padding: 15px;
      width: 250px;
      border: 1px solid #e9e9e9;
      outline: none;
      position: relative;
      &:focus-visible {
        border: 1px solid black;
      }
    }
  }
  .search-icon:hover .search-box,
  .user-icon:hover .login-container {
    display: block;
  }
  .globe-icon:hover .globe-section {
    display: block;
  }
  .globe-box-drop-down {
    border: 1px solid #e9e9e9;

    .globe-buttons {
      width: 250px;
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: none;
      font-size: 16px;
      border-bottom: 1px solid #e9e9e9;
    }
  }
  .language-selection {
    padding: 10px;
    display: none;
    position: absolute;
    width: 70%;
    background-color: white;
    font-weight: 400;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;

    p:hover {
      background-color: #f1f1f1;
    }
  }
  .drop-down-active {
    display: block;
    border: 1px solid #e9e9e9;
  }
  .arrow-rotate {
    transform: rotate(180deg);
    transition: transform ease;
  }
  .drop-down-content {
    padding: 20px;
  }
  .input-box {
    position: relative;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 10px;
  }
  .input-name {
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    transition: 0.6s;
    pointer-events: none;
  }
  .input-box input:valid ~ label,
  .input-box input:focus ~ label {
    transform: translateY(-15px);
    padding-bottom: 10px;
    color: #4d4646;
  }
  .login-content {
    border: 1px solid #e9e9e9;
    padding: 15px;
  }
  .text1 {
    font-size: 12px;
    text-align: center;
    color: #4d4646;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 20px;
  }
  .button-container {
    padding: 20px 0 0;
  }
  .button-container button {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    margin-bottom: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .signin-btn,
  .signup-btn:hover {
    color: #fff;
    background-color: #4d4646;
    border-color: #4d4646;
  }
  .signup-btn {
    background: transparent;
    color: #4d4646;
    border: 1px solid #4d4646;
  }
  .signin-btn:hover {
    background-color: #555050;
  }
  .wishlist-icon-top {
    position: relative;
  }
  .wishlist-item-count {
    position: absolute;
    border: 2px solid;
    width: 16px;
    height: 16px;
    color: #fff;
    font-size: 0.6rem;
    line-height: 20px;
    text-align: center;
    background-color: red;
    border-radius: 50%;
    top: 13px;
    right: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export default function NavBar(props) {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [currencyDropDownActive, setCurrencyDropDownActive] = useState(false);

  const handleActive = () => {};
  const [inputval, setinput] = useState({
    user_name: "",
    password: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { user_name, value } = e.target;
    setinput((preval) => {
      return {
        ...preval,
        [user_name]: value,
      };
    });
  };
  const addInputData = async (e) => {
    e.preventDefault();
    const { user_name, password } = inputval;
    if (user_name == "" || password == "") alert("enter user name");
    if (password == "") alert("please enter password");
  };
  return (
    <Header>
      <div className="nav">
        <div className="navbar">
          <ul className="navbar-lists">
            <li className="navbar-list-items">
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
            </li>
            <li className="navbar-list-items template">
              template
              <div className="template-drop-down">
                <div className="template-drop-down-container">
                  {/* list one */}
                  <div className="list-one">
                    <ul className="drop-down-list">
                      <li>
                        {" "}
                        <span className="shop-span">shop</span>
                      </li>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">
                          Listing sidebar
                        </li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">
                          Listing full width
                        </li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">
                          product default
                        </li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">lookbook</li>
                      </NavLink>
                    </ul>
                  </div>
                  {/* list two */}
                  <div className="list-one">
                    <ul className="drop-down-list">
                      <li>
                        {" "}
                        <span className="shop-span">cart</span>
                      </li>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">cart</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">check out</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">order</li>
                      </NavLink>
                    </ul>
                  </div>
                  {/* list three */}
                  <div className="list-one">
                    <ul className="drop-down-list">
                      <li>
                        {" "}
                        <span className="shop-span">account</span>
                      </li>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">order list</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">order details</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">favorites</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">personal data</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">
                          change password
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                  {/* list four*/}
                  <div className="list-one">
                    <ul className="drop-down-list">
                      <li>
                        {" "}
                        <span className="shop-span">other pages</span>
                      </li>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">about</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">contact</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">blog</li>
                      </NavLink>
                      <NavLink to="/listingSidebar">
                        <li className="drop-down-list-items">blog post</li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-list-items">
              <NavLink to="/docs" className="navbar-link">
                Docs
              </NavLink>
            </li>
            <li className="navbar-list-items">
              <NavLink to="/sale" className="navbar-link sale-link">
                Sale
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <NavLink to="/">
            <img src="./images/logo1.png" alt="logo image" className="logo" />
          </NavLink>
        </div>
        <div className="icons-section">
          <ul className="navbar-lists">
            <li className="navbar-list-items search-icon">
              <FiSearch className="icons" />
              <div className="search-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Search for items and brands"
                />
              </div>
            </li>
            <li className="navbar-list-items globe-icon">
              <FiGlobe className="icons" />
              <div className="globe-section">
                <div className="globe-box-drop-down">
                  <div className="drop-down-content">
                    <button
                      className="globe-buttons"
                      onClick={() => {
                        setDropDownActive(!dropDownActive);
                      }}
                    >
                      United States{" "}
                      <span>
                        <RiArrowDownSFill
                          className={`${dropDownActive ? "arrow-rotate" : ""}`}
                        />{" "}
                      </span>
                    </button>
                    <div
                      className={`language-selection ${
                        dropDownActive ? "drop-down-active" : ""
                      }`}
                    >
                      <Link to="">
                        <p className="p">United States</p>{" "}
                      </Link>
                      <Link to="">
                        <p>France</p>
                      </Link>
                      <Link to="">
                        <p>Germany</p>
                      </Link>
                    </div>

                    <button
                      className="globe-buttons"
                      onClick={() => {
                        setCurrencyDropDownActive(!currencyDropDownActive);
                      }}
                      style={{ marginTop: "20px" }}
                    >
                      USD{" "}
                      <span>
                        <RiArrowDownSFill
                          className={`${
                            currencyDropDownActive ? "arrow-rotate" : ""
                          }`}
                        />{" "}
                      </span>
                    </button>
                    <div
                      className={`language-selection ${
                        currencyDropDownActive ? "drop-down-active" : ""
                      }`}
                    >
                      <Link to="">
                        <p className="p">USD</p>{" "}
                      </Link>
                      <Link to="">
                        <p>EUR</p>
                      </Link>
                      <Link to="">
                        <p>RUB</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-list-items user-icon">
              <FiUser className="icons" />
              <div className="login-container" style={{ right: "170px" }}>
                <div className="login-content">
                  <form className="login-form">
                    <div className="input-box">
                      <input
                        type="text"
                        className="input-field"
                        placeholder=" "
                        style={{ border: "none", fontSize: "18px" }}
                        name="user_name"
                        value={inputval.user_name}
                        onChange={setData}
                        required
                      />
                      <label className="input-name">First Name</label>
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        className="input-field"
                        placeholder=" "
                        style={{ border: "none", fontSize: "18px" }}
                        name="password"
                        onChange={setData}
                        required
                      />
                      <label className="input-name">password</label>
                    </div>
                  
                  </form>
                </div>
                <div className="text1">
                  <NavLink to={"/forgotPassword"}>
                    <span>forgot password ?</span>
                  </NavLink>
                </div>
                <div className="button-container">
                  <button className="signin-btn" onClick={addInputData}>
                    Sign In
                  </button>
                  <button className="signup-btn">Create Account</button>
                </div>
              </div>
            </li>
            <Link to={"/wishListContentPage"}>
              <li className="navbar-list-items wishlist-icon-top">
                <FiHeart className="icons " />
                <div className="wishlist-item-count">
                  {props.wishlistCount.length}
                </div>
              </li>
            </Link>

            <li className="navbar-list-items">
              <FiShoppingBag className="icons" />
            </li>
            <li className="navbar-list-items">
              <Burger className="icons" />
            </li>
          </ul>
        </div>
      </div>
    </Header>
  );
}
