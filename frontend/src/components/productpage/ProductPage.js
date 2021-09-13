import React, { useState } from "react";
import "./ProductPage.scss";
import Product1 from "../../assets/img/product1.webp";
import Product2 from "../../assets/img/product2.webp";
import Product3 from "../../assets/img/product3.webp";
import Product4 from "../../assets/img/product4.webp";
import Product5 from "../../assets/img/product5.webp";
const ProductPage = (props) => {
  const [bannerBg, setBannerBg] = useState(Product1);
  // const item = {
  //   title: props.title,
  //   desc: props.desc,
  //   price: props.price,
  // };
  const item = {
    // img: ["../../assets/img/product1.webp", "../../assets/img/product2.webp"],
    title: "Nike Prod",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis tempora quidem, facilis perferendis totam alias, optio non corrupti aliquid natus culpa consectetur amet deleniti fuga.",
    price: "149.99",
  };
  return (
    <div className="container">
      <div className="product-page">
        <div className="product-page-slider">
          <div
            className="product-page-slider-banner"
            style={{ backgroundImage: `url(${bannerBg})` }}
          ></div>
          <div className="product-page-slider-imgs">
            <div
              className="product-page-slider-imgs-img"
              style={{ backgroundImage: `url(${Product1})` }}
              onClick={() => setBannerBg(Product1)}
            ></div>
            <div
              className="product-page-slider-imgs-img"
              style={{ backgroundImage: `url(${Product2})` }}
              onClick={() => setBannerBg(Product2)}
            ></div>
            <div
              className="product-page-slider-imgs-img"
              style={{ backgroundImage: `url(${Product3})` }}
              onClick={() => setBannerBg(Product3)}
            ></div>
            <div
              className="product-page-slider-imgs-img"
              style={{ backgroundImage: `url(${Product4})` }}
              onClick={() => setBannerBg(Product4)}
            ></div>
            <div
              class="product-page-slider-imgs-img"
              style={{ backgroundImage: `url(${Product5})` }}
              onClick={() => setBannerBg(Product5)}
            ></div>
          </div>
        </div>
        <div className="product-page-details">
          <h3 className="product-page-details-title">{item.title}</h3>
          <p className="product-page-details-desc">{item.desc}</p>
          <p className="product-page-details-price">Qmimi: {item.price}€</p>
        </div>
      </div>
    </div>
  );
};

// const SliderImg = (props) => {
//   return (
//     <div
//       className="product-page-slider-imgs-img"
//       style={{ backgroundImage: `url(${props.img})` }}
//       onClick={() => props.func}
//     ></div>
//   );
// };

export default ProductPage;
