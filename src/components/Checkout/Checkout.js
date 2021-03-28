import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Input from "../Input/Input";

import * as messageTypes from "../../messageTypes";
import "./Checkout.css";

const Checkout = (props) => {
  let { id } = useParams();

  const [appointmentData, setAppointmentData] = useState({
    summary: "",
    cost: 0,
  });

  useEffect(() => {
    axios
      .get("http://" + messageTypes.CURRENT_ROUTE + "/getAppointment/" + id)
      .then((response) => {
        setAppointmentData({
          ...appointmentData,
          summary: response.data.summary,
          cost: parseInt(response.data.cost),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="checkoutDiv">
      <div>
        <div className="checkoutContent">
          <h2 className="checkoutTitle">{appointmentData.summary}</h2>
          <h2 className="checkoutTitle checkoutAmount">
            ${appointmentData.cost}
          </h2>
          <Input
            type="text"
            className="checkoutInput"
            placeholder="Número de Tarjeta (16 dígitos)"
          />
          <div className="checkoutCardData">
            <div className="checkoutData">
              <p>Fecha de expiración</p>
              <Input
                type="month"
                placeholder="Fecha de expiración"
                className="checkoutDate"
                valid={+true}
                min="2021-01"
                max="2035-12"
              />
            </div>
            <div className="checkoutData">
              <p>CVV</p>
              <Input type="text" placeholder="CVV/CVV2" valid={+true} />
            </div>
          </div>
          <Input
            type="text"
            className="checkoutInput"
            placeholder="Nombre del Titular"
          />
          <Button className="checkoutButton">Pagar Consulta</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
