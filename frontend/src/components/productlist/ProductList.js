import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import Header from "../header/header";
// import SecondHeader from "../../assets/img/second-header.jpg";
import Prd1 from "../../assets/img/ProductList/nike1.webp";
import Prd2 from "../../assets/img/ProductList/nike2.webp";
import Prd3 from "../../assets/img/ProductList/nike3.webp";
import Prd4 from "../../assets/img/ProductList/nikeshirt1.webp";
import Prd5 from "../../assets/img/ProductList/nikeshirt2.webp";
import Prd6 from "../../assets/img/ProductList/nikeshirt3.webp";
import Prd7 from "../../assets/img/ProductList/adidas1.webp";
import Prd8 from "../../assets/img/ProductList/adidas2.webp";
import Prd9 from "../../assets/img/ProductList/adidas3.webp";
import Prd10 from "../../assets/img/ProductList/adidas4.webp";
import Prd11 from "../../assets/img/ProductList/adidasshirt1.webp";
import Prd12 from "../../assets/img/ProductList/adidasshirt2.webp";
import Prd13 from "../../assets/img/ProductList/adidasshirt3.webp";

const ProductList = () => {
  const data = [
    {
      img: Prd1,
      title: "Nike Air Force",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd2,
      title: "Nike Air Force",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd3,
      title: "Nike Air Force",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd4,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd5,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd6,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd7,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd8,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd9,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd10,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd11,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd12,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Prd13,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
  ];

  return (
    <div className="productList">
      <Header headerClassList={"productlist"} />
      <div className="container">
        <section className="productList-container">
          {data.map((e, i) => {
            return (
              <Link to="/productItem">
                <ProductItem
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                  price={e.price}
                  key={i}
                />
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

const ProductItem = ({ img, title, desc, price }) => {
  return (
    <div className="productList-container-item">
      <div
        class="productList-container-item-top"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div class="productList-container-item-bottom">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price} €</span>
      </div>
    </div>
  );
};

export default ProductList;
