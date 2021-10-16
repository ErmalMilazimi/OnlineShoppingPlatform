import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import Header from "../header/header";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { filter } = useParams();

  useEffect(async () => {
    const res = await axios.get(`/products/${filter ? filter : ""}`);
    console.log("res", res.data);
    setProducts(res.data);
  }, []);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = async () => {
    const { data } = await axios.get(`/products/${search}`);
    setProducts(data);
  };

  return (
    <div className="productList">
      <Header headerClassList={"productlist"} />
      <div className="container">
        <div className="productList-container-searchBar">
          <input className="productList-container-searchBar-inputTxt" type="text" id="search" name="search" onChange={(e) => onSearch(e)} placeholder="Search products.." />
          <button className="productList-container-searchBar-btn" onClick={() => filteredProducts()}>
            Search
          </button>
        </div>
        <section className="productList-container">
          {products.length != 0
            ? products.map((product, i) => {
                return (
                  <Link to={`/productItem/${product.id}`} className="productList-container-item">
                    <ProductItem img={product.imagePath} title={product.name} price={product.price} key={i} />
                  </Link>
                );
              })
            : "No items."}
        </section>
      </div>
    </div>
  );
};

const ProductItem = ({ img, title, price }) => {
  return (
    <>
      <div class="productList-container-item-top">
        <img src={`/Images/${img}`}></img>
      </div>
      <div class="productList-container-item-bottom">
        <h3>{title}</h3>
        <span>{price} €</span>
      </div>
    </>
  );
};

export default ProductList;
