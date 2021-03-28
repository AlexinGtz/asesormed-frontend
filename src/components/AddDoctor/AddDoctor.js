import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Form from "../Form/Form";

import Utils from "../../Utils";
import * as actionTypes from "../../store/actions";
import * as messageTypes from "../../messageTypes";

import "./AddDoctor.css";

const config = {
  title1: "Nuevo Doctor",
  title2: "Datos del Doctor",
  button: "Añadir Doctor",
  inputs: [
    { type: "text", placeholder: "Nombre Completo" },
    { type: "text", placeholder: "Teléfono" },
    { type: "text", placeholder: "Correo Electrónico" },
    { type: "text", placeholder: "CLABE interbancaria" },
  ],
};

const AddDoctor = (props) => {
  const onAddDoctor = (data) => {
    const password = Utils.generatePassword(15);
    console.log("CREATING USER");
    axios
      .post(
        "http://" + messageTypes.CURRENT_ROUTE + "/createUser",
        {
          name: data["Nombre Completo"],
          phone: data["Teléfono"],
          userType: 1,
          sellerID: props.sellerID,
          account: data["CLABE interbancaria"],
          acceptedTerms: 0,
          password: password,
          mail: data["Correo Electrónico"],
        },
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      )
      .then((response) => {
        props.setMessage(
          "Doctor añadido exitosamente",
          messageTypes.MESSAGE_TYPE_SUCCESS
        );
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        props.setMessage(err.error, messageTypes.MESSAGE_TYPE_ERROR);
      });
  };
  return (
    <React.Fragment>
      <Form config={config} onButtonClick={onAddDoctor} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    sellerID: state.id,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: (message, messageType) => {
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: message, messageType: messageType },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor);
