import React from "react";

import Services from "./component/Services";
import Reviews from "./component/Reviews";
import AboutMe from "./component/AboutMe";

import classes from "./styles.module.scss";

const About: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Services />
      <Reviews />
      <AboutMe />
    </div>
  );
};

export default About;
