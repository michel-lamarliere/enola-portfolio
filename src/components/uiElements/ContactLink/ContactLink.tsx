import React from "react";

import classes from "components/uiElements/ContactLink/ContactLink.module.scss";
import { Link } from "react-router-dom";

const ContactLink: React.FC = () => {
  return (
    <Link to={"/accueil/contact"} className={classes.wrapper}>
      Contact
    </Link>
  );
};

export default ContactLink;
