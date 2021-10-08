import React, { useState, useEffect } from "react";
import "./ProductPage.scss";
import Product1 from "../../assets/img/product1.webp";
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
  }, []);

  return (
    <div>
      <Header headerClassList={"productpage"} />
      <div className="container">
        <div className="product-page">
          <div className="product-page-slider">
            <div className="product-page-slider-banner">
              <img src={`/Images/${product.imagePath}`}></img>
            </div>
          </div>
          <div className="product-page-details">
            <h3 className="product-page-details-title">{product.name}</h3>
            <p className="product-page-details-desc">{product.description}</p>
            <p className="product-page-details-price">Qmimi: {product.price}€</p>
            <div className="star">{Array(product.rating).fill(<i className="fas fa-star"></i>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
