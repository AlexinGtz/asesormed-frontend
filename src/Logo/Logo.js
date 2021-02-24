import React from "react";

import companyLogo from "../assets/images/companyLogo.jpeg";
import "./Logo.css";

const logo = (props) => {
  return (
    <div className="Logo">
      <img src={companyLogo} alt={props.altText}></img>
    </div>
  );
};

export default logo;
