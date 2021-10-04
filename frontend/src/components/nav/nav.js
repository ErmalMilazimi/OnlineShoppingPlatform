import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import Logo from "../../assets/img/logoTxt.png";
import LogReg from "../login/logReg";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.auth?.user)
  const [navBar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  console.log('user', user)
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
        <Link className="nav-link" to="/">
          <img src={Logo} alt="" className="nav-logo" />
        </Link>
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
              <Link className="nav-link" to="/">
                HOME
              </Link>
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
                {user ? `Hi ${user.name}` : "CART"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
