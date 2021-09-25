import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import Header from "../header/header";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await axios.get('/products');
    console.log('res', res.data);
    setProducts(res.data);
  }, [])

  return (
    <div className="productList">
      <Header headerClassList={"productlist"} />
      <div className="container">
        <section className="productList-container">
          {products.map((product, i) => {
            return (
              <Link to={`/productItem/${product.id}`}>
                <ProductItem
                  img={product.imagePath}
                  title={product.name}
                  desc={product.description}
                  price={product.price}
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
      <div class="productList-container-item-top">
        <img width="300px" src={`/Images/${img}`}></img>
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
