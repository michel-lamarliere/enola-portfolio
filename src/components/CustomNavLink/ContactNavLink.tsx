import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./ContactNavLink.module.scss";

type Props = {
  to: string;
  text: string;
};

export const CustomNavLink = ({ to, text }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? cn(styles.wrapper, styles.wrapper__active) : styles.wrapper
      }
    >
      {text}
    </NavLink>
  );
};
