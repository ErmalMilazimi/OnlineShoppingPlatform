import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import Header from "../header/header";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState();
  const { filter } = useParams();

  useEffect(async () => {
    const res = await axios.get(`/products/${filter ? filter : ""}`);
    setProducts(res.data);
  }, []);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = async () => {
    const { data } = await axios.get(`/products/${search}`);
    setProducts(data);
  };

  useEffect(async () => {
    products &&
      setFiltered(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          })
        )
      );
  }, [products, filters]);

  console.log(filters);

  useEffect(async () => {
    if (sort === "asc") {
      setFiltered((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFiltered((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setFiltered(products);
    }
  }, [sort]);

  const handleFilters = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilterPrice = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="productList">
      <Header headerClassList={"productlist"} />
      <div className="container">
        <div className="productList-container-inputsContainer">
          <div className="productList-container-inputsContainer-inputs">
            <input className="productList-container-searchBar-inputTxt" type="text" id="search" name="search" onChange={(e) => onSearch(e)} placeholder="Search products.." />
            <button className="productList-container-searchBar-btn" onClick={() => filteredProducts()}>
              Search
            </button>
          </div>
          <div className="productList-container-inputsContainer-inputs">
            <select name="category" onChange={handleFilters}>
              <option value="">None</option>
              <option>Shoes</option>
              <option>T-Shirt</option>
              <option>Jacket</option>
            </select>
            <select name="brand" onChange={handleFilters}>
              <option value="">None</option>
              <option>ZARA</option>
              <option>Nike</option>
              <option>Adidas</option>
            </select>
            <select name="price" onChange={handleFilterPrice}>
              <option value="">None</option>
              <option value="desc">Price (High to low)</option>
              <option value="asc">Price (Low to high)</option>
            </select>
          </div>
        </div>
        <section className="productList-container">
          {filtered.length !== 0
            ? filtered.map((product, i) => {
                return (
                  <Link to={`/productItem/${product.id}`} className="productList-container-item" key={i}>
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
        <img src={`/Images/${img}`} alt=""></img>
      </div>
      <div class="productList-container-item-bottom">
        <h3>{title}</h3>
        <span>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price)}</span>
      </div>
    </>
  );
};

export default ProductList;
