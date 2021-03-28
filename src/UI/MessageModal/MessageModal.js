import React from "react";
import { connect } from "react-redux";

import "./MessageModal.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const modal = (props) => {
  let modalClass = "messageModal";
  if (props.messageType === 0) {
    modalClass = "messageModal modalError";
  } else if (props.messageType === 1) {
    modalClass = "messageModal modalSuccess";
  }

  return (
    <React.Fragment>
      <Backdrop show={props.showMessageModal} closed={props.closeModal} />
      <div
        className={modalClass}
        style={{
          transform: props.showMessageModal
            ? "translateX(0)"
            : "translateX(100vw)",
          opacity: props.showMessageModal ? "1" : "0",
        }}
      >
        <h2>{props.message}</h2>
        <Button onClick={props.closeModal} className="messageModalButton">
          Ok
        </Button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
    showMessageModal: state.showMessageModal,
    messageType: state.messageType,
  };
};

export default connect(mapStateToProps, null)(modal);
