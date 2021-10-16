import React, { useState, useEffect } from "react";
import "./ProductPage.scss";
import Header from "../header/header";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Img1 from "../../assets/img/product1.webp";
import Img2 from "../../assets/img/product2.webp";
import Img3 from "../../assets/img/product3.webp";
import Img4 from "../../assets/img/product4.webp";

const ProductPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  let history = useHistory();

  useEffect(async () => {
    const res = await axios.get(`/products/${id}`);
    setProduct(res.data);
  }, []);

  const deleteProduct = async (id) => {
    const { data } = await axios.delete(`/products/${id}`);
    console.log(data);
    history.push("/Items");
  };
  // for testing
  const relatedArr = [
    {
      img: Img1,
      title: "Nike1",
    },
    {
      img: Img2,
      title: "Nike2",
    },
    {
      img: Img3,
      title: "Nike3",
    },
    {
      img: Img4,
      title: "Nike4",
    },
  ];
  return (
    <div>
      <Header headerClassList={"productpage"} />
      <div className="container">
        <div className="product-page">
          <div className="product-page-img" style={{ backgroundImage: `url(${`/Images/${product.imagePath}`})` }}></div>
          <div className="product-page-details">
            <h3 className="product-page-details-title">{product.name}</h3>
            <div className="star">{Array(product.rating).fill(<i className="fas fa-star"></i>)}</div>
            <hr />
            <p className="product-page-details-desc">{product.description}</p>
            <hr />
            <p className="product-page-details-price">Qmimi: {product.price}€</p>
          </div>
        </div>
        <h2>Produkte te ngjashme</h2>
        <div className="related-products-container">
          {relatedArr.map((e, i) => {
            return (
              <Link to="/" className="related-products-container-item">
                <RelatedProducts img={e.img} title={e.title} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const RelatedProducts = (props) => {
  return (
    <>
      <div className="related-products-container-item-img" style={{ backgroundImage: `url(${`${props.img}`})` }}></div>
      <h3 className="related-products-container-item-title">{props.title}</h3>
    </>
  );
};
export default ProductPage;
