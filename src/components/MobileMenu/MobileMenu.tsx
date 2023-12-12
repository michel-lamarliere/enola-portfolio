import React from "react";
import { animated, useTransition } from "react-spring";

import CustomNavLink from "components/uiElements/CustomNavLink/ContactNavLink";
import ContactLink from "components/uiElements/ContactLink/ContactLink";
import { useMobileMenuStore } from "store/mobileMenu";
import { getRoutes } from "utils/getRoutes";

import classes from "./MobileMenu.module.scss";

const MobileMenu: React.FC = () => {
  const mobileMenu = useMobileMenuStore((state) => state);

  const transition = useTransition(mobileMenu.isOpen, {
    from: { opacity: 0, y: 0, x: 300 },
    enter: { opacity: 1, y: 0, x: 0 },
    leave: { opacity: 0, y: 0, x: 300 },
  });

  const routesToDisplay = getRoutes();

  return transition(
    (styles, item) =>
      item && (
        <animated.div className={classes.wrapper} style={styles}>
          <button className={classes.button} onClick={mobileMenu.toggle}>
            <div className={classes.lines}>
              <span className={classes.lines__line} />
            </div>
          </button>
          <ul className={classes["main-links"]}>
            {routesToDisplay.map((route) => (
              <CustomNavLink
                key={`${route.title}-mobile`}
                to={route.url()}
                text={route.title}
              />
            ))}
          </ul>
          <ul className={classes["secondary-links"]}>
            <ContactLink />
          </ul>
        </animated.div>
      )
  );
};

export default MobileMenu;
