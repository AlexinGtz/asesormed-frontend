import React from "react";

import "./AdminReport.css";

const AdminReport = (props) => {
  return (
    <div className="adminReportContent">
      <div className="adminReportName">
        <h2>{props.name}</h2>
      </div>
      <div className="adminReportRectangle" />
      <div className="adminReportAccount">
        <h2>{props.account}</h2>
      </div>
      <div className="adminReportRectangle" />
      <div className="adminReportAmount">
        <h2>${props.amount}</h2>
      </div>
    </div>
  );
};

export default AdminReport;
