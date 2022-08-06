import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useTransition } from "react-spring";

import { RootState } from "store/store";
import { TOGGLE_MOBILE_MENU } from "store/mobile-menu";

import classes from "./styles.module.scss";
import CustomNavLink from "../ui-elements/CustomNavLink";
import LanguageButton from "../ui-elements/LanguageButton";
import ContactLink from "../ui-elements/ContactLink";

const MobileMenu: React.FC = () => {
  const dispatch = useDispatch();

  const mobileMenuState = useSelector((state: RootState) => state.mobileMenu);

  const transition = useTransition(mobileMenuState.isOpen, {
    from: { opacity: 0, y: 0, x: 300 },
    enter: { opacity: 1, y: 0, x: 0 },
    leave: { opacity: 0, y: 0, x: 300 },
  });

  return transition(
    (styles, item) =>
      item && (
        <animated.div className={classes.wrapper} style={styles}>
          <button
            className={classes.button}
            onClick={() => {
              dispatch(TOGGLE_MOBILE_MENU());
            }}
          >
            <div className={classes.lines}>
              <span className={classes.lines__line} />
            </div>
          </button>
          <ul className={classes["main-links"]}>
            <CustomNavLink to={"/accueil"} text={"Accueil"} />
            <CustomNavLink to={"/projets"} text={"Projets"} />
            <CustomNavLink to={"/a-propos"} text={"À propos"} />
          </ul>
          <ul className={classes["secondary-links"]}>
            <LanguageButton />
            <ContactLink />
          </ul>
        </animated.div>
      )
  );
};

export default MobileMenu;
