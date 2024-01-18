import React from "react";
import { animated, useTransition } from "react-spring";

import { CustomNavLink } from "components/CustomNavLink/ContactNavLink";
import { ContactLink } from "components/ContactLink/ContactLink";
import { useMobileMenuStore } from "store/mobileMenu";
import { getRoutes } from "utils/getRoutes";

import styles from "layout/Header/MobileMenu/MobileMenu.module.scss";

export const MobileMenu = () => {
  const mobileMenu = useMobileMenuStore((state) => state);

  const transition = useTransition(mobileMenu.isOpen, {
    from: { opacity: 0, y: 0, x: 300 },
    enter: { opacity: 1, y: 0, x: 0 },
    leave: { opacity: 0, y: 0, x: 300 },
  });

  const routesToDisplay = getRoutes();

  return transition(
    (style, item) =>
      item && (
        <animated.div className={styles.wrapper} style={style}>
          <button className={styles.button} onClick={mobileMenu.toggle}>
            <div className={styles.lines}>
              <span className={styles.lines_item} />
            </div>
          </button>
          <ul className={styles.mainLinks}>
            {routesToDisplay.map((route) => (
              <CustomNavLink
                key={`${route.title}-mobile`}
                to={route.url()}
                text={route.title}
              />
            ))}
          </ul>
          <ul className={styles.secondaryLinks}>
            <ContactLink />
          </ul>
        </animated.div>
      )
  );
};
