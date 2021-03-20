import React from "react";

import "./Menu.css";

const menu = (props) => {
  return (
    <div className="Menu" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default menu;
