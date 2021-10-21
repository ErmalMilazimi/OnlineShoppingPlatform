import React from "react";
import "./AboutUsCmp3.scss";
import Logo from "../../assets/img/logo.svg";
const AboutUsCmp3 = () => {
  return (
    <div className="container">
      <div className="au-component3">
        <div>
          <h3>Kosova Shopping Platform</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, repudiandae! Incidunt quasi tempore iure harum odio minima ipsa maxime. Soluta libero nam ea inventore ut nostrum
            minus quaerat, quo totam.
          </p>
        </div>
        <img src={Logo} alt=""></img>
      </div>
    </div>
  );
};

export default AboutUsCmp3;
