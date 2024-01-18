import React from "react";

import { MobileNavbar } from "layout/Header/MobileNavbar/MobileNavbar";
import { DesktopNavbar } from "layout/Header/DesktopNavbar/DesktopNavbar";

import styles from "layout/Header/Header.module.scss";

export const Header = () => {
  return (
    <>
      <DesktopNavbar className={styles.desktop} />
      <MobileNavbar className={styles.mobile} />
    </>
  );
};
