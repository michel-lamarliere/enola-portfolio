import React from "react";

import { useMobileMenuStore } from "store/mobileMenu";

import classes from "components/Layout/Header/HamburgerButton/HamburgerButton.module.scss";

const HamburgerButton: React.FC = () => {
  const mobileMenu = useMobileMenuStore((state) => state);

  return (
    <button
      className={classes.wrapper}
      onClick={() => {
        mobileMenu.toggle();
      }}
    >
      <div className={classes.lines}>
        <span className={classes.lines__line} />
      </div>
    </button>
  );
};

export default HamburgerButton;
