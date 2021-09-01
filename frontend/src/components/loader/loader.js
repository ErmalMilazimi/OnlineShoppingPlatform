import React from "react";
import "./loader.scss";
import Logo from "../../assets/img/logo.svg";
function loader() {
  return (
    <div className="loader">
      <img src={Logo} alt="" />
      <h3>Kosova Shopping Platform</h3>
    </div>
  );
}

export default loader;
