import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Form from "../Form/Form";
import * as actionTypes from "../../store/actions";
import * as messageTypes from "../../messageTypes";

import image from "../../assets/images/companyLogo1.png";

import "./Profile.css";
import axios from "axios";

const formConfig = {
  title1: "",
  title2: "Edita Tus Datos",
  button: "Actualiza tus Datos",
  inputs: [
    { type: "text", placeholder: "Nombre" },
    { type: "text", placeholder: "Correo Electrónico" },
    { type: "text", placeholder: "Teléfono" },
    { type: "password", placeholder: "Contraseña" },
    { type: "password", placeholder: "Confirmar Contraseña" },
  ],
};

const Profile = (props) => {
  const [profileData, setProfileData] = useState({
    name: "",
    mail: "",
    phone: "",
  });

  const [showModal, setShowModal] = useState(false);

  const getProfileHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    axios
      .get(
        "http://" + messageTypes.CURRENT_ROUTE + "/getUser/" + props.userID,
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      )
      .then((response) => {
        setProfileData({
          name: response.data.name,
          mail: response.data.mail,
          phone: response.data.phone,
        });
      })
      .catch((err) => {
        props.setMessage(
          "Error al obtener los datos de tu perfil",
          messageTypes.MESSAGE_TYPE_ERROR
        );
      });
  }, []);

  const updateUser = (userData) => {
    if (userData["Contraseña"] !== userData["Confirmar Contraseña"]) {
      props.setMessage(
        "Las contraseñas no coinciden",
        messageTypes.MESSAGE_TYPE_ERROR
      );
      return;
    }

    const data = {
      id: props.userID,
      name: userData["Nombre"] || null,
      mail: userData["Correo Electrónico"] || null,
      phone: userData["Teléfono"] || null,
      password: userData["Contraseña"] || null,
    };

    axios
      .post("http://" + messageTypes.CURRENT_ROUTE + "/updateUser/", data, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      })
      .then((response) => {
        props.setMessage(
          "Perfil actualizado correctamente",
          messageTypes.MESSAGE_TYPE_SUCCESS
        );
      })
      .catch((err) => {
        props.setMessage(
          "No se pudo actualizar el perfil correctamente, intente más tarde",
          messageTypes.MESSAGE_TYPE_ERROR
        );
      });

    setShowModal(false);
  };

  return (
    <div className="profileDiv">
      <Modal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        id="profileModal"
      >
        <Form
          config={formConfig}
          formDivClassName="modalFormDiv"
          formContentClassName="modalFormContent"
          formClassName="modalForm"
          onButtonClick={(data) => {
            updateUser(data);
          }}
        />
        <p>*Los datos que no sean llenados, no serán actualizados</p>
      </Modal>
      <h1 className="profileTitle">Tus Datos</h1>
      <div>
        <div className="profileContent">
          <h2 className="profileTitle">{profileData.name}</h2>
          <div className="profileData">
            <img src={image} className="profileImage" />
            <h3 className="profileText">{profileData.mail}</h3>
          </div>
          <div className="profileData">
            <img src={image} className="profileImage" />
            <h3 className="profileText">
              {profileData.phone.substr(0, 2) +
                "-" +
                profileData.phone.substr(2, 4) +
                "-" +
                profileData.phone.substr(6, 4)}
            </h3>
          </div>
          <Button className="profileButton" onClick={getProfileHandler}>
            Editar Perfil
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userID: state.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
