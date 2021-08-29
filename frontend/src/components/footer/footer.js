import React from "react";
import "./footer.scss";
import Logo from "../../assets/img/logoTxt.png";

function footer() {
  return (
    <section className="footer">
      <div className="container">
        <section className="footer-up">
          <img src={Logo} alt="logo" />
          <section className="footer-up-txt">
            <i class="fas fa-map-marked-alt"></i>
            <section>
              <h4>Kosova Shopping Platform</h4>
              <p>60000 Gjilan, Kosovë</p>
            </section>
          </section>
        </section>
        <hr />
        <section className="footer-middle">
          <section className="footer-middle-left"></section>
          <section className="footer-middle-right">
            <a href="#fb">
              Facebook
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#ig">
              Instagram
              <i class="fab fa-instagram-square"></i>
            </a>
            <a href="#li">
              Linkedin
              <i class="fab fa-linkedin"></i>
            </a>
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
