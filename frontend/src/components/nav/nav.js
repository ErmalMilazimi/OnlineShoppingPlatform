import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./nav.scss";
import Logo from "../../assets/img/logoTxt.png";
import LogReg from "../login/logReg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import { seedItems } from "../../seed/seed-Items";

const Nav = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector((state) => state.auth?.user);
  const [navBar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const log_out = () => {
    dispatch(logout());
    history.push("/");
  };

  const seed = () => {
    seedItems();
    history.push("/Items");
  };

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
            {user?.role == "Admin" && (
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/about">
                  ABOUT US
                </Link>
              </li>
            )}
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/AddProduct">
                CONTACT US
              </Link>
            </li>
            {!user && (
              <li className="nav-item mx-1">
                <div className="nav-link" id="signlog" onClick={showLogReg}>
                  LOG IN
                </div>
              </li>
            )}
            {user ? (
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/Items">
                  {`Hi ${user.name}`}
                </Link>
              </li>
            ) : (
              ""
            )}
            {user && (
              <li className="nav-item mx-1">
                <div className="nav-link" id="signlog" onClick={log_out}>
                  LOGOUT
                </div>
              </li>
            )}
            {user?.role == "Admin" && (
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/Items" onClick={seed}>
                  Seed Items
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
