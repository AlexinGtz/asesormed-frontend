import React from "react";

import "./Appointment.css";

const Appointment = (props) => {
  return (
    <div
      className="Appointment"
      onClick={() => props.onClick(props.appointment)}
    >
      <div>
        <h2 className="AppointmentSummary">{props.appointment.summary}</h2>
      </div>
      <div className="AppointmentRectangle"></div>
      <div>
        <div>
          <h3>{props.appointment.patientName}</h3>
        </div>
        <div className="AppointmentDateTime">
          <div className="AppointmentDate">
            <h4>{props.appointment.date.split("T")[0]}</h4>
          </div>
          <div className="AppointmentTime">
            <h4>{props.appointment.hour.substring(0, 5)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
