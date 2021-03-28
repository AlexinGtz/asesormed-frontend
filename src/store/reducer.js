import * as actionTypes from "./actions";

const initialState = {
  mail: "",
  id: null,
  isLoggedIn: false,
  userType: null,
  token: null,
  expiresIn: null,
  message: "",
  messageType: 0,
  showMessageModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userType: action.payload.userType,
        id: action.payload.id,
        token: action.payload.token,
      };
    case actionTypes.LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("userType");
      localStorage.removeItem("userId");
      return {
        ...state,
        isLoggedIn: false,
        userType: null,
        id: null,
      };
    case actionTypes.EXPIRATION_HANDLER:
      return {};
    case actionTypes.CHANGE_EXPIRE_DATE:
      return {
        ...state,
        expiresIn: action.payload.expiresIn,
      };
    case actionTypes.CHANGE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        showMessageModal: true,
        messageType: action.payload.messageType,
      };
    case actionTypes.CLOSE_MAIN_MODAL:
      return {
        showMessageModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
