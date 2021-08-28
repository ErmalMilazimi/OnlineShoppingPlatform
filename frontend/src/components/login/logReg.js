import React from "react";
import "./login.scss";
import Logo from "../../assets/img/logoTxt.svg";
import CloseLogo from "../../assets/img/close.svg";
function logReg() {
  const CloseLogReg = () => {
    document.querySelector(".logReg").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  };
  const showForm = (el) => {
    if (el === "login") {
      document.querySelector(".regBtn").classList.remove("active");
      document.querySelector(".loginBtn").classList.add("active");

      document.querySelector(".register").classList.remove("active");
      document.querySelector(".login").classList.add("active");
    } else if (el === "register") {
      document.querySelector(".loginBtn").classList.remove("active");
      document.querySelector(".regBtn").classList.add("active");

      document.querySelector(".login").classList.remove("active");
      document.querySelector(".register").classList.add("active");
    }
  };
  return (
    <div className="logReg">
      <div className="form-group">
        <div
          className="closeForm"
          style={{ backgroundImage: "url(" + CloseLogo + ")" }}
          onClick={CloseLogReg}
        ></div>
        <img src={Logo} alt="logo" className="logo" />
        <div className="buttons">
          <button
            className="loginBtn active"
            onClick={() => {
              showForm("login");
            }}
          >
            Log In
          </button>
          <button
            className="regBtn"
            onClick={() => {
              showForm("register");
            }}
          >
            Register
          </button>
        </div>
        <form action="" className="login active">
          <label htmlFor="logUsername">Username:</label>
          <input type="text" id="logUsername" />
          <label htmlFor="LogPassword">Password:</label>
          <input type="password" id="LogPassword" />
          <button type="submit">Log In</button>
        </form>
        <form action="" className="register">
          <label htmlFor="regUsername">Username:</label>
          <input type="text" id="regUsername" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="regPassword">Password:</label>
          <input type="password" id="regPassword" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default logReg;
