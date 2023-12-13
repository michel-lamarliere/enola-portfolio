import React from "react";
import { NavLink } from "react-router-dom";

import classes from "components/uiElements/CustomNavLink/ContactNavLink.module.scss";

interface Props {
  to: string;
  text: string;
}

const CustomNavLink: React.FC<Props> = (props) => {
  const link = classes.wrapper;
  const activeLink = `${classes.wrapper} ${classes["wrapper--active"]}`;

  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? activeLink : link)}
    >
      {props.text}
    </NavLink>
  );
};

export default CustomNavLink;
