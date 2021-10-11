import React from "react";
import "./addProduct.scss";
import Nav from "../nav/nav";
import Img from "../../assets/img/logoTxt.svg";

export const AddProductComponent = () => {
  return (
    <div className="main-container">
      <div className="blur-background"></div>
      <Nav />
      <div class="form-container">
        <div class="form-container-up">
          <img src={Img} alt="form img" />
        </div>
        <form class="add-form">
          <label for="title">Shkruani emrin e produktit:</label>
          <input type="text" name="title" id="title" />
          <label for="desc">Pershkruani produktin:</label>
          <input type="text" name="desc" id="desc" />
          <label for="price">Shkruani qmimin e produktit:</label>
          <input type="text" name="price" id="price" />
          <label for="imgs">Ngarkoni fotografi te produktit:</label>
          <input type="file" name="imgs" id="imgs" />
          <input type="submit" name="add" value="ADD" />
        </form>
      </div>
    </div>
  );
};
