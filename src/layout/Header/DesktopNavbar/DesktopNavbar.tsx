import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { ContactLink } from "components/ContactLink/ContactLink";
import { CustomNavLink } from "components/CustomNavLink/ContactNavLink";
import { EnolaLougeLogo } from "layout/Header/DesktopNavbar/EnolaLougeLogo/EnolaLougeLogo";
import { routes } from "config/routes";
import { getRoutes } from "utils/getRoutes";
import { Container } from "components/Container";

import styles from "layout/Header/DesktopNavbar/DesktopNavbar.module.scss";

type Props = {
  className: string;
};

export const DesktopNavbar = ({ className }: Props) => {
  const routesToDisplay = getRoutes();

  return (
    <Container>
      <nav
        className={cn(styles.wrapper, {
          [`${className}`]: className,
        })}
      >
        <Link to={routes.home.url()} className={styles.logoLink}>
          <EnolaLougeLogo />
        </Link>
        <div className={styles.mainLinks}>
          {routesToDisplay.map((route) => (
            <CustomNavLink
              key={`${route.title}-desktop`}
              to={route.url()}
              text={route.title}
            />
          ))}
        </div>
        <div className={styles.secondaryLinks}>
          <ContactLink />
        </div>
      </nav>
    </Container>
  );
};
