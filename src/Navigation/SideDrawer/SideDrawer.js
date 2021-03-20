import React from "react";

import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = props.open
    ? ["SideDrawer", "Open"]
    : ["SideDrawer", "Closed"];

  return (
    <React.Fragment>
      <Backdrop closed={props.close} show={props.open} />
      <div className={attachedClasses.join(" ")}>
        <div className="DrawerLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
