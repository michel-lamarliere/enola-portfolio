import React from "react";
import { Link } from "react-router-dom";
import ContactLink from "components/uiElements/ContactLink/ContactLink";
import CustomNavLink from "components/uiElements/CustomNavLink/ContactNavLink";
import EnolaLougeLogo from "components/uiElements/svgs/EnolaLougeLogo/EnolaLougeLogo";

import classes from "components/Layout/components/Header/DesktopNavbar/DesktopNavbar.module.scss";

interface Props {
  className: string;
}

const DesktopNavbar: React.FC<Props> = (props) => {
  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to="/accueil" className={classes["logo-button"]}>
        <EnolaLougeLogo />
      </Link>
      <div className={classes["main-links"]}>
        <CustomNavLink to={"/accueil"} text={"Accueil"} />
        <CustomNavLink to={"/projets"} text={"Projets"} />
        <CustomNavLink to={"/a-propos"} text={"À propos"} />
      </div>
      <div className={classes["secondary-links"]}>
        {/*<LanguageButton />*/}
        <ContactLink />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
