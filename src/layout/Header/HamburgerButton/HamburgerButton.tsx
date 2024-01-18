import React from "react";

import { useMobileMenuStore } from "store/mobileMenu";

import styles from "./HamburgerButton.module.scss";

export const HamburgerButton = () => {
  const mobileMenu = useMobileMenuStore((state) => state);

  return (
    <button className={styles.wrapper} onClick={() => mobileMenu.toggle()}>
      <div className={styles.lines}>
        <span className={styles.lines_item} />
      </div>
    </button>
  );
};
