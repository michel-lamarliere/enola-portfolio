import React from "react";

import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";

import classes from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <DesktopNavbar className={classes.desktop} />
      <MobileNavbar className={classes.mobile} />
    </>
  );
};

export default Header;
