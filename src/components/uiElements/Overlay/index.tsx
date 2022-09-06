import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useTransition } from "react-spring";

import { RootState } from "store/store";
import { CLOSE_MOBILE_MENU } from "store/mobileMenu";

import classes from "./styles.module.scss";

const Overlay: React.FC = () => {
  const dispatch = useDispatch();

  const mobileMenuState = useSelector((state: RootState) => state.mobileMenu);

  const transition = useTransition(mobileMenuState.isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transition(
    (styles, item) =>
      item && (
        <animated.div
          onClick={() => dispatch(CLOSE_MOBILE_MENU())}
          className={classes.wrapper}
          style={styles}
        />
      )
  );
};

export default Overlay;
