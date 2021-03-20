import React from "react";

import "./HomeMenu.css";

import InfoSection from "../infoSection/infoSection";

const homeMenu = (props) => {
  return (
    <div className="homeMenuDiv">
      <InfoSection alignment="right" title="Agenda Consultas">
        The majority of examinations of the high-tech impacts show that some
        part of the big impact should correlate with The Development of Crucial
        Competence
      </InfoSection>
      <InfoSection alignment="left" title="Por Videollamada">
        The majority of examinations of the high-tech impacts show that some
        part of the big impact should correlate with The Development of Crucial
        Competence
      </InfoSection>
      <InfoSection alignment="right" title="Asegura tu Pago">
        The majority of examinations of the high-tech impacts show that some
        part of the big impact should correlate with The Development of Crucial
        Competence
      </InfoSection>
    </div>
  );
};

export default homeMenu;
