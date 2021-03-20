import React from "react";
import { Link } from "react-router-dom";

import companyLogo from "../assets/images/companyLogo2.png";
import "./Logo.css";

const logo = (props) => {
  return (
    <div className="Logo">
      <Link exact="true" to="/">
        <img src={companyLogo} alt={props.altText} />
      </Link>
    </div>
  );
};

export default logo;
