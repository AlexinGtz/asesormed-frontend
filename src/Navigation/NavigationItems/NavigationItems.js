import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { connect } from "react-redux";

const navigationItems = (props) => {
  //TODO: Si es checkout no renderear nada del menu
  const LogIn = props.isLoggedIn ? null : (
    <NavigationItem link="/login">Acceder</NavigationItem>
  );
  const LogOut = !props.isLoggedIn ? null : (
    <NavigationItem link="/logout">Salir</NavigationItem>
  );
  const Profile =
    !props.isLoggedIn || props.userType === 0 ? null : (
      <NavigationItem link="/profile">Perfil</NavigationItem>
    );
  const AddSeller =
    props.isLoggedIn && props.userType === 0 ? (
      <NavigationItem link="/addSeller">Añadir Vendedor</NavigationItem>
    ) : null;
  const Reports =
    props.isLoggedIn && (props.userType === 0 || props.userType === 2) ? (
      <NavigationItem link="/reports">Reportes</NavigationItem>
    ) : null;
  const AddDoctor =
    props.isLoggedIn && props.userType === 2 ? (
      <NavigationItem link="/addDoctor">Añadir Doctor</NavigationItem>
    ) : null;
  const AddAppointment =
    props.isLoggedIn && props.userType === 1 ? (
      <NavigationItem link="/addAppointment">Añadir Cita</NavigationItem>
    ) : null;
  const SeeAppointments =
    props.isLoggedIn && props.userType === 1 ? (
      <NavigationItem link="/SeeAppointments">Ver Citas</NavigationItem>
    ) : null;

  return (
    <ul className="NavigationItems">
      {LogIn}
      {AddSeller}
      {AddDoctor}
      {Reports}
      {AddAppointment}
      {SeeAppointments}
      {Profile}
      {LogOut}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userType: state.userType,
  };
};

export default connect(mapStateToProps, null)(navigationItems);
