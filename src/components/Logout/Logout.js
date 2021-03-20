import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";

const Logout = (props) => {
  useEffect(() => {
    props.logout();
  }, []);
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: actionTypes.LOGOUT }),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
