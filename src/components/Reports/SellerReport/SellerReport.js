import React from "react";

import "./SellerReport.css";

const Report = (props) => {
  return (
    <div className="sellerReportContent">
      <div className="sellerReportName">
        <h2>{props.name}</h2>
      </div>
      <div className="sellerReportRectangle" />
      <div className="sellerReportAmount">
        <h2>Citas: {props.amount}</h2>
      </div>
    </div>
  );
};

export default Report;
