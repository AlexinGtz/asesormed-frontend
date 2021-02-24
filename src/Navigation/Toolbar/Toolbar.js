import React from "react";

import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <Menu clicked={props.openSideDrawer} />
      <div className="Logo">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
