import React from "react";
import AboutUsCmp2 from "../components/aboutUsCmp2/AboutUsCmp2";
import AboutUsCmp3 from "../components/aboutUsCmp3/AboutUsCmp3";
import AboutUsCmp4 from "../components/aboutUsCmp4/AboutUsCmp4";
import Header from "../components/header/header";

function AboutUs() {
  return (
    <>
      <Header headerClassList={"productpage"} />
      <AboutUsCmp2 />
      <AboutUsCmp3 />
      <AboutUsCmp4 />
    </>
  );
}

export default AboutUs;
