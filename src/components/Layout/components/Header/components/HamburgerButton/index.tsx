import React from "react";
import { useDispatch } from "react-redux";

import { TOGGLE_MOBILE_MENU } from "store/mobile-menu";

import classes from "./styles.module.scss";

const HamburgerButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={classes.wrapper}
      onClick={() => {
        dispatch(TOGGLE_MOBILE_MENU());
      }}
    >
      <div className={classes.lines}>
        <span className={classes.lines__line} />
      </div>
    </button>
  );
};

export default HamburgerButton;
