import React from "react";
import { Link } from "react-router-dom";

import ContactLink from "components/uiElements/ContactLink/ContactLink";
import CustomNavLink from "components/uiElements/CustomNavLink/ContactNavLink";
import EnolaLougeLogo from "components/uiElements/svgs/EnolaLougeLogo/EnolaLougeLogo";
import { routes } from "config/routes";
import { getRoutes } from "utils/getRoutes";

import classes from "./DesktopNavbar.module.scss";

interface Props {
  className: string;
}

const DesktopNavbar: React.FC<Props> = (props) => {
  const routesToDisplay = getRoutes();

  return (
    <nav className={`${classes.wrapper} ${props.className}`}>
      <Link to={routes.home.url()} className={classes["logo-button"]}>
        <EnolaLougeLogo />
      </Link>
      <div className={classes["main-links"]}>
        {routesToDisplay.map((route) => (
          <CustomNavLink
            key={`${route.title}-desktop`}
            to={route.url()}
            text={route.title}
          />
        ))}
      </div>
      <div className={classes["secondary-links"]}>
        {/*<LanguageButton />*/}
        <ContactLink />
      </div>
    </nav>
  );
};

export default DesktopNavbar;
