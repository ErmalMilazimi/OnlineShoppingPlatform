import React from "react";
import "./ProductList.scss";
import Header from "../header/header";
// import SecondHeader from "../../assets/img/second-header.jpg";
import Nike from "../../assets/img/nike_logo.webp";

const ProductList = () => {
  const data = [
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
    {
      img: Nike,
      title: "NikeProduct",
      desc: "Best Nike shoes",
      price: "149,99",
    },
  ];

  return (
    <div className="productList">
      <Header/>
      <div className="container">
        <section className="productList-container">
          {data.map((e, i) => {
            return (
              <ProductItem
                img={e.img}
                title={e.title}
                desc={e.desc}
                price={e.price}
                key={i}
              />
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
      <div class="productList-container-item-top">
        <img src={img} alt="" />
      </div>
      <div class="productList-container-item-bottom">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price} €</span>
      </div>
    </div>
  );
};

export default ProductList;
