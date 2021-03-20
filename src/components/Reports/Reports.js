import axios from "axios";
import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Report from "../Report/Report";
import Input from "../Input/Input";

import "./Reports.css";

//TODO: Checar que pedo con las fechas

const Reports = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportsArray, setReportsArray] = useState([]);
  //TODO: Validate dates

  const onGenerateReports = (event) => {
    event.preventDefault();
    console.log(startDate);
    console.log(endDate);

    axios
      .post("http://localhost:3001/getReport", {
        startDate: startDate,
        endDate: endDate,
      })
      .then((result) => {
        console.log(result.data);
        setReportsArray(result.data);
      })
      .catch((err) => console.log(err));
  };

  let reports = null;
  if (reportsArray) {
    reports = reportsArray.map((report) => (
      <Report
        key={report.id}
        name={report.nombre.split(" ")[0]}
        account={report.cuenta}
        amount={report.total}
      />
    ));
  }
  //TODO: Arreglar el bot'on centrado
  return (
    <div>
      <div className="reportsContent">
        <form onSubmit={(event) => onGenerateReports(event)}>
          <div className="reportsDates">
            <Input
              type="date"
              className="reportInput"
              value={startDate}
              valid={+true}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
            />
            <Input
              type="date"
              className="reportInput"
              value={endDate}
              valid={+true}
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
            />
          </div>
          <div className="reportsButton">
            <Button className="reportsButton" type="submit">
              Generar Reporte
            </Button>
          </div>
        </form>
        <div className="reportsReports">{reports}</div>
      </div>
    </div>
  );
};

export default Reports;
