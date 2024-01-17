import React from "react";
import { Link } from "react-router-dom";

import ContactLink from "components/uiElements/ContactLink/ContactLink";
import CustomNavLink from "components/uiElements/CustomNavLink/ContactNavLink";
import EnolaLougeLogo from "components/uiElements/svgs/EnolaLougeLogo/EnolaLougeLogo";
import { routes } from "config/routes";
import { getRoutes } from "utils/getRoutes";
import { Container } from "components/Container";

import classes from "components/Layout/Header/DesktopNavbar/DesktopNavbar.module.scss";
import cn from "classnames";

type Props = {
  className: string;
};

const DesktopNavbar = ({ className }: Props) => {
  const routesToDisplay = getRoutes();

  return (
    <Container>
      <nav
        className={cn(classes.wrapper, {
          [`${className}`]: className,
        })}
      >
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
    </Container>
  );
};

export default DesktopNavbar;
