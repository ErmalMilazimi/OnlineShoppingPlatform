import React from "react";
import "./nav.scss";
import Logo from "../../assets/img/logoTxt.png";

function nav() {
  return (
    <nav
      className="item-container navbar navbar-expand-lg navbar-dark"
      id="navbar-menu"
    >
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={Logo} alt="" className="nav-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-1">
              <a href="#" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link">
                ITEMS
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link">
                ABOUT US
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link">
                CONTACT US
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link" id="signlog">
                SIGN UP
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="#" className="nav-link">
                CART
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default nav;
