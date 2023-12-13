import React from "react";

import MobileNavbar from "components/Layout/Header/MobileNavbar/MobileNavbar";
import DesktopNavbar from "components/Layout/Header/DesktopNavbar/DesktopNavbar";

import classes from "components/Layout/Header/Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <DesktopNavbar className={classes.desktop} />
      <MobileNavbar className={classes.mobile} />
    </>
  );
};

export default Header;
