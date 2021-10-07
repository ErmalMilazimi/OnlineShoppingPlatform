import React from "react";
import AboutUsCmp from "../components/aboutUsCmp/aboutUsCmp";
import Header from "../components/header/header";

function AboutUs() {
  return (
    <div>
      <Header headerClassList={"productpage"} />
      <AboutUsCmp />
    </div>
  );
}

export default AboutUs;
