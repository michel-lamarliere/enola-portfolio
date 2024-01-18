import React from "react";
import { Link } from "react-router-dom";

import { routes } from "config/routes";

import styles from "components/ContactLink/ContactLink.module.scss";

export const ContactLink = () => {
  return (
    <Link
      to={`${routes.home.url()}${routes.home.hashes?.contact}`}
      className={styles.wrapper}
    >
      Contact
    </Link>
  );
};
