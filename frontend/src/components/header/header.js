import React from "react";
import Nav from "../nav/nav";
import "./header.scss";

const Header = (props) => {
  let classList = "";
  switch (props.headerClassList) {
    case "productlist":
      classList = "productlist-header";
      break;
    case "productpage":
      classList = "productpage-header";
      break;
    default:
  }

  return (
    <div className={`${classList} header`}>
      <Nav />
    </div>
  );
}

export default Header;
