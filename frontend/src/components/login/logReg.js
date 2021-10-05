import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.scss";
import Logo from "../../assets/img/logoTxt.svg";
import CloseLogo from "../../assets/img/close.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../actions/auth";

const LogReg = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [value, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = value;

  const onChange = (e) =>
    setValues({
      ...value,
      [e.target.name]: e.target.value,
    });

  const handleLoginSubmit = async (e, type) => {
    e.preventDefault();

    if (type == "register") {
      const newUser = {
        name,
        email,
        password,
      };

      dispatch(signUp(newUser));
      console.log('register success');
      showForm('login')
    } else {
      const loginUser = {
        email,
        password,
      };
      dispatch(signIn(loginUser));
      console.log('login success');
      CloseLogReg();
      history.push("/productItem/1007")
    }
  };

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
    <div className="logReg" style={props.style}>
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
        <form
          onSubmit={(e) => handleLoginSubmit(e, "login")}
          className="login active"
        >
          <label htmlFor="logEmail">Email:</label>
          <input
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
            type="text"
            id="logEmail"
          />
          <label htmlFor="LogPassword">Password:</label>
          <input
            type="password"
            id="LogPassword"
            name="password"
            onChange={(e) => onChange(e)}
            value={password}
          />
          <button type="submit">Log In</button>
        </form>
        <form
          onSubmit={(e) => handleLoginSubmit(e, "register")}
          className="register"
        >
          <label htmlFor="regUsername">Name:</label>
          <input
            type="text"
            id="regUsername"
            name="name"
            onChange={(e) => onChange(e)}
            value={name}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
          />
          <label htmlFor="regPassword">Password:</label>
          <input
            type="password"
            id="regPassword"
            name="password"
            onChange={(e) => onChange(e)}
            value={password}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default LogReg;
