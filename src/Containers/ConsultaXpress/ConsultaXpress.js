import React from "react";
import { Route } from "react-router";

import Layout from "../../Layout/Layout";
import HomeMenu from "../../components/HomeMenu/HomeMenu";

const consultaXpress = (props) => {
  return (
    <React.Fragment>
      <Layout>
        <Route exact path="/" component={HomeMenu} />
      </Layout>
    </React.Fragment>
  );
};

export default consultaXpress;
