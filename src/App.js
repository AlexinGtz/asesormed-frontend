import React from "react";
import { BrowserRouter } from "react-router-dom";

import ConsultaXpress from "./Containers/ConsultaXpress/ConsultaXpress";

function App() {
  return (
    <BrowserRouter>
      <ConsultaXpress></ConsultaXpress>
    </BrowserRouter>
  );
}

export default App;
