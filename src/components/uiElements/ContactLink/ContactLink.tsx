import React from "react";
import { Link } from "react-router-dom";

import { routes } from "config/routes";

import classes from "./ContactLink.module.scss";

const ContactLink: React.FC = () => {
  return (
    <Link
      to={`${routes.home.url}${routes.home.hashes?.contact}`}
      className={classes.wrapper}
    >
      Contact
    </Link>
  );
};

export default ContactLink;
