import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./homeProduct.scss";
import axios from "axios";

const HomeProduct = () => {
  const [bannerBg, setBannerBg] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/products");
    setProducts(res.data ? res.data.splice(1, 5) : []);
    setBannerBg(res.data[0]);
  }, []);

  return (
    <div className="homeProduct">
      <h3>Disa nga produktet</h3>
      <Link to={`/productItem/${bannerBg?.id}`} className="homeProduct-banner" style={{ backgroundImage: `url(/Images/${bannerBg?.imagePath})` }}></Link>
      <div className="homeProduct-products">
        {products.map((prod) => {
          return <div className="homeProduct-products-img" onClick={() => setBannerBg(prod)} style={{ backgroundImage: `url(/Images/${prod.imagePath})` }}></div>;
        })}
      </div>
    </div>
  );
};

export default HomeProduct;
