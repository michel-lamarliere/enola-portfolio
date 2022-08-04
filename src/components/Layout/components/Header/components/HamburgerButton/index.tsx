import React, { useState } from "react";

import classes from "./styles.module.scss";

const HamburgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    /*<button
      className={`${classes.wrapper} ${
        menuState.isOpen && classes["wrapper--opened"]
      } ${props.className}`}
      onClick={hamburgerButtonHandler}
    >
      <div className={classes.lines}>
        <span
          className={`${classes.lines__line} ${
            menuState.isOpen && classes["lines__line--mobile-menu-is-open"]
          }`}
        />
      </div>
    </button>*/
    <button
      className={`${classes.wrapper} ${isOpen && classes["wrapper--opened"]}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={classes.lines}>
        <span
          className={`${classes.lines__line} ${
            isOpen && classes["lines__line-is-open"]
          }`}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
