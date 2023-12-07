import React from "react";
import { Link } from "react-router-dom";

import ContactLink from "components/uiElements/ContactLink/ContactLink";
import CustomNavLink from "components/uiElements/CustomNavLink/ContactNavLink";
import EnolaLougeLogo from "components/uiElements/svgs/EnolaLougeLogo/EnolaLougeLogo";
import { routes } from "config/routes";

import classes from "./DesktopNavbar.module.scss";

interface Props {
  className: string;
}

const DesktopNavbar: React.FC<Props> = (props) => {
  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to={routes.home.root} className={classes["logo-button"]}>
        <EnolaLougeLogo />
      </Link>
      <div className={classes["main-links"]}>
        <CustomNavLink to={routes.home.root} text={"Accueil"} />
        <CustomNavLink to={routes.projects} text={"Projets"} />
        <CustomNavLink to={routes.about} text={"À propos"} />
      </div>
      <div className={classes["secondary-links"]}>
        {/*<LanguageButton />*/}
        <ContactLink />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
