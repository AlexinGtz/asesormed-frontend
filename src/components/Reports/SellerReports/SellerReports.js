import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../../../UI/Button/Button";
import SellerReport from "../SellerReport/SellerReport";
import Input from "../../Input/Input";
import * as messageTypes from "../../../messageTypes";
import * as actionTypes from "../../../store/actions";
import "./SellerReports.css";

//TODO: Checar que pedo con las fechas

const SellerReports = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportsArray, setReportsArray] = useState([]);
  //TODO: Validate dates

  const onGenerateReports = (event) => {
    event.preventDefault();
    props.setLoading(true);
    axios
      .post(
        "http://" + messageTypes.CURRENT_ROUTE + "/getSellerReport",
        {
          startDate: startDate,
          endDate: endDate,
          id: props.userID,
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
      <SellerReport
        key={report.id}
        name={report.nombre.split(" ")[0]}
        amount={report.citas}
      />
    ));
  }

  return (
    <div>
      <div className="sellerReportsContent">
        <form onSubmit={(event) => onGenerateReports(event)}>
          <div className="sellerReportsDates">
            <Input
              type="date"
              className="sellerReportInput"
              value={startDate}
              valid={+true}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
            />
            <Input
              type="date"
              className="sellerReportInput"
              value={endDate}
              valid={+true}
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
            />
          </div>
          <div className="sellerReportsButton">
            <Button className="sellerReportsButton" type="submit">
              Generar Reporte
            </Button>
          </div>
        </form>
        <div className="sellerReportsReports">{reports}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    userID: state.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(SellerReports);
