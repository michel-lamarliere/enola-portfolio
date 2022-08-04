import React from "react";
import { Link, NavLink } from "react-router-dom";

import logoEL from "assets/icons/enola-louge_logo.svg";
import EnolaLougeLogo from "components/ui-elements/EnolaLougeLogo";

import classes from "./styles.module.scss";

interface Props {
  className: string;
}

const DesktopNavbar: React.FC<Props> = (props) => {
  const link = classes["main-links__item"];
  const activeLink = `${classes["main-links__item"]} ${classes["main-links__item--active"]}`;

  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to="/" className={classes["logo-button"]}>
        <EnolaLougeLogo className={classes["logo-button__icon"]} />
      </Link>
      <div className={classes["main-links"]}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/projets"}
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          Projets
        </NavLink>
        <NavLink
          to={"/a-propos"}
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          A propos
        </NavLink>
      </div>
      <div className={classes["secondary-links"]}>
        <button className={classes["secondary-links__language"]}>EN</button>
        <Link
          to={"/accueil/contact"}
          className={classes["secondary-links__contact"]}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
