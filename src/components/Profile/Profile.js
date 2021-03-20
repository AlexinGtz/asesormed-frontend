import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Form from "../Form/Form";

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
    //TODO: Change ID
    console.log(props.userID);
    axios
      .get("http://localhost:3001/getUser/" + props.userID)
      .then((response) => {
        setProfileData({
          name: response.data.name,
          mail: response.data.mail,
          phone: response.data.phone,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profileDiv">
      <Modal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        <Form config={formConfig} />
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
  };
};

export default connect(mapStateToProps, null)(Profile);
