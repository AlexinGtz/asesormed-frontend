import React from "react";

import "./Footer.css";
import image from "../../assets/images/companyLogo2.png";

const footer = (props) => {
  return (
    <div className="Footer">
      <span className="creado">
        Desarrollada por{" "}
        <a
          href="https://www.linkedin.com/in/jalexg/"
          target="_blank"
          className="contactAnchor"
        >
          Alejandro Gutierrez
        </a>
      </span>
      <div className="contacto">
        <div className="contactInfo">
          <div>
            <span className="contactText">Contacto:</span>
          </div>
          <div>
            <img src={image} className="contactImage" />
            <span className="contactText">
              consultaxpress.soporte@gmail.com
            </span>
          </div>
          <div>
            <img src={image} className="contactImage" />
            <span className="contactText">3312125656</span>
          </div>
        </div>
      </div>
      <p className="empty"></p>
    </div>
  );
};

export default footer;
