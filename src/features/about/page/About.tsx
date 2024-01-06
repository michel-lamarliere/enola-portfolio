import React from "react";
import Reviews from "features/reviews/components/Reviews/Reviews";
import AboutMe from "features/about/components/AboutMe/AboutMe";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import classes from "features/about/page/About.module.scss";

const About = () => {
  return (
    <>
      <AboutMe />
      <Reviews />
      <div className={classes.footer}>
        <div className={classes.footer_question}>
          Et si on travaillait ensemble ?
        </div>
        <RoundedButton
          text={"Me contacter"}
          type={RoundedButtonTypes.LINK}
          to={`${routes.home.url}${routes.home.hashes?.contact}`}
          className={classes.footer_link}
        />
      </div>
    </>
  );
};

export default About;
