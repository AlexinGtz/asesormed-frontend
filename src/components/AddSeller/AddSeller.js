import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Form from "../Form/Form";

import Utils from "../../Utils";
import * as actionTypes from "../../store/actions";
import * as messageTypes from "../../messageTypes";

const config = {
  title1: "Nuevo Vendedor",
  title2: "Datos del Vendedor",
  button: "Añadir Vendedor",
  inputs: [
    { type: "text", placeholder: "Nombre Completo" },
    { type: "text", placeholder: "Telefono" },
    { type: "text", placeholder: "Correo" },
    { type: "text", placeholder: "CLABE interbancaria" },
  ],
};
//TODO: Validar datos
const addSeller = (props) => {
  const onAddSeller = (data) => {
    const password = Utils.generatePassword(15);
    props.setLoading(true);
    axios
      .post(
        "http://" + messageTypes.CURRENT_ROUTE + "/createUser",
        {
          name: data["Nombre Completo"],
          phone: data["Telefono"],
          userType: 2,
          sellerID: null,
          account: data["CLABE interbancaria"],
          acceptedTerms: 0,
          password: password,
          mail: data["Correo"],
        },
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      )
      .then((response) => {
        props.setLoading(false);
        props.setMessage(
          "Vendedor añadido exitosamente",
          messageTypes.MESSAGE_TYPE_SUCCESS
        );
        props.history.push("/");
      })
      .catch((err) => {
        props.setMessage(err, messageTypes.MESSAGE_TYPE_ERROR);
      });
  };

  return (
    <div>
      <Form config={config} onButtonClick={onAddSeller} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: (message, messageType) =>
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: message, messageType: messageType },
      }),
    setLoading: (isLoading) => {
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: { loading: isLoading },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addSeller);
