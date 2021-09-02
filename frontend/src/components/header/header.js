import React from "react";
import Nav from "../nav/nav";
import "./header.scss";
import banner from "../../assets/img/banner.webp";

function header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${banner})` }}>
      <Nav />
    </div>
  );
}

export default header;
