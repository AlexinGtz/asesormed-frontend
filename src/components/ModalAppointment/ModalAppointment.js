import React from "react";

import "./ModalAppointment.css";
import tel from "../../assets/images/Telefono.png";
import correo from "../../assets/images/Correo.png";
import calendario from "../../assets/images/Calendario.png";
import reloj from "../../assets/images/Reloj.png";
import lapiz from "../../assets/images/Lapiz.png";

const ModalAppointment = (props) => {
  return (
    <div className="modalAppointment">
      <h1 className="modalAppointmentTitle modalAppointmentColor">
        {props.appointment.summary}
      </h1>
      <div className="modalAppointmentDiv">
        <h2 className="modalAppointmentTitle">
          {props.appointment.patientName}
        </h2>
        <div className="modalAppointmentColumns">
          <div className="modalAppointmentColumn">
            <div>
              <img src={tel} className="modalAppointmentImage" />
              <p className="modalAppointmentData">
                {props.appointment.patientPhone
                  ? props.appointment.patientPhone.substr(0, 2) +
                    "-" +
                    props.appointment.patientPhone.substr(2, 4) +
                    "-" +
                    props.appointment.patientPhone.substr(6, 4)
                  : ""}
              </p>
            </div>
            <div>
              <img src={correo} className="modalAppointmentImage" />
              <p className="modalAppointmentData">
                {props.appointment.patientMail}
              </p>
            </div>
          </div>
          <div className="modalAppointmentColumn">
            <div>
              <img src={calendario} className="modalAppointmentImage" />
              <p className="modalAppointmentData">
                {props.appointment.date
                  ? props.appointment.date.split("T")[0]
                  : ""}
              </p>
            </div>
            <div>
              <img src={reloj} className="modalAppointmentImage" />
              <p className="modalAppointmentData">
                {props.appointment.hour
                  ? props.appointment.hour.substring(0, 5)
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modalAppointmentDiv modalAppointmentCenter">
        <img src={lapiz} className="modalAppointmentImage" />
        <h3 className="modalAppointmentNotesTitle">Notas</h3>
        <p className="modalAppointmentNotes">{props.appointment.notes}</p>
      </div>
      <div className="modalAppointmentCenter">
        <h2 className="modalAppointmentTitle modalAppointmentPaid">Pagada?</h2>
        <input
          type="checkbox"
          className="modalAppointmentCheckbox disable"
          checked={props.appointment.paid}
        />
      </div>
    </div>
  );
};

export default ModalAppointment;
