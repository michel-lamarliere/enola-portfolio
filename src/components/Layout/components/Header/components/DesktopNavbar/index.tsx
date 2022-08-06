import React from "react";
import { Link } from "react-router-dom";

import LanguageButton from "components/ui-elements/LanguageButton";
import ContactLink from "components//ui-elements/ContactLink";
import CustomNavLink from "components/ui-elements/CustomNavLink";
import EnolaLougeLogo from "components/ui-elements/EnolaLougeLogo";

import classes from "./styles.module.scss";

interface Props {
  className: string;
}

const DesktopNavbar: React.FC<Props> = (props) => {
  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to="/" className={classes["logo-button"]}>
        <EnolaLougeLogo className={classes["logo-button__icon"]} />
      </Link>
      <div className={classes["main-links"]}>
        <CustomNavLink to={"/accueil"} text={"Accueil"} />
        <CustomNavLink to={"/projets"} text={"Projets"} />
        <CustomNavLink to={"/a-propos"} text={"À propos"} />
      </div>
      <div className={classes["secondary-links"]}>
        <LanguageButton />
        <ContactLink />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
