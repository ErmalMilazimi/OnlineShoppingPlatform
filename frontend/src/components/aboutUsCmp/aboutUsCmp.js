import React from "react";
import "./aboutUsCmp.scss";
import OnlineShopping from "../../assets/img/online-shopping.webp";

function aboutUsCmp() {
  return (
    <div className="container">
      <section className="aboutUsCmp">
        <h3>Kush jemi ne dhe qfare ofrojme ?</h3>
        <section className="aboutUsCmp-txt">
          <p>
            Platforma me e madhe per shitjen e produkteve online ne rajon. Tek
            ne mund te gjeni mbi <span>10,000</span> produkte nga brendet me te
            njohura ne bote.
            <br />
            Me mundesi pagese me kartele ose para ne dore.
          </p>
          <img src={OnlineShopping} alt="online shopping" />
        </section>
      </section>
    </div>
  );
}

export default aboutUsCmp;
