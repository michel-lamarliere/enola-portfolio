import React from "react";

import classes from "./styles.module.scss";
import Services from "./component/Services";
import Reviews from "./component/Reviews";

const About: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Services />
      <Reviews />
    </div>
  );
};

export default About;
