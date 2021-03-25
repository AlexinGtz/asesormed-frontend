import React from "react";

import "./MessageModal.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const modal = (props) => {
  let modalClass = "Modal";
  if (props.messageType === 0) {
    modalClass = "Modal modalError";
  } else if (props.messageType === 1) {
    modalClass = "Modal modalSuccess";
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} closed={props.closeModal} />
      <div
        className={modalClass}
        style={{
          transform: props.show ? "translateX(0)" : "translateX(100vw)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <p>{props.children}</p>
        <Button onClick={props.closeModal} className="messageModalButton">
          Ok
        </Button>
      </div>
    </React.Fragment>
  );
};

export default modal;
