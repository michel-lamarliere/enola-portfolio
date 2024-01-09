import React from "react";

import Reviews from "pages/about-me/components/Reviews/Reviews";
import AboutMe from "pages/about-me/components/AboutMe/AboutMe";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import classes from "pages/about-me/page/AboutMePage.module.scss";

const AboutMePage = () => {
  return (
    <div className={classes.wrapper}>
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
    </div>
  );
};

export default AboutMePage;
