import React from "react";

import "./Button.css";

const button = (props) => {
  const btnClassName = props.className
    ? ["Button", ...props.className.split(" ")].join(" ")
    : "Button";

  return (
    <button
      onClick={props.onClick}
      className={btnClassName}
      type={props.type ? props.type : "button"}
    >
      {props.children}
    </button>
  );
};

export default button;
