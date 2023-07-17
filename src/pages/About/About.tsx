import React from "react";

import Services from "pages/About/Services/Services";
import Reviews from "features/reviews/page/ReviewsPage";
import AboutMe from "pages/About/AboutMe/AboutMe";

import classes from "pages/About/About.module.scss";

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
