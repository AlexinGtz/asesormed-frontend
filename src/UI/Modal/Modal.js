import React from "react";

import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} closed={props.closeModal} />
      <div
        className="Modal"
        id={props.id}
        style={{
          transform: props.show ? "translateX(0)" : "translateX(100vw)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default modal;
