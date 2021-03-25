import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Form from "../Form/Form";
import Terms from "../Terms/Terms";
import Modal from "../../UI/Modal/Modal";

import checkTimeout from "../../store/authAction";

import "./Login.css";
import * as actionTypes from "../../store/actions";

const config = {
  title1: "Iniciar Sesión",
  title2: "Tus Datos",
  button: "Iniciar Sesión",
  inputs: [
    { type: "text", placeholder: "Correo Electrónico" },
    { type: "password", placeholder: "Contraseña" },
  ],
};

const Login = (props) => {
  const [showTerms, setShowTerms] = useState(false);
  const [queryData, setQueryData] = useState({});

  const finalLogin = (data) => {
    props.Login(data.id, data.userType, data.token);
    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );
    localStorage.setItem("token", data.token);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("userId", data.id);
    localStorage.setItem("userType", data.userType);
    props.history.push("/");
  };

  const acceptTerms = () => {
    axios
      .post("http://" + process.env.hostname + "/acceptTerms", {
        id: queryData.id,
      })
      .then((response) => {
        if (response.status !== 200) {
          console.log("Error accepting terms");
        }
        finalLogin(queryData);
      })
      .catch((err) => console.log(err));
  };

  const validateInputs = () => {
    return true;
  };

  const onLoginClick = (data) => {
    console.log(data);

    if (!validateInputs()) {
      return;
    }

    axios
      .post("http://" + process.env.hostname + "/login", {
        mail: data["Correo Electrónico"],
        password: data["Contraseña"],
      })
      .then((response) => {
        setQueryData(response.data);
        console.log(response.data);
        if (response.data.acceptedTerms === 0) {
          setShowTerms(true);
        } else {
          finalLogin(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <Modal
        show={showTerms}
        closeModal={() => {
          setShowTerms(false);
        }}
      >
        <Terms
          onClick={acceptTerms}
          onCancel={() => {
            setQueryData({});
            setShowTerms(false);
          }}
        />
      </Modal>
      <Form config={config} onButtonClick={onLoginClick} enableKeypress />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (id, userType, token) =>
      dispatch({
        type: actionTypes.LOGIN,
        payload: { id: id, token: token, userType: userType },
      }),
    //checkTimeout: dispatch(checkTimeout),
  };
};

export default connect(null, mapDispatchToProps)(Login);
