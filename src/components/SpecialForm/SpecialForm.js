import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../../UI/Button/Button";
import Input from "../Input/Input";
import * as actionTypes from "../../store/actions";
import * as messageTypes from "../../messageTypes";

import Validator from "../../Validator";

import "./SpecialForm.css";

const SpecialForm = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState("");

  const [validClasses, setValidClasses] = useState({
    name: true,
    phone: true,
    mail: true,
    amount: true,
    date: true,
    hour: true,
    summary: true,
  });

  const addAppointmentHandler = (event) => {
    event.preventDefault();

    /*if (!checkValidation()) {
      return;
    }*/

    console.log(hour);

    const formData = {
      date: date,
      hour: hour ? hour + ":00" : "",
      summary: summary,
      notes: notes,
      patientName: name,
      patientPhone: phone,
      patientMail: mail,
      doctorID: props.userID,
      cost: cost,
    };

    axios
      .post(
        "http://" + messageTypes.CURRENT_ROUTE + "/createAppointment",
        formData,
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      )
      .then((result) => {
        props.setMessage(
          "Cita añadida con Éxito",
          messageTypes.MESSAGE_TYPE_SUCCESS
        );
      })
      .catch((err) => {
        console.log(err.response.data);
        props.setMessage(err.response.data, messageTypes.MESSAGE_TYPE_ERROR);
      });
  };

  const checkValidation = () => {
    let validated = true;

    setValidClasses({
      name: true,
      phone: true,
      mail: true,
      amount: true,
      date: true,
      hour: true,
      summary: true,
    });

    if (!Validator.isStringValid(name, 10)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          name: false,
        };
      });
      validated = false;
    }
    if (!Validator.isMailValid(mail)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          mail: false,
        };
      });

      validated = false;
    }

    if (!Validator.isPhoneValid(phone, 10)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          phone: false,
        };
      });
      validated = false;
    }

    if (!Validator.isIntAmountValid(cost)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          amount: false,
        };
      });
      validated = false;
    }

    if (!Validator.isDateValid(date, true)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          date: false,
        };
      });
      validated = false;
    }

    if (!Validator.isHourValid(hour)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          hour: false,
        };
      });
      validated = false;
    }

    if (!Validator.isStringValid(summary, 1)) {
      setValidClasses((prevState) => {
        return {
          ...prevState,
          summary: false,
        };
      });
      validated = false;
    }

    return validated;
  };

  return (
    <div className="specialFormDiv">
      <h1 className="specialFormTitle">Tu Nueva Consulta</h1>
      <div>
        <form onSubmit={addAppointmentHandler}>
          <div className="specialFormContent">
            <div className="specialFormColumns">
              <div className="specialFormColumn">
                <h2 className="specialFormTitle">Datos del Paciente</h2>
                <Input
                  type="text"
                  placeholder="Nombre Completo"
                  valid={+validClasses.name}
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <Input
                  type="text"
                  placeholder="Correo Electrónico"
                  valid={+validClasses.mail}
                  value={mail}
                  onChange={(event) => {
                    setMail(event.target.value);
                  }}
                />
                <Input
                  type="text"
                  placeholder="Teléfono"
                  valid={+validClasses.phone}
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
              <div className="specialFormRectangle"></div>
              <div className="specialFormColumn">
                <h2 className="specialFormTitle">Datos de la Cita</h2>
                <div className="specialFormDateTime">
                  <Input
                    type="date"
                    className="specialFormInputDateTime"
                    value={date}
                    valid={+validClasses.date}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                  />
                  <Input
                    type="time"
                    className="specialFormInputDateTime"
                    value={hour}
                    valid={+validClasses.hour}
                    onChange={(event) => {
                      setHour(event.target.value);
                    }}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Costo Consulta"
                  valid={+validClasses.amount}
                  value={cost || ""}
                  onChange={(event) => {
                    setCost(event.target.value);
                  }}
                />
                <Input
                  type="text"
                  placeholder="Asunto Consulta"
                  valid={+validClasses.summary}
                  value={summary}
                  onChange={(event) => {
                    setSummary(event.target.value);
                  }}
                />
                <Input
                  inputtype="textarea"
                  className="specialFormTextarea"
                  rows="6"
                  maxLength="200"
                  placeholder="Notas"
                  value={notes}
                  onChange={(event) => {
                    setNotes(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <Button className="specialFormButton" type="submit">
                Anadir Cita
              </Button>
            </div>
          </div>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialForm);
