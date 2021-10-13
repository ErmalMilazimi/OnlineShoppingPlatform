import React from "react";
import { Link } from "react-router-dom";
import "./otherCompanies.scss";
import Company1 from "../../assets/img/otherC1.webp";
import Company2 from "../../assets/img/otherC2.webp";
import Company3 from "../../assets/img/otherC3.webp";
import Company4 from "../../assets/img/otherC4.webp";
import Company5 from "../../assets/img/otherC5.webp";
import Company6 from "../../assets/img/otherC6.webp";
import Company7 from "../../assets/img/otherC7.webp";
import Company8 from "../../assets/img/otherC8.webp";

function otherCompanies() {
  const data = [
    {
      img: Company1,
      title: "Levi's",
    },
    {
      img: Company2,
      title: "Abercrombie & Fitch",
    },
    {
      img: Company3,
      title: "H&M",
    },
    {
      img: Company4,
      title: "Timberland",
    },
    {
      img: Company5,
      title: "ZARA",
    },
    {
      img: Company6,
      title: "GAP",
    },
    {
      img: Company7,
      title: "Gibson",
    },
    {
      img: Company8,
      title: "Christian Dior",
    },
  ];
  return (
    <div className="container">
      <section className="otherCompanies">
        {data.map((e, i) => {
          return (
            <Link to={`/Items/${e.title}`}>
              <Companies img={e.img} title={e.title} key={i} />
            </Link>
          );
        })}
      </section>
    </div>
  );
}
const Companies = ({ img, title }) => {
  return (
    <section className="otherCompanies-company">
      <section className="topCompany-container-company-img_container">
        <img src={img} alt="other company img" />
      </section>
      <h4>{title}</h4>
    </section>
  );
};
export default otherCompanies;
