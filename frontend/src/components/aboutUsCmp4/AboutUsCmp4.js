import React from "react";
import "./AboutUsCmp4.scss";
import Img1 from "../../assets/img/otherC1.webp";
import Img2 from "../../assets/img/otherC2.webp";
import Img3 from "../../assets/img/otherC3.webp";
import Img5 from "../../assets/img/otherC5.webp";
import Img6 from "../../assets/img/otherC6.webp";
import Img7 from "../../assets/img/otherC7.webp";
import Img8 from "../../assets/img/otherC8.webp";
import Img9 from "../../assets/img/adidas_logo.webp";
import Img10 from "../../assets/img/nike_logo.webp";
import Img11 from "../../assets/img/otherC11.webp";
import Img13 from "../../assets/img/ltb_logo.webp";
import Img14 from "../../assets/img/palmangels_logo.webp";
const AboutUsCmp4 = () => {
  return (
    <div className="container">
      <div className="au-component4">
        <h3>Kompanite me te cilat bashkeveprojme</h3>
        <div className="au-component4-container">
          <div style={{ backgroundImage: `url(${`${Img9}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img10}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img13}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img14}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img1}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img2}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img3}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img5}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img6}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img7}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img8}`})` }}></div>
          <div style={{ backgroundImage: `url(${`${Img11}`})` }}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCmp4;
