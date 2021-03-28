import React from "react";

import "./infoSection.css";
import image1 from "../../assets/images/companyLogo1.png";

const infoSection = (props) => {
  if (!["left", "right"].includes(props.alignment)) {
    throw new Error("alignment prop is being wrongly defined");
  }

  const infoSection = `info${props.alignment}Section`;
  const infoTitle = `info${props.alignment}Title`;
  const infoParagraph = `info${props.alignment}Paragraph`;
  const infoImage = `info${props.alignment}Image`;
  const infoDiv = `info${props.alignment}Div`;

  return (
    <div className={infoSection}>
      <img src={image1} alt={props.altText} className={infoImage} />
      <div className={infoDiv}>
        <h1 className={infoTitle}>{props.title}</h1>
        <p className={infoParagraph}>{props.children}</p>
      </div>
    </div>
  );
};

export default infoSection;
