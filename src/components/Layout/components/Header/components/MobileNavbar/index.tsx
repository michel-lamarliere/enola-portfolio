import React from "react";
import { Link } from "react-router-dom";

import HamburgerButton from "../HamburgerButton";

import logoE from "assets/icons/e_logo.svg";

import classes from "./styles.module.scss";

interface Props {
  className: string;
}

const MobileNavbar: React.FC<Props> = (props) => {
  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to="/accueil" className={classes["logo-button"]}>
        <img src={logoE} alt={"Logo Enola Louge"} />
      </Link>
      <HamburgerButton />
    </nav>
  );
};

export default MobileNavbar;
