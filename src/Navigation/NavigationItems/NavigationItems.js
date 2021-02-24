import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const isLoggedIn = true;
  const userType = 0;

  //TODO: Change links

  const LogIn = isLoggedIn ? null : (
    <NavigationItem link="/login">Acceder</NavigationItem>
  );
  const LogOut = !isLoggedIn ? null : (
    <NavigationItem link="/login">Salir</NavigationItem>
  );
  const Profile = !isLoggedIn ? null : (
    <NavigationItem link="/login">Perfil</NavigationItem>
  );
  const AddSeller =
    userType === 0 ? (
      <NavigationItem link="/login">Añadir Vendedor</NavigationItem>
    ) : null;
  const AddDoctor =
    userType === 2 ? (
      <NavigationItem link="/login">Añadir Doctor</NavigationItem>
    ) : null;
  const AddAppointment =
    userType === 1 ? (
      <NavigationItem link="/login">Añadir Cita</NavigationItem>
    ) : null;
  const SeeAppointments =
    userType === 1 ? (
      <NavigationItem link="/login">Ver Citas</NavigationItem>
    ) : null;

  return (
    <ul className="NavigationItems">
      {LogIn}
      {AddSeller}
      {AddDoctor}
      {AddAppointment}
      {SeeAppointments}
      {Profile}
      {LogOut}
    </ul>
  );
};

export default navigationItems;
