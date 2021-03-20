import React from "react";

import "./ModalAppointment.css";

const ModalAppointment = (props) => {
  console.log(props.appointment);
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
            <p>
              {props.appointment.patientPhone
                ? props.appointment.patientPhone.substr(0, 2) +
                  "-" +
                  props.appointment.patientPhone.substr(2, 4) +
                  "-" +
                  props.appointment.patientPhone.substr(6, 4)
                : ""}
            </p>
            <p>{props.appointment.patientMail}</p>
          </div>
          <div className="modalAppointmentColumn">
            <p>
              {props.appointment.date
                ? props.appointment.date.split("T")[0]
                : ""}
            </p>
            <p>
              {props.appointment.hour
                ? props.appointment.hour.substring(0, 5)
                : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="modalAppointmentDiv">
        <h3 className="modalAppointmentTitle">Notas</h3>
        <p className="modalAppointmentNotes">{props.appointment.notes}</p>
      </div>
      <div>
        <h2 className="modalAppointmentTitle modalAppointmentPaid">Pagada?</h2>
        <input
          type="checkbox"
          className="modalAppointmentCheckbox disable"
          checked={props.appointment.paid /*? true : false*/}
        />
      </div>
    </div>
  );
};

export default ModalAppointment;
