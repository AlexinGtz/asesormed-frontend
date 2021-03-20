import React from "react";

import "./Input.css";

const Input = (props) => {
  let inputElement = null;
  const className = ["Input"];

  if (props.className) {
    props.className.split(" ").forEach((cls) => {
      className.push(cls);
    });
  }

  if (!props.valid) {
    className.push("InvalidInput");
  }

  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} className={className.join(" ")} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} className={className.join(" ")} />;
      break;
    case "select":
      inputElement = <select {...props} className={className.join(" ")} />;
    default:
      inputElement = <input {...props} className={className.join(" ")} />;
      break;
  }

  return <React.Fragment>{inputElement}</React.Fragment>;
};

export default Input;
