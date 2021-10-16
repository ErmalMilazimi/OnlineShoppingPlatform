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
  const [relatedProds, setRelatedProds] = useState([]);
  const { id } = useParams();
  let history = useHistory();

  useEffect(async () => {
    const res = await axios.get(`/products/${id}`);
    setProduct(res.data);
    const { data } = await axios.get('/products');
    setRelatedProds(data.filter(results => results.category == res.data.category && results.id != res.data.id).splice(0, 4));
  }, [product]);

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
            <p className="product-page-details-price">Qmimi: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)}</p>
          </div>
        </div>
        <h2>Produkte te ngjashme</h2>
        <div className="related-products-container">
          {relatedProds.map(e => {
            return (
              <Link to={`/productItem/${e.id}`} className="related-products-container-item">
                <RelatedProducts img={e.imagePath} name={e.name} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const RelatedProducts = ({img, name}) => {
  return (
    <>
      <div className="related-products-container-item-img" style={{ backgroundImage: `url(${`/Images/${img}`})` }}></div>
      <h3 className="related-products-container-item-title">{name}</h3>
    </>
  );
};
export default ProductPage;
