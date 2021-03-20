import * as actionTypes from "../store/actions";

const checkTimeout = (expiresIn) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.LOGOUT });
    }, expiresIn);
  };
};

export default checkTimeout;
