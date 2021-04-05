import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";

import Layout from "../../Layout/Layout";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import AddSeller from "../../components/AddSeller/AddSeller";
import AddAppointment from "../../components/AddAppointment/AddAppointment";
import AddDoctor from "../../components/AddDoctor/AddDoctor";
import SeeAppointments from "../../components/SeeAppointments/SeeAppointments";
import Profile from "../../components/Profile/Profile";
import AdminReports from "../../components/Reports/AdminReports/AdminReports";
import SellerReports from "../../components/Reports/SellerReports/SellerReports";
import Login from "../../components/Login/Login";
import Checkout from "../../components/Checkout/Checkout";
import Logout from "../../components/Logout/Logout";
import checkTimeout from "../../store/authAction";
import MessageModal from "../../UI/MessageModal/MessageModal";
import Spinner from "../../UI/Spinner/Spinner";

const ConsultaXpress = (props) => {
  useEffect(() => {
    props.checkAuth();
  }, []);

  let routes = (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/checkout/:id" component={Checkout} />
      <Route exact path="/" component={HomeMenu} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    switch (props.userType) {
      case 0:
        routes = (
          <Switch>
            <Route exact path="/addSeller" component={AddSeller} />
            <Route exact path="/reports" component={AdminReports} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={HomeMenu} />
            <Redirect to="/" />
          </Switch>
        );
        break;
      case 1:
        routes = (
          <Switch>
            <Route exact path="/addAppointment" component={AddAppointment} />
            <Route exact path="/seeAppointments" component={SeeAppointments} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={HomeMenu} />
            <Redirect to="/" />
          </Switch>
        );
        break;
      case 2:
        routes = (
          <Switch>
            <Route exact path="/addDoctor" component={AddDoctor} />
            <Route exact path="/reports" component={SellerReports} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={HomeMenu} />
            <Redirect to="/" />
          </Switch>
        );
        break;

      default:
        break;
    }
  }

  const spinner = props.loading ? <Spinner /> : null;

  return (
    <div className="consultaXpress">
      <Layout>
        {routes}
        {spinner}
        <MessageModal closeModal={props.closeModal} />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    userType: state.userType,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // checkTimeout: (expiresIn) => dispatch(checkTimeout(expiresIn)),
    checkAuth: () => {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: actionTypes.LOGOUT });
      } else {
        const exporationDate = new Date(localStorage.getItem("expirationDate"));
        const userType = parseInt(localStorage.getItem("userType"));
        const userId = parseInt(localStorage.getItem("userId"));
        if (exporationDate > new Date()) {
          dispatch({
            type: actionTypes.LOGIN,
            payload: { id: userId, token: token, userType: userType },
          });
          //dispatch(checkTimeout(600));
        } else {
          dispatch({ type: actionTypes.LOGOUT });
        }
      }
    },
    closeModal: () => {
      dispatch({ type: actionTypes.CLOSE_MAIN_MODAL });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsultaXpress);
