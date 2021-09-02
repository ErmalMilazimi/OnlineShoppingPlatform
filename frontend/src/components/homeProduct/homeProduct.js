import React, { useState } from "react";
import "./homeProduct.scss";
import Product1 from "../../assets/img/product1.webp";
import Product2 from "../../assets/img/product2.webp";
import Product3 from "../../assets/img/product3.webp";
import Product4 from "../../assets/img/product4.webp";
import Product5 from "../../assets/img/product5.webp";
const HomeProduct = () => {
  const [bannerBg, setBannerBg] = useState(Product1);

  //   const changeBanner = (img) => {
  //     console.log("asdasd");
  //     setBannerBg(img);
  //   };

  return (
    <div className="homeProduct">
      <h3>Disa nga produktet</h3>
      <a
        href="#"
        className="homeProduct-banner"
        style={{ backgroundImage: `url(${bannerBg})` }}
      ></a>
      <div className="homeProduct-products">
        <div
          className="homeProduct-products-img"
          style={{ backgroundImage: `url(${Product1})` }}
          onClick={() => setBannerBg(Product1)}
        ></div>
        <div
          className="homeProduct-products-img"
          style={{ backgroundImage: `url(${Product2})` }}
          onClick={() => setBannerBg(Product2)}
        ></div>
        <div
          className="homeProduct-products-img"
          style={{ backgroundImage: `url(${Product3})` }}
          onClick={() => setBannerBg(Product3)}
        ></div>
        <div
          className="homeProduct-products-img"
          style={{ backgroundImage: `url(${Product4})` }}
          onClick={() => setBannerBg(Product4)}
        ></div>
        <div
          class="homeProduct-products-img"
          style={{ backgroundImage: `url(${Product5})` }}
          onClick={() => setBannerBg(Product5)}
        ></div>
      </div>
    </div>
  );
};

export default HomeProduct;
