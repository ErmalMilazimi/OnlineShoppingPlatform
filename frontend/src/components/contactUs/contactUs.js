import React from "react";
import "./contactUs.scss";
import Nav from "../nav/nav";
import Img from "../../assets/img/logoTxt.svg";

const contactUs = () => {
  return (
    <div className="main-container">
      <div className="blur-background"></div>
      <Nav />
      <div className="content-container">
        <div class="contact-form-container-up">
          <img src={Img} alt="form img" />
        </div>
        <div class="contact-form-container-down">
          <div class="contact-form-container left">
            <form class="add-form">
              <label for="name">Username:</label>
              <input className="add-form-inputs" type="text" name="name" id="name" />
              <label for="email">Email:</label>
              <input className="add-form-inputs" type="email" name="email" id="email" />
              <label for="desc">Comment:</label>
              <textarea className="add-form-inputs" type="text" name="comment" id="desc"></textarea>
              <input type="submit" name="add" value="Save" />
            </form>
          </div>
          <div class="socialMedia-container right">
            <h3 class="socialMedia-container-title">Telefono në :</h3>
            <hr />
            <p>(+383) 012 345 678</p>
            <p>(+383) 013 355 678</p>
            <p>(+383) 014 345 678</p>
            <h3 class="socialMedia-container-title second-title">Gjindemi në :</h3>
            <hr />
            <p>60000 Gjilan, Kosove</p>
            <p>10000 Prishtine, Kosove</p>
            <h3 class="socialMedia-container-title second-title">Orari i punes</h3>
            <hr />
            <p>E Hene - E premte nga 8:00 deri 17:00</p>
            <p>E shtune & e Diele jane dite pushimi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
