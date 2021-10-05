import React, { useState, useEffect } from "react";
import "./ProductPage.scss";
import Product1 from "../../assets/img/product1.webp";
import Product2 from "../../assets/img/product2.webp";
import Product3 from "../../assets/img/product3.webp";
import Product4 from "../../assets/img/product4.webp";
import Product5 from "../../assets/img/product5.webp";
import Header from "../header/header";
import axios from "axios";
import { useParams } from "react-router";

const ProductPage = () => {
  const [bannerBg, setBannerBg] = useState(Product1);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const res = await axios.get(`/products/${id}`);
    setProduct(res.data);
  }, [])

  return (
    <div>
    <Header headerClassList={"productpage"} />
    <div className="container">
      <div className="product-page">
        <div className="product-page-slider">
          <div className="product-page-slider-banner">
            <img height="500px" src={`/Images/${product.imagePath}`}></img>
          </div>
          {/* <div className="product-page-slider-imgs">
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
          </div> */}
        </div>
        <div className="product-page-details">
          <h3 className="product-page-details-title">{product.name}</h3>
          <p className="product-page-details-desc">{product.description}</p>
          <p className="product-page-details-price">Qmimi: {product.price}€</p>
          <div class="star">
            {Array(product.rating).fill(<i class="fas fa-star"></i>)}
          </div>
        </div>
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
