import React from "react";
import Header from "../components/header/header";
import ProductPage from "../components/productpage/ProductPage";

const ProductDetails = () => {
  return (
    <div>
      <Header headerClassList={"productpage"} />
      <ProductPage />
    </div>
  );
};

export default ProductDetails;
