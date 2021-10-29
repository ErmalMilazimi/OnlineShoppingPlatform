import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.scss";
import Logo from "../../assets/img/logoTxt.svg";
import CloseLogo from "../../assets/img/close.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../actions/auth";

const LogReg = (props) => {
  const [logBtn, setLogBtn] = useState(true);
  const [regBtn, setRegBtn] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [errors, setErrors] = useState({});
  const [value, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = value;

  const setErrorMsg = (key, message) => {
    setErrors((oldErrors) => {
      return {
        ...oldErrors,
        [key]: message,
      };
    });
  };

  const onChange = (e) => {
    setErrorMsg(e.target.name, null);

    setValues({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLoginSubmit = async (e, type) => {
    e.preventDefault();
    let isValid = true;

    if (!name.length && type === "register") {
      setErrorMsg("name", "name is required!");
      isValid = false;
    } else {
      setErrorMsg("name", null);
    }

    if (!validateEmail(email)) {
      setErrorMsg("email", "email is required!");
      isValid = false;
    } else {
      setErrorMsg("email", null);
    }

    if (!password.length) {
      setErrorMsg("password", "password is required!");
      isValid = false;
    } else {
      setErrorMsg("password", null);
    }

    if (isValid) {
      if (type === "register") {
        const newUser = {
          name,
          email,
          password,
        };

        dispatch(signUp(newUser));
        console.log("register success");
        setRegBtn(false);
        setLogBtn(true);
      } else {
        const loginUser = {
          email,
          password,
        };

        const log = await dispatch(signIn(loginUser));

        if (log) {
          console.log("login success");
          CloseLogReg();
          history.push("/Items");
        } else {
          setErrorMsg("auth", "email and password do not match!");
        }
      }
    }
  };

  const CloseLogReg = () => {
    document.querySelector(".logReg").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  };
  document.addEventListener("click", (event) => {
    if (event.target.className === "logReg") {
      CloseLogReg();
    }
  });
  return (
    <div className="logReg" style={props.style}>
      <div className="form-group">
        <div className="closeForm" style={{ backgroundImage: "url(" + CloseLogo + ")" }} onClick={CloseLogReg}></div>
        <img src={Logo} alt="logo" className="logo" />
        <div className="buttons">
          <button
            className={logBtn ? "loginBtn active" : "loginBtn"}
            onClick={() => {
              setRegBtn(false);
              setLogBtn(true);
            }}
          >
            Log In
          </button>
          <button
            className={regBtn ? "regBtn active" : "regBtn"}
            onClick={() => {
              setLogBtn(false);
              setRegBtn(true);
            }}
          >
            Register
          </button>
        </div>
        <form onSubmit={(e) => handleLoginSubmit(e, "login")} className={logBtn ? "login active" : "login"}>
          <label htmlFor="logEmail">Email:</label>
          <input name="email" onChange={(e) => onChange(e)} value={email} type="text" id="logEmail" />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <label htmlFor="LogPassword">Password:</label>
          <input type="password" id="LogPassword" name="password" onChange={(e) => onChange(e)} value={password} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          {errors.auth && <div style={{ color: "red" }}>{errors.auth}</div>}
          <button type="submit">Log In</button>
        </form>
        <form onSubmit={(e) => handleLoginSubmit(e, "register")} className={regBtn ? "register active" : "register"}>
          <label htmlFor="regUsername">Name:</label>
          <input type="text" id="regUsername" name="name" onChange={(e) => onChange(e)} value={name} />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e) => onChange(e)} value={email} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <label htmlFor="regPassword">Password:</label>
          <input type="password" id="regPassword" name="password" onChange={(e) => onChange(e)} value={password} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LogReg;
