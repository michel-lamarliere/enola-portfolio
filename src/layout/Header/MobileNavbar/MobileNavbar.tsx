import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { HamburgerButton } from "layout/Header/HamburgerButton/HamburgerButton";

import logoE from "assets/icons/e_logo.svg";

import styles from "./MobileNavbar.module.scss";

type Props = {
  className: string;
};

export const MobileNavbar = ({ className }: Props) => {
  return (
    <nav
      className={cn(styles.wrapper, {
        [`${className}`]: className,
      })}
    >
      <Link to="/" className={styles.logoLink}>
        <img src={logoE} alt={"Logo Enola Louge"} />
      </Link>
      <HamburgerButton />
    </nav>
  );
};
