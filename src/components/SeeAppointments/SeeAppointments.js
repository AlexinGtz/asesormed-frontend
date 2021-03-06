import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Appointment from "../Appointment/Appointment";
import Modal from "../../UI/Modal/Modal";
import ModalAppointment from "../ModalAppointment/ModalAppointment";
import * as messageTypes from "../../messageTypes";
import * as actionTypes from "../../store/actions";

import "./SeeAppointments.css";
import axios from "axios";

const SeeAppointments = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.setLoading(true);
    axios
      .get(
        "http://" +
          messageTypes.CURRENT_ROUTE +
          "/getDoctorAppointments/" +
          props.userID,
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      )
      .then((response) => {
        props.setLoading(false);
        setAppointments(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onAppointmentClick = (app) => {
    setCurrentAppointment(app);
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        closeModal={() => {
          setCurrentAppointment({});
          setShowModal(false);
        }}
      >
        <ModalAppointment appointment={currentAppointment} />
      </Modal>
      <div className="formDiv">
        <h1 className="formTitle">Tus Consultas</h1>
        <div>
          <div className="seeAppointmentsContent">
            {appointments.map((appointment) => {
              return (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  onClick={onAppointmentClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
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
    setLoading: (isLoading) => {
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: { loading: isLoading },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeeAppointments);
