import React from "react";
import "./topCompany.scss";
import NikeLogo from "../../assets/img/nike_logo.webp";
import AdidasLogo from "../../assets/img/adidas_logo.webp";
import PalmangelsLogo from "../../assets/img/palmangels_logo.webp";
import LtbLogo from "../../assets/img/ltb_logo.webp";

function topCompany() {
  return (
    <section className="container">
      <section className="topCompany-container">
        <h4 className="topCompany-container-title">Firmat me te njohura</h4>
        <section className="topCompany-container-company">
          <section className="topCompany-container-company-img_container">
            <img src={NikeLogo} alt="top company img" />
          </section>
          <h4>Nike</h4>
        </section>
        <section className="topCompany-container-company">
          <section className="topCompany-container-company-img_container">
            <img src={AdidasLogo} alt="top company img" />
          </section>
          <h4>Adidas</h4>
        </section>
        <section className="topCompany-container-company">
          <section className="topCompany-container-company-img_container">
            <img src={PalmangelsLogo} alt="top company img" />
          </section>
          <h4>Palm Angles</h4>
        </section>
        <section className="topCompany-container-company">
          <section className="topCompany-container-company-img_container">
            <img src={LtbLogo} alt="top company img" />
          </section>
          <h4>LTB</h4>
        </section>
      </section>
    </section>
  );
}

export default topCompany;
