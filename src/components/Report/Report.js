import React from "react";

import "./Report.css";

const Report = (props) => {
  return (
    <div className="reportContent">
      <div className="reportName">
        <h2>{props.name}</h2>
      </div>
      <div className="reportRectangle" />
      <div className="reportAccount">
        <h2>{props.account}</h2>
      </div>
      <div className="reportRectangle" />
      <div className="reportAmount">
        <h2>${props.amount}</h2>
      </div>
    </div>
  );
};

export default Report;
