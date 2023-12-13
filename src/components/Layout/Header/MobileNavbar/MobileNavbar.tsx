import React from "react";
import { Link } from "react-router-dom";

import HamburgerButton from "components/Layout/Header/HamburgerButton/HamburgerButton";

import logoE from "assets/icons/e_logo.svg";

import classes from "components/Layout/Header/MobileNavbar/MobileNavbar.module.scss";

interface Props {
  className: string;
}

const MobileNavbar: React.FC<Props> = (props) => {
  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to="/" className={classes["logo-button"]}>
        <img src={logoE} alt={"Logo Enola Louge"} />
      </Link>
      <HamburgerButton />
    </nav>
  );
};

export default MobileNavbar;
