import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

import ConsultaXpress from "./Containers/ConsultaXpress/ConsultaXpress";
import reducer from "./store/reducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConsultaXpress></ConsultaXpress>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
