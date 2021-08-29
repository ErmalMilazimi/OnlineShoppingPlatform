import React from "react";
import "./otherCompanies.scss";
import Company1 from "../../assets/img/otherC1.png";
import Company2 from "../../assets/img/otherC2.png";
import Company3 from "../../assets/img/otherC3.png";
import Company4 from "../../assets/img/otherC4.png";
import Company5 from "../../assets/img/otherC5.png";
import Company6 from "../../assets/img/otherC6.png";
import Company7 from "../../assets/img/otherC7.png";
import Company8 from "../../assets/img/otherC8.png";

function otherCompanies() {
  return (
    <div className="container">
      <section className="otherCompanies">
        <h4 className="otherCompanies-title">Firma te tjera</h4>
        <section className="otherCompanies-company">
          <section className="otherCompanies-company-img_container">
            <img src={Company1} alt="other company img" />
          </section>
          <h4>Levi's</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="otherCompanies-company-img_container">
            <img src={Company2} alt="other company img" />
          </section>
          <h4>Abercrombie & Fitch</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="topCompany-container-company-img_container">
            <img src={Company3} alt="other company img" />
          </section>
          <h4>H&M</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="topCompany-container-company-img_container">
            <img src={Company4} alt="other company img" />
          </section>
          <h4>Timberland</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="topCompany-container-company-img_container">
            <img src={Company5} alt="other company img" />
          </section>
          <h4>ZARA</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="topCompany-container-company-img_container">
            <img src={Company6} alt="other company img" />
          </section>
          <h4>GAP</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="topCompany-container-company-img_container">
            <img src={Company7} alt="other company img" />
          </section>
          <h4>Gibson</h4>
        </section>
        <section className="otherCompanies-company">
          <section className="topCompany-container-company-img_container">
            <img src={Company8} alt="other company img" />
          </section>
          <h4>Christian Dior</h4>
        </section>
      </section>
    </div>
  );
}

export default otherCompanies;
