import React from "react";
import axios from "axios";

import Form from "../Form/Form";

import Utils from "../../Utils";

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
    console.log(password);

    axios
      .post(" http://localhost:3001/createUser", {
        name: data["Nombre Completo"],
        phone: data["Telefono"],
        userType: 2,
        sellerID: null,
        account: data["CLABE interbancaria"],
        acceptedTerms: 0,
        password: password,
        mail: data["Correo"],
      })
      .then((response) => {
        console.log(response.data);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form config={config} onButtonClick={onAddSeller} />
    </div>
  );
};

export default addSeller;
