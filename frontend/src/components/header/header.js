import React from "react";
import Nav from "../nav/nav";
import "./header.scss";

function header(props) {
  const classList = props.headerClassList ? "second-header" : "";

  return (
    <div className={`${classList} header`}>
      <Nav />
    </div>
  );
}

export default header;
