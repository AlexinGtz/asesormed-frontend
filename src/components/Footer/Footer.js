import React from "react";

import "./Footer.css";
import correo from "../../assets/images/Correo.png";
import tel from "../../assets/images/Telefono.png";

const footer = (props) => {
  return (
    <div className="Footer">
      <p className="creado">
        Desarrollada por{" "}
        <a
          href="https://www.linkedin.com/in/jalexg/"
          target="_blank"
          className="contactAnchor"
        >
          Alejandro Gutierrez
        </a>
      </p>
      <div className="contacto">
        <div className="contactInfo">
          <div>
            <span className="contactText">Contacto:</span>
          </div>
          <div>
            <img src={correo} className="contactImage" />
            <span className="contactText">
              consultaxpress.soporte@gmail.com
            </span>
          </div>
          <div>
            <img src={tel} className="contactImage" />
            <span className="contactText">3312125656</span>
          </div>
        </div>
      </div>
      <p className="empty"></p>
    </div>
  );
};

export default footer;
