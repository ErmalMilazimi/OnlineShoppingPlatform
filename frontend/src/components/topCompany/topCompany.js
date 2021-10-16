import React from "react";
import "./topCompany.scss";
import NikeLogo from "../../assets/img/nike_logo.webp";
import AdidasLogo from "../../assets/img/adidas_logo.webp";
import PalmangelsLogo from "../../assets/img/palmangels_logo.webp";
import LtbLogo from "../../assets/img/ltb_logo.webp";
import { Link } from "react-router-dom";

function topCompany() {
  const data = [
    {
      img: NikeLogo,
      title: "Nike",
    },
    {
      img: AdidasLogo,
      title: "Adidas",
    },
    {
      img: PalmangelsLogo,
      title: "Palm Angels",
    },
    {
      img: LtbLogo,
      title: "Ltb",
    },
  ];
  return (
    <section className="container">
      <section className="topCompany-container">
        <h4 className="topCompany-container-title">Firmat me te njohura</h4>
        {data.map((c) => {
          return (
            <Link to={`/Items/${c.title}`} className="topCompany-container-company">
              <section className="topCompany-container-company-img_container">
                <img src={c.img} alt="top company img" />
              </section>
              <h4>{c.title}</h4>
            </Link>
          );
        })}
      </section>
    </section>
  );
}

export default topCompany;
