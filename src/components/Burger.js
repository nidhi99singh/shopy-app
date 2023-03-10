import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
export default function Burger() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div>
      <div>
        <button onClick={handleToggle} className="burger-button">
          {" "}
          {navbarOpen ? <CgClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div className={`burger-menu ${navbarOpen ? "active" : ""}`}>
        <div className="burger-menu__content">
          <ul className="burger-menu__content__list">
            <NavLink to="/">
              <li className="burger-menu__content__list__items">Home</li>
            </NavLink>
            <li className="burger-menu__content__list__items">template</li>
            <li className="burger-menu__content__list__items">Docs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
