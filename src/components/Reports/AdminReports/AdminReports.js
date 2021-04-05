import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../../../UI/Button/Button";
import AdminReport from "../AdminReport/AdminReport";
import Input from "../../Input/Input";
import * as messageTypes from "../../../messageTypes";
import * as actionTypes from "../../../store/actions";
import "./AdminReports.css";

//TODO: Checar que pedo con las fechas

const AdminReports = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportsArray, setReportsArray] = useState([]);

  const onGenerateReports = (event) => {
    event.preventDefault();
    props.setLoading(true);
    axios
      .post(
        "http://" + messageTypes.CURRENT_ROUTE + "/getReport",
        {
          startDate: startDate,
          endDate: endDate,
        },
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      )
      .then((result) => {
        props.setLoading(false);
        setReportsArray(result.data);
      })
      .catch((err) => console.log(err));
  };

  let reports = null;
  if (reportsArray) {
    reports = reportsArray.map((report) => (
      <AdminReport
        key={report.id}
        name={report.nombre.split(" ")[0]}
        account={report.cuenta}
        amount={report.total}
      />
    ));
  }

  return (
    <div>
      <div className="adminReportsContent">
        <form onSubmit={(event) => onGenerateReports(event)}>
          <div className="adminReportsDates">
            <Input
              type="date"
              className="adminReportInput"
              value={startDate}
              valid={+true}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
            />
            <Input
              type="date"
              className="adminReportInput"
              value={endDate}
              valid={+true}
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
            />
          </div>
          <div className="adminReportsButton">
            <Button className="adminReportsButton" type="submit">
              Generar Reporte
            </Button>
          </div>
        </form>
        <div className="adminReportsReports">{reports}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminReports);
