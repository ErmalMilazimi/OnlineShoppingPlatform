import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import Logo from "../../assets/img/logoTxt.png";
import LogReg from "../login/logReg";

function Nav() {
  const [navBar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // const [logReg, setLogReg] = useState(false);
  // const logregClicked = () => {
  //   console.log("object");
  //   setLogReg(true);
  // };

  const showLogReg = () => {
    document.querySelector(".logReg").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
  };
  return (
    <nav
      className={
        navBar
          ? "item-container navbar navbar-expand-lg navbar-dark active"
          : "item-container navbar navbar-expand-lg navbar-dark"
      }
      id="navbar-menu"
    >
      <LogReg />
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
              <Link className="nav-link" to="/Items">
                ITEMS
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/ ">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/ ">
                CONTACT US
              </Link>
            </li>
            <li className="nav-item mx-1">
              <div className="nav-link" id="signlog" onClick={showLogReg}>
                LOG IN
              </div>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/ ">
                CART
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
