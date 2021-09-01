import React from "react";
import "./footer.scss";
import Logo from "../../assets/img/logoTxt.png";
import Nike from "../../assets/img/nike_logo.webp";
import Adidas from "../../assets/img/adidas_logo.webp";
import Ltb from "../../assets/img/ltb_logo.webp";
import PalmAngels from "../../assets/img/palmangels_logo.webp";
import Company1 from "../../assets/img/otherC1.webp";
import Company2 from "../../assets/img/otherC2.webp";
import Company3 from "../../assets/img/otherC3.webp";
import Company4 from "../../assets/img/otherC4.webp";
import Company5 from "../../assets/img/otherC5.webp";
import Company6 from "../../assets/img/otherC6.webp";
import Company7 from "../../assets/img/otherC7.webp";
import Company8 from "../../assets/img/otherC8.webp";

function footer() {
  return (
    <section className="footer">
      <div className="container">
        <section className="footer-up">
          <img src={Logo} alt="logo" />
          <section className="footer-up-txt">
            <p>60000 Gjilan, Kosovë</p>
            <i class="fas fa-map-marked-alt"></i>
          </section>
        </section>
        <hr />
        <section className="footer-middle">
          <section className="footer-middle-left">
            <section className="footer-middle-left-companies">
              <div style={{ backgroundImage: `url(${Nike})` }}></div>
              <div style={{ backgroundImage: `url(${Adidas})` }}></div>
              <div style={{ backgroundImage: `url(${Ltb})` }}></div>
              <div style={{ backgroundImage: `url(${PalmAngels})` }}></div>
              <div style={{ backgroundImage: `url(${Company1})` }}></div>
              <div style={{ backgroundImage: `url(${Company2})` }}></div>
              <div style={{ backgroundImage: `url(${Company3})` }}></div>
              <div style={{ backgroundImage: `url(${Company4})` }}></div>
              <div style={{ backgroundImage: `url(${Company5})` }}></div>
              <div style={{ backgroundImage: `url(${Company6})` }}></div>
              <div style={{ backgroundImage: `url(${Company7})` }}></div>
              <div style={{ backgroundImage: `url(${Company8})` }}></div>
            </section>
          </section>
          <section className="footer-middle-right">
            <section className="footer-middle-right-header">
              <h3>
                Per cdo gje na kontaktoni duke klikuar ne njeren nga ikonat e
                treguara me poshte.
              </h3>
              <p>
                Orari i punes
                <br />
                <span>E hene - E premte</span> nga ora
                <span> 08:00 - 17:00</span>
              </p>
            </section>
            <section className="footer-middle-right-icons">
              <a href="#fb">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#ig">
                <i class="fab fa-instagram-square"></i>
              </a>
              <a href="#li">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:test@test.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="tel:38312345678">
                <i class="fas fa-phone-square"></i>
              </a>
            </section>
          </section>
        </section>
        <hr />
        <section className="footer-down">
          <p>&copy; 2021 Kosova Shopping Platform</p>
        </section>
      </div>
    </section>
  );
}

export default footer;
