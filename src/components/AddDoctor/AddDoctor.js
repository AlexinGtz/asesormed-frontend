import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Form from "../Form/Form";

import Utils from "../../Utils";

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
    console.log(password);

    axios
      .post("http://" + process.env.hostname + "/createUser", {
        name: data["Nombre Completo"],
        phone: data["Teléfono"],
        userType: 1,
        sellerID: props.sellerID,
        account: data["CLABE interbancaria"],
        acceptedTerms: 0,
        password: password,
        mail: data["Correo Electrónico"],
      })
      .then((response) => {
        console.log(response.data);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
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
  };
};

export default connect(mapStateToProps, null)(AddDoctor);
